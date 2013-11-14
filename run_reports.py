#!/usr/bin/env python

import os
import argparse
import json
import datetime
from datetime import timedelta
import markdown2
import random
import urllib2
import re

from jinja2 import Template

from flask import render_template
from flask import jsonify
from flask import request
from flask import redirect
from flask import flash
from flask import Markup
from flask import Blueprint
from flask import url_for
from flask.ext import admin, login
from flask.ext.admin.contrib import sqlamodel as sqla
from wtforms import form, fields, validators
from flask.ext.security import login_required
from functools import wraps

import numpy as np
import matplotlib.pyplot as plt

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
from db_proto.report_models import Impediment_State
from db_proto.report_models import Milestone

from db_proto.report_queries import commit_projects
from db_proto.report_queries import commit_milestones
from db_proto.report_queries import get_projects
from db_proto.report_queries import get_milestones
from db_proto.report_queries import get_milestone_completion
from db_proto.report_queries import get_report
from db_proto.report_queries import get_reports
from db_proto.report_queries import get_impediment_board
from db_proto.report_queries import submission_status


from db_proto.report_queries import commit_report

from db_proto.timeutils import this_week_start_end
from db_proto.timeutils import to_date_time_obj
from db_proto.timeutils import to_date
from db_proto.timeutils import unix_time_delta

SUCC_MSG = \
'''
<div class="alert alert-success">
    <strong>Well done!</strong> Your report has been sumbitted.
</div>
<div>
    <p>
        <a href="/form" class="btn btn-primary btn-lg">Back to the form</a>
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
        <a href="/form" class="btn btn-primary btn-lg">Back to the form</a>
    </p>
</div>
'''

GRAPHS_DIR = 'graphs'

report_maker = Report_Maker()

# Define login and registration forms (for flask-login)
class Login_Form(form.Form):
    email = fields.TextField(validators=[validators.required()])
    password = fields.PasswordField(validators=[validators.required()])

    def post_validate(self):
        user = self.get_user()

        if user is None:
            raise validators.ValidationError('Invalid user')

        if not user.check_password(self.password.data):
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


# Create customized model view class
class Model_View(sqla.ModelView):
    def is_accessible(self):
        return login.current_user.is_authenticated()


# Create customized index view class
class Admin_Index_View(admin.AdminIndexView):
    def is_accessible(self):
        return login.current_user.is_authenticated()

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        user = login.current_user
        if user is None or not user.is_authenticated():
            return redirect(url_for('login_view'))
        return f(*args, **kwargs)
    return decorated_function

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
    error = None
    try:
        if helpers.validate_form_on_submit(form) and form.post_validate():
            user = form.get_user()
            login.login_user(user)
            # Flash the message
            #flash(user.email + ' was successfully logged in')
            return redirect(url_for('report_form'))
    except:
        form.email.data = ''
        form.password.data = ''
        error = 'Invalid credentials'

    return render_template('login.html', form=form, user=login.current_user, error=error)

@app.route('/register', methods=('GET', 'POST'))
def register_view():
    form = Registration_Form(request.form)

    if helpers.validate_form_on_submit(form):
        user = User()

        form.populate_obj(user)
        user.password = user.hash_password(user.password)

        # Set user permissions
        user.usertype = 0;

        db.session.add(user)
        db.session.commit()

        login.login_user(user)
        return redirect(url_for('login_view'))

    return render_template('register.html', form=form)

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

def extract_date(file_name):
    allmatches = re.findall(r'\d{4}-\d{1,2}-\d{1,2}', file_name)
    return allmatches

def write_report():
    dir_name = 'archive'
    if not os.path.exists(dir_name):
        os.makedirs(dir_name)

    # Get data for all recent reports
    data = get_reports()
    
    for report in data:
        report['status'] = Markup(markdown2.markdown(report['status'].replace('\n', '\n\n')))
        report['risks'] = Markup(markdown2.markdown(report['risks'].replace('\n', '\n\n')))
        for i in report['impediments']:
            i['comment'] = Markup(markdown2.markdown(i['comment'].replace('\n', '\n\n')))

    html_str = render_template('report.html', reports=data, user=login.current_user)

    week_data = this_week_start_end()

    file_name = 'report-' + week_data[1].strftime("%Y-%m-%d") + '.html'

    file = open(dir_name + '/' + file_name, 'w')
    file.write(html_str)
    file.close()

def get_archived_reports():
    data = []

    for files in os.listdir("archive"):
        if files.endswith(".html"):
            allmatches = extract_date(files)
            if allmatches[0] is not None:
                data.append([allmatches[0], files])

    return data

