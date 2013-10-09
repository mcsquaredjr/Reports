import pyjd
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.SimplePanel import SimplePanel
from pyjamas.ui.TextArea import TextArea
from pyjamas.ui.Label import Label
from pyjamas.ui.Button import Button
from pyjamas.ui.HTML import HTML
from pyjamas.ui.HTMLPanel import HTMLPanel
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.ListBox import ListBox
from pyjamas.ui.FormPanel import FormPanel
from pyjamas.ui.TextBox import TextBox
from pyjamas import Window
from pyjamas.ui import HasAlignment
from pyjamas.JSONService import JSONProxy
from pyjamas.HTTPRequest import HTTPRequest
import json

from common import Abstract_View
from common import Report_Date_Field
from common import Data_Service

import datetime
import time


SEND_DATA_MSG = 'send-data-msg'
GET_REPORT_MSG = 'get-report-msg'
PROJ_CHANGED_MSG = 'proj-changed-msg'
GET_PRJ_MSG = 'get-prj-msg'
ADD_MLS_MSG = 'add-mls-msg'

def create_error_message(error):
    return '''
        <div class="alert alert-danger fade in">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <strong>Error:</strong> ''' + error + '''
        </div>
        '''

DATE_MATCHER = \
r'^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$'

######################################################################
#                         CLASS FORM ROW                             #
######################################################################
class Form_Row(SimplePanel):
    '''
    Create row that will be put in the Form
    '''
    def __init__(self, name, widget, help=''):
        SimplePanel.__init__(self)
        # Container
        self.mainpanel = VerticalPanel()

        self.lbl = Label(name)
        self.hlp = Label(help)
        self.lbl.setStyleName('h3')
        self.hlp.setStyleName('text-muted')
        
        self.wdg = widget
        self.mainpanel.add(self.lbl)
        self.mainpanel.add(self.wdg)
        self.mainpanel.add(self.hlp)
        
    def panel(self):
        return self.mainpanel

    def widget(self):
        return self.wdg

    def help(self):
        return self.hlp



######################################################################
#                     MILESTONES ROW CLASS                           #
######################################################################
class Milestones_Row(SimplePanel):
    '''
    Create and edit projects
    '''
    def __init__(self, milestone_names, milestone_dates):
        # We need to use old form of inheritance because of pyjamas
        SimplePanel.__init__(self)
        self.milestone_dates = milestone_dates
       
        self.hpanel = HorizontalPanel()
        self.hpanel.setVerticalAlignment(HasAlignment.ALIGN_TOP)
        self.name = ListBox(Height='34px', Width='208px')
        self.name.setStyleName('form-control input-lg')
        self.name.addChangeListener(getattr(self, 'on_milestone_changed'))
       
        for m in milestone_names:
            self.name.addItem(m) 
        if len(self.milestone_dates) > 0:
            self.planned_completion = Label(self.milestone_dates[0])
        else:
            self.planned_completion = Label('Undefined')
            
        self.planned_completion.setStyleName('form-control text-normal')

        self.expected_completion = Report_Date_Field(cal_ID='end')
        self.expected_completion.getTextBox().setStyleName('form-control')
        self.expected_completion.setRegex(DATE_MATCHER)
        self.expected_completion.appendValidListener(self._display_ok)
        self.expected_completion.appendInvalidListener(self._display_error)
        self.expected_completion.validate(None)

        self.hpanel.add(self.name)
        self.hpanel.add(Label(Width='10px'))
        self.hpanel.add(self.planned_completion)
        self.hpanel.add(Label(Width='10px'))
        self.hpanel.add(self.expected_completion)
        
    def get_name_txt(self):
        '''Return project name.
        '''
        return self.name.getText()

    ## def get_milestone_data(self):
    ##     '''Return all data for a milestone and validation result.
    ##     '''
    ##     valid = False
    ##     name_txt = self.get_name_txt()
    ##     start_txt = self.planned_completion.getText()
    ##     end_txt = self.expected_completion.getTextBox().getText()
    ##     data = [name_txt, start_txt, end_txt]
    ##     # We are only valid if these conditions are met
    ##     if len(name_txt.strip()) > 0 and self.expected_completion.valid == True:
    ##         valid = True 
    ##     return (valid, data)

    def get_milestone_data(self):
        '''Get milestone data and return in the form suitable for passing to
        the model.
        '''
        name = self.name.getItemText(self.name.getSelectedIndex())
        planned_completion = self.planned_completion.getText()
        expected_completion = self.expected_completion.getTextBox().getText()
        return (name, planned_completion, expected_completion)

    def _display_ok(self, obj):
        obj.setStyleName('form-input')

    def _display_error(self, obj):
        if len(obj.getTextBox().getText()) > 0:
            obj.setStyleName('form-group has-error')
        
    def on_milestone_changed(self, event):
        '''
        Change completion date if milestone changed
        '''
        ind = self.name.getSelectedIndex()
        self.planned_completion.setText(self.milestone_dates[ind])
        


