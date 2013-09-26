
from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'
app.config['SQLALCHEMY_ECHO'] = False
db = SQLAlchemy(app)



######################################################################
#                        CLASS PROJECT_STATE                         #
######################################################################
class Project_State(db.Model):
    '''Representing project states in the database.
    '''
    __tablename__ = 'project_states'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(12), unique = True)

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return '<Project_State %r>' % (self.name)


######################################################################
#                      CLASS MILESTONE_STATE                         #
######################################################################
class Milestone_State(db.Model):
    '''Representing milestone states in the database.
    '''
    __tablename__ = 'milestone_states'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(12), unique = True)

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return '<Milestone_State %r>' % (self.name)
    


######################################################################
#                      CLASS IMPEDIMENT_STATE                         #
######################################################################
class Impediment_State(db.Model):
    '''Representing milestone states in the database.
    '''
    __tablename__ = 'impediment_states'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(12), unique = True)

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return '<Impediment_State %r>' % (self.name)
    

    

######################################################################
#                           CLASS PROJECT                            #
######################################################################
class Project(db.Model):
    __tablename__ = 'projects'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(64), unique = True)
    state_id = db.Column(db.Integer, db.ForeignKey('project_states.id'))
    state = db.relationship('Project_State',
                             backref=db.backref('projects', order_by=id))
    
    def __init__(self, name):
    	self.name = name
        #self.state = st
     
    def __repr__(self):
        return '<Project %r>' % (self.name)




######################################################################
#                         CLASS MILESTONE                            #
######################################################################
class Milestone(db.Model):
    __tablename__ = 'milestones'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(64), unique = True)
    desc = db.Column(db.Text)
    start = db.Column(db.DateTime)
    end = db.Column(db.DateTime)
    # We have many to one associations with statuses and reports
    # Right-hand side of the expression is "one", while "many" is provided
    # in the relationship part
    state_id = db.Column(db.Integer, db.ForeignKey('milestone_states.id'))
    state = db.relationship('Milestone_State',
                             backref=db.backref('milestones', order_by=id))
    # It reads: one  report is associated with one or more milestones
    report_id = db.Column(db.Integer, db.ForeignKey('reports.id'))
    report = db.relationship('Report',
                             backref=db.backref('milestones', order_by=id))

    def __init__(self, name, desc, start, end):
    	self.name = name
        self.desc = desc
        self.start = start
        self.end = end

     
    def __repr__(self):
        return '<Milestone %r>' % (self.name)


######################################################################
#                        CLASS IMPEDIMENT                            #
######################################################################
class Impediment(db.Model):
    __tablename__ = 'impediments'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(128))
    comment = db.Column(db.Text)
    start = db.Column(db.DateTime)
    end = db.Column(db.DateTime)

    state_id = db.Column(db.Integer, db.ForeignKey('impediment_states.id'))
    state = db.relationship('Impediment_State',
                             backref=db.backref('impediments', order_by=id))

    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'))
    project = db.relationship('Project',
                             backref=db.backref('impediments', order_by=id))

    report_id = db.Column(db.Integer, db.ForeignKey('reports.id'))
    report = db.relationship('Report',
                             backref=db.backref('impediments', order_by=id))


    def __init__(self, name, comment, start, end=None):
    	self.name = name
        self.comment = comment
        self.start = start
        self.end = end

     
    def __repr__(self):
        return '<Impediment %r>' % (self.name)


    

######################################################################
#                           CLASS REPORT                             #
######################################################################
class Report(db.Model):
    __tablename__ = 'reports'
    id = db.Column(db.Integer, primary_key = True)
    status = db.Column(db.Text)
    risks = db.Column(db.Text)
    created = db.Column(db.DateTime)
    # We should not tie users to authors probably to have some flexibility,
    # i.e. theoretically one user may report to different projects
    author = db.Column(db.String(32))
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'))
    project = db.relationship('Project',
                             backref=db.backref('reports', order_by=id))
    
    def __init__(self, status, risks, author, created):
    	self.status = status
        self.risks = risks
        self.created = created
        self.author = author
     
    def __repr__(self):
        return '<Report %r %r>' % (self.created, self.author)



if __name__ == '__main___':
	pass
    
    
