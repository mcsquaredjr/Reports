#!/usr/bin/env python

import os
import json
import markdown2
from jinja2 import Template

from flask import render_template
from flask import jsonify
from flask import request
from flask import redirect
from flask import Markup
from flask import Blueprint
from flask import url_for
from flask.ext import admin, login
from flask.ext.admin.contrib import sqlamodel as sqla
from wtforms import form, fields, validators
from flask.ext.security import login_required
from functools import wraps

from utils import helpers
from utils.reportmaker import Report_Maker
from utils.reportmaker import Report_Maker

from app import app
from app import db

from db_proto.report_models import db
from db_proto.report_models import User
from db_proto.report_models import Project_State
from db_proto.report_models import Project
from db_proto.report_models import Milestone_State
from db_proto.report_models import Milestone

from db_proto.report_queries import commit_projects
from db_proto.report_queries import commit_milestones
from db_proto.report_queries import get_projects



SUCC_MSG = \
'''
<div class="alert alert-success">
    <strong>Well done!</strong> Your report has been sumbitted.
</div>
<div>
    <p>
        <a href="/" class="btn btn-primary btn-lg">Back to the form</a>
        <a href="/report/" class="btn btn-info btn-lg">Take me to the report</a>
    </p>
</div>
'''

ERR_MSG = \
'''
<div class="alert alert-danger">
    <strong>Oh, snap!</strong> Something went wrong, resubmit your report.
</div>
<div>
    <p>
        <a href="/" class="btn btn-primary btn-lg">Back to the form</a>
    </p>
</div>
'''

report_maker = Report_Maker()


# Define login and registration forms (for flask-login)
class Login_Form(form.Form):
    email = fields.TextField(validators=[validators.required()])
    password = fields.PasswordField(validators=[validators.required()])

    def post_validate(self):
        user = self.get_user()

        if user is None:
            raise validators.ValidationError('Invalid user')

        if user.password != self.password.data:
            raise validators.ValidationError('Invalid password')

        return True

    def get_user(self):
        users = db.session.query(User).filter_by(email=self.email.data)
        if users.count() == 0:
            return None

        return users.first()


class Registration_Form(form.Form):
    email = fields.TextField(validators=[validators.required()])
    password = fields.PasswordField(validators=[
        validators.required(),
        validators.EqualTo('confirm', message='Passwords must match')
        ])
    confirm = fields.PasswordField()


# Initialize flask-login
def init_login():
    login_manager = login.LoginManager()
    login_manager.setup_app(app)

    # Create user loader function
    @login_manager.user_loader
    def load_user(user_id):
        return db.session.query(User).get(user_id)


# Create customized model view class
class Model_View(sqla.ModelView):
    def is_accessible(self):
        return login.current_user.is_authenticated()


# Create customized index view class
class Admin_Index_View(admin.AdminIndexView):
    def is_accessible(self):
        return login.current_user.is_authenticated()


def admin_required(f):
    @wraps(f)
    def _check(*args, **kwargs):
        user = login.current_user
        if user is not None and user.is_admin():
            return f(*args, **kwargs)
        return redirect(url_for('login_view'))
    return _check

@app.route('/', methods=('GET', 'POST'))
def login_view():
    form = Login_Form(request.form)
    try:
        if helpers.validate_form_on_submit(form) and form.post_validate():
            user = form.get_user()
            login.login_user(user)
            return redirect(url_for('report_form'))
    except validators.ValidationError as e:
        form.email.data = ''
        form.password.data = ''
        print e
    except:
        form.email.data = ''
        form.password.data = ''
        print 'Unknown error!'

    return render_template('login.html', form=form, user=login.current_user)

@app.route('/register', methods=('GET', 'POST'))
def register_view():
    form = Registration_Form(request.form)

    if helpers.validate_form_on_submit(form):
        user = User()

        form.populate_obj(user)

        # Set user permissions
        user.usertype = 0;

        db.session.add(user)
        db.session.commit()

        login.login_user(user)
        return redirect(url_for('login_view'))

    return render_template('register.html', form=form)