######################################################################
#                        IMPEDIMENTS CLASS                           #
######################################################################
class Impediments(SimplePanel):
    '''
    Create and edit projects
    '''
    def __init__(self, start_date):
        # We need to use old form of inheritance because of pyjamas
        SimplePanel.__init__(self)
        self.vpanel = VerticalPanel()
        desc_panel = VerticalPanel()
        self.desc_box = TextBox()
        self.desc_box.setVisibleLength(44)
        self.desc_box.setStyleName('form-control')
        desc_lbl = Label('impediment description')
        desc_lbl.setStyleName('text-muted')
        desc_panel.add(self.desc_box)
        desc_panel.add(desc_lbl)

        status_panel = VerticalPanel()
        self.status_lst = ListBox(Height='34px')
        self.status_lst.setStyleName('form-control input-lg')
        self.status_lst.addItem('Open')
        self.status_lst.addItem('Closed')
        # we put date here
        date_str = 'added on: ' + start_date
        self.status_lbl = Label(date_str)
        self.status_lbl.setStyleName('text-muted')
        status_panel = VerticalPanel()
        status_panel.add(self.status_lst)
        status_panel.add(self.status_lbl)
        self.comment = Text_Area_Row('', 'why it exists or is being closed')
        hpanel = HorizontalPanel()
        hpanel.add(desc_panel)
        hpanel.add(Label(Width='10px'))
        hpanel.add(status_panel)
        self.vpanel.add(hpanel)
        self.vpanel.add(self.comment.panel())

    def get_impediment_data(self):
        '''Get impediment data as a list suitable to passing to model.
        '''
        desc = self.desc_box.getText()
        comment = self.comment.widget().getText()
        state = self.status_lst.getItemText(self.status_lst.getSelectedIndex())
        lbl_text = self.status_lbl.getText()
        #
        ind = lbl_text.find(':') + 1
        # We need just date
        start_date = lbl_text[ind:].strip()
        if state == 'Open':
            end_date = None
        else:
            end_date = datetime.date.today().strftime('%d/%m/%Y')
        
        return (desc, comment, start_date, end_date, state)

######################################################################
#                     CLASS TEXT AREA ROW                            #
######################################################################
class Text_Area_Row(Form_Row):
    '''Text area with initial configuration to be used in the form.
    '''
    def __init__(self, name, help):
        widget = TextArea()
        widget.setCharacterWidth(72)
        widget.setStyleName('form-control')
        widget.setVisibleLines(5)
        Form_Row.__init__(self, name, widget, help=help)

    
