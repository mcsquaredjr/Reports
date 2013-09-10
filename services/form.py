import os
from flask import Flask
from flask import render_template
from flask import jsonify
from flask import request
from flask import Markup
from flask import Blueprint
import json


form_page = Blueprint('form_page', __name__, template_folder='templates')

@form_page.route('/form')
def form():
    return serve('form.html')

 # Load requested file here 
@form_page.route('/<requestedfile>')
def serve(requestedfile):
    with file('_form/' + requestedfile) as f:
        return f.read()
