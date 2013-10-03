from report_models import Project
from report_models import Milestone
from report_models import Impediment
from report_models import Report

from report_models import Project_State
from report_models import Milestone_State
from report_models import Impediment_State

from report_models import db
from sqlalchemy.exc import IntegrityError

import datetime
import timeutils
import sys

from app import db


session = db.session


def get_report(project):
    '''Generate data structure suitable for presenting a report for a given project
    and date.
    '''
    project = session.query(Project).filter(Project.name == project).first()
    project_id = project.id
    
    reports = session.query(Report).filter(Report.project_id == project_id).order_by(Report.created).all()

    print reports[-1]
    # now find all milestones associated to the report
    report_id = reports[-1].id
    milestones = session.query(Milestone).filter(Milestone.report_id == report_id).all()

    print milestones
    # now find all impediments:
    impediments = session.query(Impediment).filter(Impediment.project_id == project_id).all()

    print impediments


def get_projects():
    '''Return a list of lists representing projects in the projects form, using join.
    Return only projects with state != Deleted.
    '''
    q = session.query(Project.id, Project.name, Project_State.name)
    q = q.filter(Project.state_id == Project_State.id)
    p = q.filter(Project_State.name != 'Deleted').all()
    p = [list(el) for el in p]
    return p


def commit_projects(new_data):
    '''Commit projects in the database, updating or adding rows if necessary.
    '''
    old_data = get_projects()
    new_projects = []

    
    for row in new_data:
        project_id = row[0]
        if project_id is not None:
            project = session.query(Project).filter(Project.id == project_id).first()
            project.name = row[1]
            state = session.query(Project_State).filter(Project_State.name == row[2]).first()
            project.state = state
        else:
            project = Project(row[1])
            state = session.query(Project_State).filter(Project_State.name == row[2]).first()
            project.state = state
            new_projects.append(project)

    for project in new_projects:
        session.add(project)
    try:
        session.commit()
    except IntegrityError:
        session.rollback()
        print '\n*** INTEGRITY ERROR: Cannot commit projects. Rolled back.'


def get_milestones():
    '''Return a list of lists representing milestones in the form,
    only milestones in states other than Deleted will be returned. 
    '''
    q = session.query(Milestone.id,
                      Milestone.name,
                      Milestone.desc,
                      Milestone.start,
                      Milestone.end,
                      Milestone_State.name)
    q = q.filter(Milestone.state_id == Milestone_State.id)
    m = q.filter(Milestone_State.name != 'Deleted').all()
    # Conver to list of lists
    m = [list(el) for el in m]
    for row in m:
        # Convert dates to strings
        row[3] = timeutils.to_date(row[3])
        row[4] = timeutils.to_date(row[4])
    return m    

    
def commit_milestones(data):
    '''Commit milestones in the database, updading or adding rows in necessary.'''
    old_data = get_milestones()
    new_data = data
    new_milestones = []
    for row in new_data:
        milestone_id = row[0]
        if milestone_id is not None:
            milestone = session.query(Milestone).filter(Milestone.id == milestone_id).first()
            milestone.name = row[1] 
            state = session.query(Milestone_State).filter(Milestone_State.name == row[2]).first()
            milestone.state = state
            milestone.start = timeutils.to_date_time_obj(row[3])
            milestone.end = timeutils.to_date_time_obj(row[4])
            milestone.desc = 'Lorem ipsum dolor sit amet.'
            
        else:
            new_milestones.append(Milestone(row[1],
                                            'lorem ipsum dolor sit amet',
                                            timeutils.to_date_time_obj(row[3]),
                                            timeutils.to_date_time_obj(row[4])))
            state = session.query(Milestone_State).filter(Milestone_State.name == row[2]).first()
            state.milestones.extend(new_milestones)

            for m in new_milestones:
                print m
            
    for milestone in new_milestones:
        session.add(milestone)
    try:
        session.commit()
    except IntegrityError:
        session.rollback()
        print '\n*** ERROR: Milestone names must be unique. Will roll back.'

        
    

def commit_report(data):
    pass

if __name__ == '__main__':

    ######################################################################
    #     READ THIS: BEFORE EXECUTING THE SCRIPT CREATE NEW DB TO TEST   #
    ######################################################################
    
    get_report('Gizmozoid')
    print '\n=== List of reports before update:'
    projects = get_projects()
    for p in projects:
        print p
    p_data = [[1, 'project 1', 'Deleted'],
              [2, 'project 2', 'Deleted'],
              [None, 'project 4', 'Inactive']]

    commit_projects(p_data)
    print '\n=== List of reports after update:'
    projects = get_projects()
    for p in projects:
        print p

    milestones = get_milestones()

    m_data = [[1, 'Milestone 1', '09/10/2012', '10/10/2012', 'Active'],
              [2, 'Milestone 2', '09/10/2012', '10/10/2012', 'Inactive'],
              [None, 'Milestone 3', '09/11/2012', '10/12/2012', 'Inactive'],
              [None, 'Milestone 10', '09/11/2012', '10/12/2012', 'Deleted'],
              ]
    print "\n=== List of milestones before update:"
    for m in milestones:
        print m

    commit_milestones(m_data, [])

    milestones = get_milestones()
    print "\n=== List of milestones after  update:"
    for m in milestones:
        print m

    