######################################################################
#                       CLASS DEV FIELDS                             #
######################################################################
class Dev_Fields(VerticalPanel, Abstract_View):
    '''Fields for a development project:
    Status
    Impediment
       Desc
       Status: Open | Closed
       Comment
    Risks
       Milestone
       Name
       Target End Date
       Actual End Date
    '''
    def __init__(self):
        '''Initialize widget'''
        VerticalPanel.__init__(self)
        Abstract_View.__init__(self)
        # Keep list of all milestones, we will add milestones from controller
        # when we create the form
        self.milestone_names = []
        # Corresponding dates
        self.milestone_dates = []
        # These two variables keep track of added milestone and impediments objects
        self.milestones = []
        self.impediments = []
        
        self.status_area = Text_Area_Row('Status', help='status of the project')

        # Keeps milestones
        self.main_mlst_panel = VerticalPanel()

        hp_mlst = HorizontalPanel()
        self.add_milestone_btn = Button('Add',
                                        getattr(self, 'on_add_milestone_btn_click'))
        self.add_milestone_btn.setStyleName('btn btn-info')

        self.remove_milestone_btn = Button('Remove',
                                        getattr(self, 'remove_milestone'))
        self.remove_milestone_btn.setStyleName('btn btn-danger')

        milestone_panel = VerticalPanel()
        self.milestone_row = Form_Row('Milestones', milestone_panel,
                                      help='add milestone and provide expected completion date')
        
        hp_mlst.add(Label(Width='330px'))

        hp_mlst.add(self.add_milestone_btn)
        hp_mlst.add(Label(Width='10px'))
        hp_mlst.add(self.remove_milestone_btn)
        
        self.main_mlst_panel.add(self.milestone_row.panel())
        self.main_mlst_panel.add(hp_mlst)
        
        self.risks_area = Text_Area_Row('Risks', help='short / long term risks')

        # Keeps impediments
        self.main_impd_panel = VerticalPanel()

        hp_impd = HorizontalPanel()
        self.add_impediment_btn = Button('Add',
                                         getattr(self, 'add_impediment'))
        self.add_impediment_btn.setStyleName('btn btn-info')
    
        # Remove button
        self.remove_impediment_btn = Button('Remove',
                                         getattr(self, 'remove_impediment'))
        self.remove_impediment_btn.setStyleName('btn btn-danger')
        
        impediment_panel = VerticalPanel()
        self.impediment_row = Form_Row('Impediments', impediment_panel,
                                       help='add impediments, one per section, please')
        hp_impd.add(Label(Width='330px'))

        hp_impd.add(self.add_impediment_btn)
        hp_impd.add(Label(Width='10px'))
        hp_impd.add(self.remove_impediment_btn)
        self.main_impd_panel.add(self.impediment_row.panel())
        self.main_impd_panel.add(hp_impd)
        # Add those to itself
        self.add(self.status_area.panel())
        self.add(self.risks_area.panel())
        self.add(self.main_mlst_panel)
        self.add(self.main_impd_panel)


    ## def prep_data(self):
    ##     data = dict()
    ##     data['project'] = 'Dev Project'
    ##     data['Status'] = self.status_area.widget().getText()
    ##     data['Risks'] = self.risks_area.widget().getText()
        
    ##     return data

    def on_add_milestone_btn_click(self):
        '''Inform controller we want to add a milestone.
        '''
        self.controller.process_msg(ADD_MLS_MSG)
        
        
    def add_milestone(self):
        '''Add milestone to the development project.
        '''
        # Pass list of milestones when we create the row
        milestone = Milestones_Row(self.milestone_names, self.milestone_dates)
        self.milestone_row.widget().add(Label(Height='5px'))
        self.milestone_row.widget().add(milestone.hpanel)
        self.milestones.append(milestone)
        

    def remove_milestone(self, sender):
        '''Remove milestone.
        '''
        try:
            self.milestones[-1].hpanel.removeFromParent()
            self.milestones.remove(self.milestones[-1])
        except IndexError:
            pass
        
    def add_impediment(self, sender):
        '''Add impediment to the development project.
        '''
        today_date = datetime.date.today().strftime('%d/%m/%Y')
        
        impediment = Impediments(today_date)
        self.impediment_row.widget().add(impediment.vpanel)
        self.impediments.append(impediment)


    def remove_impediment(self, sender):
        '''Remove impediment.
        '''
        try:
            self.impediments[-1].vpanel.removeFromParent()
            self.impediments.remove(self.impediments[-1])
        except IndexError:
            pass