@app.route('/my_account', methods=['POST', 'GET'])
@login_required
def my_account_view():
    return render_template('my_account.html')

@app.route('/form')
@login_required
def report_form():
    form_tmpl = Template(serve('form.html'))
    return form_tmpl.render(user=login.current_user)

@app.route('/logout/')
@login_required
def logout_view():
    login.logout_user()
    return redirect(url_for('login_view'))

@app.route('/projects')
@login_required
@admin_required
def projects():
    projects_tmpl = Template(serve('projects.html'))

    return projects_tmpl.render(title='Projects', user=login.current_user)




@app.route('/milestones')
@login_required
@admin_required
def milestones():
    projects_tmpl = Template(serve('milestones.html'))
    return projects_tmpl.render(title='Milestones', user=login.current_user)


@app.route('/process/', methods=['GET', 'POST'])
def process():
    if request.method == 'POST':
        data = json.loads(request.data)

        if data['method'] == 'send_data':
            # We send report data here   
            answer = data['params']['message']
            report_maker.add_data(json.loads(answer))
        elif data['method'] == 'send_projects':
            # We want to commit projects data in the db
            projects = data['params']['message']
            commit_projects(json.loads(projects))
            # Get projects from db, and ignore deleted
            projects_in_db = get_projects()
            answer = dict()
            answer['data'] = json.dumps(projects_in_db)
            answer['msg'] = 'hello'
        elif data['method'] == 'send_milestones':
            # We want to commit milestones data in the db
            milestones = data['params']['message']
            commit_milestones(json.loads(milestones))
            # Get projects from db, and ignore deleted
            answer = milestones
        elif data['method'] == 'get_projects':
            projects_in_db = get_projects()
            answer = dict()
            answer['data'] = json.dumps(projects_in_db)
            answer['msg'] = 'hello'
            
        else:
            # We don't know what we are doing
            # TODO: do proper processing here
            return 'Error!' 
            
        return jsonify(result=answer)
    

@app.route('/success/', methods=['GET', 'POST'])
@login_required
def success():
    if request.method == 'GET':
        return SUCC_MSG

    
@app.route('/report/')
@app.route('/report/<name>')
@login_required
def show_report(name=None):
    mmd_report = report_maker.data2md()
    html_report = Markup(markdown2.markdown(mmd_report))
    return render_template('report.html', report=html_report, user=login.current_user)
    

# Load requested file here 
@app.route('/<requestedfile>')
def serve(requestedfile):
    with file('pyjs/' + requestedfile) as f:
        return f.read()
    
if __name__ == '__main__':
    #db.drop_all()
    ## db.create_all()

    ## # Create project states
    ## p_state_active = Project_State('Active')
    ## p_state_inactive = Project_State('Inactive')
    ## p_state_deleted = Project_State('Deleted')

    ## adm_usr = User(email='admin', password='admin', usertype=1)
    
    ## db.session.add(p_state_active)
    ## db.session.add(p_state_inactive)
    ## db.session.add(p_state_deleted)
    ## db.session.add(adm_usr)

    ## # Create milestone states
    ## m_state_active = Milestone_State('Active')
    ## m_state_inactive = Milestone_State('Inactive')
    ## m_state_deleted = Milestone_State('Deleted')
    
    ## db.session.add(m_state_active)
    ## db.session.add(m_state_inactive)
    ## db.session.add(m_state_deleted)

    ## db.session.commit()
    
    # Initialize flask-login
    init_login()
    
    # Create admin
    admin = admin.Admin(app, 'Auth', index_view=Admin_Index_View())
    
    # Add view
    admin.add_view(Model_View(User, db.session))
  
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 8002))
    app.run(host='0.0.0.0', port=port)


