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
    milestones = reports[-1].milestones

    print milestones
    # now find all impediments:
    #impediments = session.query(Impediment).filter(Impediment.project_id == project_id).all()

    #print impediments
    return [milestones, None]


def get_projects(inactive=True):
    '''Return a list of lists representing projects in the projects form, using join.
    Return only projects with state != Deleted.
    '''
    q = session.query(Project.id, Project.name, Project_State.name)
    q = q.filter(Project.state_id == Project_State.id)
    if inactive is False:
        p = q.filter(Project_State.name != 'Deleted').filter(Project_State.name != 'Deleted').all()
    else:
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
        print '\n*** DB INTEGRITY ERROR: Cannot commit projects. Rolled back.'


def get_milestones(inactive=True):
    '''Return a list of lists representing milestones in the form,
    only milestones in states other than Deleted will be returned. 
    '''
    q = session.query(Milestone.id,
                      Milestone.name,
                      Milestone_State.name,
                      Milestone.start,
                      Milestone.end)
    q = q.filter(Milestone.state_id == Milestone_State.id)
    if inactive is False:
        m = q.filter(Milestone_State.name != 'Deleted').filter(Milestone_State.name != 'Inactive').all()
    else:
        m = q.filter(Milestone_State.name != 'Deleted').all()
    # Convert to list of lists
    m = [list(el) for el in m]
   
    for row in m:
        # Convert dates to strings
        row[3] = timeutils.to_date(row[3])
        row[4] = timeutils.to_date(row[4])
    return m    

    
def commit_milestones(new_data):
    '''Commit milestones in the database, updading or adding rows in necessary.'''
    old_data = get_milestones()
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
            milestone = Milestone(row[1],
                                  timeutils.to_date_time_obj(row[3]),
                                  timeutils.to_date_time_obj(row[4]))
            
            state = session.query(Milestone_State).filter(Milestone_State.name == row[2]).first()
            milestone.state = state
            new_milestones.append(milestone)

    for milestone in new_milestones:
        session.add(milestone)
    try:
        session.commit()
    except IntegrityError:
        session.rollback()
        print '\n*** DB INTEGRIY ERROR: Cannot commit milestones. Rolled back.'

    
def commit_report(data):
    '''Commit report and its counterparts.
    '''

    project_name = data['project']
    status = data['status']
    risks = data['risks']
    created = timeutils.now()
    author = data['author']
    project = session.query(Project).filter(Project.name == project_name).first()
    report = Report(status, risks, author, created)
    report.project = project
    session.add(report)
    
    # Now process impediments and milestones
    impediments = data['impediments']
    milestones = data['milestones']
    # Cycle through impediments and add them if we have any
    if len(impediments) > 0:
        for imp in impediments:
            desc = imp['description']
            comment = imp['comment']
            start = timeutils.to_date_time_obj(imp['start_date'])
            try:
                end = timeutils.to_date_time_obj(imp['end_date'])
            except TypeError:
                end = None
            state_name = imp['state']
            impediment = Impediment(desc, comment, start, end)
            
            impediment.project = project
            impediment.report = report
            state = session.query(Impediment_State).filter(Impediment_State.name == state_name).first()
            impediment.state = state
            session.add(impediment)

    # Now do similarly to milestones:
    if len(milestones) > 0:
        for mil in milestones:
            milestone = session.query(Milestone).filter(Milestone.name == mil['name']).first()
            try:
                report.milestones.extend([milestone])
            except AttributeError:
                report.milestones = []
                report.milestones.extend([milestone]) 
                
    try:
        session.commit()
        
    except IntegrityError:
        session.rollback()
        print '\n*** DB INTEGRITY ERROR: Cannot commit report. Rolled back.'
    
    