######################################################################
#                       CLASS INPUT FORM                             #
######################################################################
class Input_Form(Abstract_View):
    '''Input form that modifies itself depending on the proejct.
    '''
    def __init__(self):
        Abstract_View.__init__(self)
        self.dev_fields = Dev_Fields()
        

    def register(self, controller):
        '''Register controller for view and its subviews'''
        self.controller = controller
        self.dev_fields.register(controller)
        
    def onModuleLoad(self):
        '''Create initial view of the panel.
        '''
        # Container that keeps everything
        self.panel = VerticalPanel()
        self.panel.setSpacing(10)

        # Create list of projects 
        proj_list = ListBox(Height='34px')
       
        proj_list.addItem('')
       
        proj_list.setVisibleItemCount(0)
        proj_list.addChangeListener(getattr(self, 'on_project_changed'))
        proj_list.setStyleName('form-control input-lg')
        
        self.proj_row = Form_Row('Select project',
                            proj_list,
                            help='project, status of which you want to report')
        
        # Project-specific container
        self.project_panel = VerticalPanel()

        # Submit report button
        self.submit_btn = Button('Submit report', getattr(self, 'send_data'))
        self.submit_btn.setStyleName('btn btn-primary btn-lg')
        self.submit_btn.setEnabled(False)

        self.msg_lbl = HTMLPanel('', Width='475px')

        # Add controls here
        self.panel.add(self.proj_row.panel())
        self.panel.add(self.project_panel)
        self.panel.add(Label(Height='20px'))
        self.panel.add(self.msg_lbl)
        self.panel.add(self.submit_btn)
        
        self.root = RootPanel('report')
        self.root.add(self.panel)

    def _load_project(self, project):
        '''Load project specific fields in the panel
        '''
        if self.dev_fields is not None:
            self.project_panel.remove(self.dev_fields)
        # Remove the old one and add brand new
        self.dev_fields = Dev_Fields()
        self.project_panel.add(self.dev_fields)

    def send_data(self):
        '''Retrieve data for the active project fields and send to flask.
        '''
        #data = self.dev_fields.prep_data()
        self.controller.process_msg(SEND_DATA_MSG)
        
    def on_project_changed(self, event):
        '''Change form fields depending on the proejct.
        '''
        proj_list = self.proj_row.widget()
        project = proj_list.getItemText(proj_list.getSelectedIndex())
        if project != '':
            self.controller.process_msg(PROJ_CHANGED_MSG, project)
        
        


