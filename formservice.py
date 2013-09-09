#!/usr/bin/env python

import os
from flask import Flask
from flask import render_template
from flask import jsonify
from flask import request
from flask import Markup
import json
import markdown2

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

class Report_Maker(object):
    '''
    Store submitted data and generate good-looking HTML
    '''
    def __init__(self):
        # Keep all submitted reports in array of dicts
        self.data = []

    def add_data(self, new_data):
        '''Append collected data
        '''
        self.data.append(new_data)

    def get_data(self):
        '''Return collected data
        '''
        return self.data

    def data2md(self):
        '''Convert submitted data to markdown'''
        mmd_txt = ''
        for entry in self.data:
            keys = sorted(entry.keys())
            #mmd_txt += '# Neo report\n'
            mmd_txt += '## ' + entry['project'] + '\n'
            for key in keys:
                if key != 'project':
                    mmd_txt += '### ' + key + '\n'
                    mmd_txt += entry[key] + '\n'

        return mmd_txt.replace('\n', '\n\n')

report_maker = Report_Maker()

app = Flask(__name__)
app.debug = True

@app.route('/')
def index():
    return serve('reportform.html')
    
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
    with file('output/' + requestedfile) as f:
        return f.read()
    
if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)


