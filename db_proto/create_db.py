
from report_models import Project
from report_models import Milestone
from report_models import Impediment
from report_models import Report

from report_models import Project_State
from report_models import Milestone_State
from report_models import Impediment_State


from report_models import db

import datetime

db.drop_all()
db.create_all()

# Create project states
p_state_active = Project_State('Active')
p_state_inactive = Project_State('Inactive')
p_state_deleted = Project_State('Deleted')

db.session.add(p_state_active)
db.session.add(p_state_inactive)
db.session.add(p_state_deleted)

# Create a couple of projects
pr_trinity = Project('Trinity')
pr_scruffy = Project('Scruffy')
pr_osg = Project('OSG')
pr_morpheus = Project('Morpheus')
pr_gizmozoid = Project('Gizmozoid')
pr_engserv = Project('Engineering Services')

p_state_active.projects = [pr_trinity, pr_scruffy, pr_engserv]
p_state_deleted.projects = [pr_gizmozoid]
p_state_inactive.projects = [pr_morpheus, pr_osg]


# Create milestone states
m_state_active = Milestone_State('Active')
m_state_inactive = Milestone_State('Inactive')
m_state_deleted = Milestone_State('Deleted')
m_state_complete = Milestone_State('Complete')

db.session.add(m_state_active)
db.session.add(m_state_inactive)
db.session.add(m_state_complete)
db.session.add(m_state_deleted)


mi_one = Milestone('Betazoid code freeze',
                   'No more features in Betazoid',
                   datetime.datetime.utcnow(),
                   datetime.datetime.utcnow()
                   )

mi_two = Milestone('Betazoid system tests',
                   'Testing Betazoid systematically',
                   datetime.datetime.utcnow(),
                   datetime.datetime.utcnow()
                   )

mi_three = Milestone('Gammazoid milestone',
                   'It will happen one day, maybe',
                   datetime.datetime.utcnow(),
                   datetime.datetime.utcnow()
                   )

m_state_active.milestones = [mi_one, mi_two]
m_state_inactive.milestones = [mi_three]



im_state_open = Impediment_State('Open')
im_state_closed = Impediment_State('Closed')

impediment_one = Impediment('Cannot concentrate',
                            'I always think about food when I work',
                            datetime.datetime.utcnow())
impediment_two = Impediment('So tired',
                            'I always want to slepp when I work',
                            datetime.datetime.utcnow())

im_state_open.impediments = [impediment_one, impediment_two]





pr_gizmozoid.impediments = [impediment_one]

pr_morpheus.impediments = [impediment_two]


report_one = Report('lorem ipsum',
                    'lorem ipsum',
                    'Leo Tolstoy',
                    datetime.datetime.utcnow())

report_two = Report('lorem ipsum',
                    'lorem ipsum',
                    'Alexandre Dumas',
                    datetime.datetime.utcnow())
report_three = Report('lorem ipsum',
                    'lorem ipsum',
                    'Leo Tolstoy',
                    datetime.datetime.utcnow())

pr_gizmozoid.reports = [report_one, report_two]
pr_morpheus.reports = [report_three]

report_one.milestones = [mi_one, mi_two]
report_two.milestones = [mi_one, mi_two]
report_three.milestones = [mi_three]

db.session.add(pr_scruffy)
db.session.add(pr_trinity)
db.session.add(pr_osg)
db.session.add(pr_morpheus)
db.session.add(pr_engserv)
db.session.add(pr_gizmozoid)
db.session.add(m_state_active)
db.session.add(m_state_inactive)
db.session.add(m_state_complete)
db.session.add(m_state_deleted)
db.session.add(mi_one)
db.session.add(mi_two)
db.session.add(mi_three)
db.session.add(im_state_open)
db.session.add(im_state_closed)
db.session.add(impediment_one)
db.session.add(impediment_two)
db.session.add(report_two)
db.session.add(report_one)

db.session.commit()