######################################################################
#                       FORM CONTROLLER CLASS                        #
######################################################################        
class Form_Controller(object):
    '''Controller class, it has to be registered with managed views to be notified
    about user inputs'''
    def __init__(self):
        self.model = None
        self.view = None
        self.remote = Data_Service()
        

    def register(self, model, view):
        '''Register model and view.
        '''
        self.model = model
        self.view = view
        # Ask database for report data
        # self.process_msg(GET_REPORT_MSG)
        self.process_msg(GET_PRJ_MSG)

    def validate(self, model):
        if model.report_data['status'] == '':
            return 'Status is empty'

        for m in model.report_data['milestones']:
            if m['name'] == '' or m['end_date'] == '' or m['expected_completion'] == '':
                return 'Invalid milestone'

        for im in model.report_data['impediments']:
            if im['description'] == '' or im['comment'] == '' or im['start_date'] == '' or im['end_date'] == '' or im['state'] == '' :
                return 'Invalid impediment'

        return None
        
                
    def process_msg(self, msg, *args):
        '''Process message and update model and view. Views and model sent messages
        about user actions or model updates and pass the data via messages to controller.
        '''
        if msg == SEND_DATA_MSG:
            # We are ready to send the data, grab data from the dev_fields, update model
            # and send to flask
            status = self.view.dev_fields.status_area.widget().getText()
            risks = self.view.dev_fields.risks_area.widget().getText()
            self.model.add_status(status)
            self.model.add_risks(risks)
            proj_list = self.view.proj_row.widget()
            project = proj_list.getItemText(proj_list.getSelectedIndex())
            self.model.add_project(project)
            
            # Ask each impediment about its data
            for imp in self.view.dev_fields.impediments:
                self.model.add_impediment(*imp.get_impediment_data())
            for m in self.view.dev_fields.milestones:
                self.model.add_milestone(*m.get_milestone_data())

            error = self.validate(self.model)
            
            if error is not None:
                self.view.msg_lbl.setHTML(create_error_message(error))
                self.model = Report_Model()
            else:
                Window.alert(self.model.report_data)
                self.remote.sendRequest('send_data', {'message': json.dumps(self.model.report_data)}, self)

        if msg == GET_REPORT_MSG:
            '''Get report data from the database.
            '''
            proj_list = self.view.proj_row.widget()
            project = proj_list.getItemText(proj_list.getSelectedIndex())
            self.remote.sendRequest('get_report_for_project',
                                    {'message': json.dumps(project)}, self)
        if msg == PROJ_CHANGED_MSG:
            project = args[0]
            self.view._load_project(project)
            # Re-register controller as the one is created
            self.view.dev_fields.register(self)
            self.view.submit_btn.setEnabled(True)
            # Receive milestones and configure milestone list 
            self.remote.sendRequest('get_active_milestones',
                                    {'message': json.dumps(project)}, self)
        if msg == GET_PRJ_MSG:
            # Receive data from remote
            self.remote.sendRequest('get_active_projects',
                                    {'message': json.dumps(None)}, self)
        if msg == ADD_MLS_MSG:
            # We want to add a milestone
            self.view.dev_fields.add_milestone()

            
    def onRemoteError(self, code, errobj, request_info):
        Window.alert("got an error")

        
    def onRemoteResponse(self, response, request_info):
        '''When we got data from JSON proxy fire up another method on
        the service that returns something.
        '''
        msg = response['msg']
        if msg == 'send_data':
            HTTPRequest().asyncGet('/success/', self, content_type='text/html')
        if msg == 'get_active_projects':
            data = json.loads(response['data'])
            proj_list = self.view.proj_row.widget()
            for row in data:
                proj_list.addItem(row[1])
        if msg == 'get_active_milestones':
            data = json.loads(response['data'])
            milestone_names = []
            milestone_dates = []
            for row in data:
                milestone_names.append(row[1])
                milestone_dates.append(row[4])
                
            self.view.dev_fields.milestone_names = milestone_names
            self.view.dev_fields.milestone_dates = milestone_dates
           

            
    def onCompletion(self, response):
        '''This method is called when asyncGet returns. If we know parameters of the
        repsponse we may process differently for various cases. For example we may setup
        data in the form if we call it from Populate Form button.
        '''
        self.view.root.remove(self.view.panel)
        html = HTML()
        html.setHTML(response)
        self.view.root.add(html)        




######################################################################
#                          REPORT MODEL                              #
######################################################################
class Report_Model(object):
    def __init__(self):
        self.report_data = dict()
        self.report_data['status'] = ''
        self.report_data['risks'] = ''
        # Keep milestones and impediments in an array
        self.report_data['milestones'] = []
        self.report_data['impediments'] = []
        self.report_data['project'] = ''
        
    def get_impediments_count(self):
        '''Number of impemediments.
        '''
        return len(self.report_data['impediments'])

    def get_milestones_count(self):
        '''Number of impemediments.
        '''
        return len(self.report_data['milestones'])
    
    def add_milestone(self, name, end_date, expected_completion):
        '''Add a milestone to the report.
        '''
        milestone_data = dict()
        milestone_data['name'] = name
        milestone_data['end_date'] = end_date
        milestone_data['expected_completion'] = expected_completion
        self.report_data['milestones'].append(milestone_data)

    def add_impediment(self, description, comment, start_date, end_date, state):
        '''Add an impediment to the report.
        '''
        impediment_data = dict()
        impediment_data['description'] = description
        impediment_data['comment'] = comment
        impediment_data['start_date'] = start_date
        impediment_data['end_date'] = end_date
        impediment_data['state'] = state
        
        self.report_data['impediments'].append(impediment_data)
        
    def add_status(self, status):
        '''Add status to the report data.
        '''
        self.report_data['status'] = status
        
    def add_risks(self, risks):
        '''Add risks to the report data.
        '''
        self.report_data['risks'] = risks

    def add_project(self, project):
        '''Add project to the report data.
        '''
        self.report_data['project'] = project

        
######################################################################
#                                MAIN                                #
######################################################################
if __name__ == '__main__':
    pyjd.setup("form.html")
    view = Input_Form()
    view.onModuleLoad()
    model = Report_Model()
    controller = Form_Controller()
    controller.register(model, view)
    view.register(controller)
    pyjd.run()
        
