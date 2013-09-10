import os
from flask import Flask
from flask import render_template
from flask import jsonify
from flask import request
from flask import Markup
from flask import Blueprint
import json


projects_page = Blueprint('projects_page', __name__, template_folder='templates')

@projects_page.route('/projects')
def projects():
    return serve('projects.html')

 # Load requested file here 
@projects_page.route('/<requestedfile>')
def serve(requestedfile):
    with file('_projects/' + requestedfile) as f:
        return f.read()
