#!/usr/bin/env python

import os
from flask import Flask
from flask import render_template
from flask import jsonify
from flask import request
from flask import redirect
from flask import Markup
from flask import Blueprint
from flask import url_for
from flask.ext.sqlalchemy import SQLAlchemy

from wtforms import form, fields, validators
from flask.ext import admin, login
from flask.ext.admin.contrib import sqlamodel as sqla

from utils import helpers
from flask.ext.security import login_required


import json
import markdown2
from jinja2 import Template

from utils.reportmaker import Report_Maker

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
app = Flask(__name__)
app.debug = True

# Create dummy secrey key so we can use sessions
app.config['SECRET_KEY'] = '123456790'

# Create in-memory database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'
app.config['SQLALCHEMY_ECHO'] = True
db = SQLAlchemy(app)

# Create user model. For simplicity, it will store passwords in plain text.
# Obviously that's not right thing to do in real world application.
class User(db.Model):
    email = db.Column(db.String(120), primary_key=True)
    password = db.Column(db.String(64))

    # Flask-Login integration
    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return self.email

# Define login and registration forms (for flask-login)
class LoginForm(form.Form):
    email = fields.TextField(validators=[validators.required()])
    password = fields.PasswordField(validators=[validators.required()])

    def post_validate(self):
        print 'validate_login'
        user = self.get_user()

        if user is None:
            raise validators.ValidationError('Invalid user')

        if user.password != self.password.data:
            raise validators.ValidationError('Invalid password')

        return True

    def get_user(self):
        print 'get_user'
        users = db.session.query(User).filter_by(email=self.email.data)
        print users.count()
        print 'get_user exit'
        if users.count() == 0:
            return None

        return users.first()


class RegistrationForm(form.Form):
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
class MyModelView(sqla.ModelView):
    def is_accessible(self):
        return login.urrent_user.is_authenticated()



@app.route('/', methods=('GET', 'POST'))
def login_view():
    form = LoginForm(request.form)
    if helpers.validate_form_on_submit(form) and form.post_validate():
    #if form.validate_on_submit() and form.post_validaste():
        user = form.get_user()
        login.login_user(user)
        return redirect(url_for('report_form'))

    return render_template('login.html', form=form)


@app.route('/register/', methods=('GET', 'POST'))
def register_view():
    form = RegistrationForm(request.form)

    if helpers.validate_form_on_submit(form):
    #if form.validate_on_submit():
        
        user = User()
        form.populate_obj(user)
        db.session.add(user)
        db.session.commit()
        login.login_user(user)
        return redirect(url_for('report_form'))
    return render_template('register.html', form=form)



@app.route('/form')
@login_required
def report_form():
    return serve('form.html')


## @app.route('/main', methods=['POST', 'GET'])
## @login_required
## def main():
##     print "Need login."
##     if request.method == 'POST':
##         """ json available through request.json """
##         print request.json
##     return render_template('main.html')


@app.route('/logout/')
@login_required
def logout_view():
    login.logout_user()
    return redirect(url_for('login'))


@app.route('/projects')
@login_required
def projects():
    projects_tmpl = Template(serve('projects.html'))
    return projects_tmpl.render(title='Projects')


@app.route('/milestones')
@login_required
def milestones():
    projects_tmpl = Template(serve('milestones.html'))
    return projects_tmpl.render(title='Milestones')


@app.route('/process/', methods=['GET', 'POST'])
def process():
    if request.method == 'POST':
        data = json.loads(request.data)
        
        if data['method'] != 'send_data':
            return 'error' #do some proper error handling, not this!
        else:    
            answer = data['params']['message']
            report_maker.add_data(json.loads(answer))
        return jsonify(result=answer)
    

@app.route('/success/', methods=['GET', 'POST'])
@login_required
def success():
    if request.method == 'GET':
        return SUCC_MSG

    
@app.route('/report/')
@app.route('/report/<name>')
def show_report(name=None):
    mmd_report = report_maker.data2md()
    html_report = Markup(markdown2.markdown(mmd_report))
    return render_template('report.html',report=html_report)
    

# Load requested file here 
@app.route('/<requestedfile>')
def serve(requestedfile):
    with file('pyjs/' + requestedfile) as f:
        return f.read()
    
if __name__ == '__main__':

    # Initialize flask-login
    init_login()
    # Create DB
    db.create_all()
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 8002))
    app.run(host='0.0.0.0', port=port)


