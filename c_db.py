from db_proto.report_models import Project
from db_proto.report_models import Milestone
from db_proto.report_models import Impediment
from db_proto.report_models import Report

from db_proto.report_models import Project_State
from db_proto.report_models import Milestone_State
from db_proto.report_models import Impediment_State


from db_proto.report_models import db

import datetime

db.drop_all()
db.create_all()