@app.route('/archive')
@login_required
def archive():
    data = get_archived_reports()
    return render_template('archive.html', user=login.current_user, data=data)

@app.route('/process/', methods=['GET', 'POST'])
def process():
    if request.method == 'POST':
        data = json.loads(request.data)

        if data['method'] == 'send_data':
            # Commit report to the database
            report = json.loads(data['params']['message'])
            report['author'] = login.current_user.email
            commit_report(report)
            answer = dict()
            answer['data'] = None
            answer['msg'] = 'send_data'            
            
        elif data['method'] == 'send_projects':
            # We want to commit projects data in the db
            projects = data['params']['message']
            commit_projects(json.loads(projects))
            # Get projects from db, and ignore deleted
            projects_in_db = get_projects()
            answer = dict()
            answer['data'] = json.dumps(projects_in_db)
            answer['msg'] = 'send_projects'
            
        elif data['method'] == 'send_milestones':
            # We want to commit milestones data in the db
            milestones = data['params']['message']
            commit_milestones(json.loads(milestones))
            # Get milestones from db, and ignore deleted
            milestones_in_db = get_milestones()
            answer = dict()
            answer['data'] = json.dumps(milestones_in_db)
            answer['msg'] = 'send_milestones'

        elif data['method'] == 'get_projects':
            # Get all projects 
            projects_in_db = get_projects()
            answer = dict()
            answer['data'] = json.dumps(projects_in_db)
            answer['msg'] = 'get_projects'
            
        elif data['method'] == 'get_milestones':
            # Get all milestones
            milestones_in_db = get_milestones()
            answer = dict()
            answer['data'] = json.dumps(milestones_in_db)
            answer['msg'] = 'get_milestones'

        elif data['method'] == 'get_active_projects':
            # Get active projects
            projects_in_db = get_projects(inactive=False)
            answer = dict()
            answer['data'] = json.dumps(projects_in_db)
            answer['msg'] = 'get_active_projects'
            
        elif data['method'] == 'get_active_milestones':
            # Get active milestones
            milestones_in_db = get_milestones(inactive=False)
            answer = dict()
            answer['data'] = json.dumps(milestones_in_db)
            answer['msg'] = 'get_active_milestones'
            
        elif  data['method'] == 'get_report_for_project':
            # Get latest report data for a given project
            project = data['params']['message']
            report_data = get_report(json.loads(project))
            answer = dict()
            answer['data'] = json.dumps(report_data)
            answer['msg'] = 'get_report_for_project'

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

def gen_milestone_graph(m):
    milestone_id = m[0]
    data = get_milestone_completion(milestone_id)

    xvalues = []
    ylables = []
    xlabels = []

    # Get milestone start date
    start_date = to_date_time_obj(m[3])

    for p in data:
        end_date = data[p]
        if end_date is not None:
            ylables.append(p)
            xvalues.append(unix_time_delta(start_date, end_date))

    max_day = 0
    for value in xvalues:
        max_day = max(max_day, value)

    xlabels_positions = []

    x_step = max_day / 3;
    for i in range(4):
        xlabels_positions.append(x_step * i)
        date = start_date + timedelta(days=x_step*i)
        xlabels.append(to_date(date))

    fig = plt.figure(figsize=(7, 3), dpi=300)
    fig.clf()
    ax = fig.add_subplot(111)
    fig.subplots_adjust(left = 0.3)
    ax.grid(True, which='both')

    yticks_positions = range(len(xvalues))

    bar = ax.barh(yticks_positions, xvalues, 0.4, align='center')

    ax.set_xticks(xlabels_positions)
    ax.set_xticklabels(xlabels)

    ax.set_yticks(yticks_positions)
    ax.set_yticklabels(ylables)

    filename = GRAPHS_DIR + '/milestone_' + str(milestone_id) + '.png'
    plt.savefig(filename)

    if (len(xvalues) > 0):
        return filename
    else:
        return None

def gen_milestones_graphs():
    if not os.path.exists(GRAPHS_DIR):
        os.makedirs(GRAPHS_DIR)

    milestones = get_milestones()
    files = []

    for m in milestones:
        filename = gen_milestone_graph(m)
        if filename is not None:
            files.append(filename)

    return files
    
@app.route('/milestones_graphs/')
@login_required
def show_milestones_graphs(name=None):
    files = gen_milestones_graphs()

    date = datetime.datetime.now()
    date = to_date(date)
    return render_template('milestones_graphs.html', files=files, user=login.current_user, date=date)

