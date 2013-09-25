from report_models import Project
from report_models import Milestone
from report_models import Impediment
from report_models import Report

from report_models import Project_State
from report_models import Milestone_State
from report_models import Impediment_State


from report_models import db

import datetime

session = db.session



def _print():
    '''Output some information about database tables.
    '''
    print '='*70
    print '\n*** REPORTS'
    projects = session.query(Project).all()
    for project in projects:
        print 'id: {0} name: {1}'.format(project.id, project.name)

    print '='*70
    print '\n*** MILESTONES'
    milestones = session.query(Milestone).all()
    for milestone in milestones:
        print 'id: {0} name: {1} start: {2} end: {3} state: {4}'.format(milestone.id,
                                                                        milestone.name,
                                                                        milestone.start,
                                                                        milestone.end,
                                                                        milestone.state.name)
    print '='*70
    print '\n*** IMPEDIMENTS'
    impediments = session.query(Impediment).all()
    for impediment in impediments:
        print 'id: {0} name: {1} start: {2} state: {3}'.format(impediment.id,
                                                               impediment.name,
                                                               impediment.start,
                                                               impediment.state.name)
    print '='*70
    print '\n*** REPORTS'
    reports = session.query(Report).all()
    for report in reports:
        print 'id: {0} author: {1} project: {2}'.format(report.id,
                                                        report.author,
                                                        report.project.name)

def report_q(project):
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
    
def commit_projects(data, deleted_data):
    pass

def commit_milestones(data, deleted_data):
    pass

def commit_report(data):
    pass

if __name__ == '__main__':
    report_q('Gizmozoid')
    