@app.route('/report/')
@app.route('/report/<name>')
@login_required
def show_report(name=None):
    # Generate and write report
    write_report()

    # Get data for all recent reports
    data = get_reports()
    
    for report in data:
        report['status'] = Markup(markdown2.markdown(report['status'].replace('\n', '\n\n')))
        report['risks'] = Markup(markdown2.markdown(report['risks'].replace('\n', '\n\n')))
        for i in report['impediments']:
            i['comment'] = Markup(markdown2.markdown(i['comment'].replace('\n', '\n\n')))

    return render_template('report.html', reports=data, user=login.current_user)

@app.route('/impediments/')
@login_required
def impediments_board():
    # Get data for all recent reports
    data = get_impediment_board()
    for key in data.keys():
        impediments = data[key]
        for i in impediments:
            i['comment'] =  Markup(markdown2.markdown(i['comment'].replace('\n', '\n\n')))
    return render_template('impediments.html', data=data, user=login.current_user)



@app.route('/submission/')
@login_required
def submission_board():
    # Get data for all recent reports
    data = submission_status()
    return render_template('submission.html', data=data, user=login.current_user)




@app.route('/_resetdb_')
#@login_required
#@admin_required
def resetdb():
    # TODO: delete once in production
    db.drop_all()
    db.create_all()

    # Create project states
    p_state_active = Project_State('Active')
    p_state_inactive = Project_State('Inactive')
    p_state_deleted = Project_State('Deleted')
    # Create admin user for testing
    adm_usr = User(email='admin', password='admin', usertype=1)

    db.session.add(p_state_active)
    db.session.add(p_state_inactive)
    db.session.add(p_state_deleted)
    db.session.add(adm_usr)

    # Create milestone states
    m_state_active = Milestone_State('Active')
    m_state_inactive = Milestone_State('Inactive')
    m_state_deleted = Milestone_State('Deleted')

    db.session.add(m_state_active)
    db.session.add(m_state_inactive)
    db.session.add(m_state_deleted)


    # Create impediments states
    i_state_open = Impediment_State('Open')
    i_state_closed = Impediment_State('Closed')

    db.session.add(i_state_open)
    db.session.add(i_state_closed)
    
    db.session.commit()
    return '<h3>Database has been reset!</h3>'
    
# Load requested file here 
@app.route('/<requestedfile>')
def serve(requestedfile):
    try:
        with file('pyjs/' + requestedfile) as f:
            return f.read()
    except IOError as e:
        return page_not_found(e)

# Load requested file here 
@app.route('/archive/<requestedfile>')
def serve_archive(requestedfile):
    try:
        with file('archive/' + requestedfile) as f:
            return f.read()
    except IOError as e:
        return page_not_found(e)

# Load requested file here 
@app.route('/milestones_graphs/graphs/<requestedfile>')
def serve_graph(requestedfile):
    try:
        with file('graphs/' + requestedfile) as f:
            return f.read()
    except IOError as e:
        return page_not_found(e)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html')

# Initialize flask-login
def init_login():
    login_manager = login.LoginManager()
    login_manager.setup_app(app)

    # Create user loader function
    @login_manager.user_loader
    def load_user(user_id):
        return db.session.query(User).get(user_id)

def twisted(value):
    print 'Twisted on port {port}...'.format(port=value)
    from twisted.internet import reactor
    from twisted.web.server import Site
    from twisted.web.wsgi import WSGIResource

    resource = WSGIResource(reactor, reactor.getThreadPool(), app)
    site = Site(resource)

    reactor.listenTCP(value, site, interface="0.0.0.0")
    reactor.run()

if __name__ == '__main__':
    # Initialize flask-login
    init_login()
    
    # Create admin
    admin = admin.Admin(app, 'Auth', index_view=Admin_Index_View())
    
    # Add view
    admin.add_view(Model_View(User, db.session))

    parser = argparse.ArgumentParser(description='Description of your program')
    parser.add_argument('--twisted', help='Twisted event-driven web server', type=int)
    args = vars(parser.parse_args())

    if args['twisted']:
        twisted(args['twisted'])
    else:
        port = int(os.environ.get('PORT', 8002))

        # Server using generated by hand tuple
        # app.run(host='0.0.0.0', port=port, ssl_context=('crypt/server.crt', 'crypt/server.key'))
        #
        # Server automatically generate (cert_file, pkey_file) tuple, requires 'sudo easy_install pyopenssl'
        # app.run(host='0.0.0.0', port=port, ssl_context='adhoc')
        app.run(host='0.0.0.0', port=port)
