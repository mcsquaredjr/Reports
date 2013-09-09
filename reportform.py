import pyjd
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.SimplePanel import SimplePanel
from pyjamas.ui.TextArea import TextArea
from pyjamas.ui.Label import Label
from pyjamas.ui.Button import Button
from pyjamas.ui.HTML import HTML
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


class Data_Service(JSONProxy):
    def __init__(self):
        JSONProxy.__init__(self, 'process/')

        
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
    

class Text_Area_Row(Form_Row):
    '''Text area with initial configuration to be used in the form.
    '''
    def __init__(self, name, help):
        widget = TextArea()
        widget.setCharacterWidth(72)
        widget.setStyleName('form-control')
        widget.setVisibleLines(5)
        Form_Row.__init__(self, name, widget, help=help)


    
class Operations_Fields(VerticalPanel):
    '''Fields for operations report:
    Budget
    HR-REORG
    Planview
    Site
    Recruiting
    Finance
    QBR
    '''
    def __init__(self):
        '''Initialize widget'''
        VerticalPanel.__init__(self)
        self.budget_area = Text_Area_Row('Budget', help='status of budget')
        self.hr_area = Text_Area_Row('HR/Reorg', help='status of HR-REORG')
        self.planview_area = Text_Area_Row('PlanView', help='status of PlanView')
        self.site_area = Text_Area_Row('Site', help='status of the site updates')
        self.recr_area = Text_Area_Row('Recruiting', help='status of recruiting')
        self.finance_area = Text_Area_Row('Finance', help='status of finance')
        self.qbr_area = Text_Area_Row('QBR', help='status of QBR')

        # Add those to itself
        self.add(self.budget_area.panel())
        self.add(self.hr_area.panel())
        self.add(self.planview_area.panel())
        self.add(self.site_area.panel())
        self.add(self.recr_area.panel())
        self.add(self.finance_area.panel())
        self.add(self.qbr_area.panel())

    def prep_data(self):
        data = dict()
        data['project'] = 'Operations'
        data['Budget'] = self.budget_area.widget().getText()
        data['HR/Reorg'] = self.hr_area.widget().getText()
        data['PlanView'] = self.planview_area.widget().getText()
        data['Site'] = self.site_area.widget().getText()
        data['Recruiting'] = self.recr_area.widget().getText()
        data['Finance'] = self.finance_area.widget().getText()
        data['QBR'] = self.qbr_area.widget().getText()

        return data

class Eng_Services_Fields(VerticalPanel):
    '''Fields for engineering services:
    Process Automation
    Tools
    Reporting/Dashboards
    Infrastructure
    Neo Release

    '''
    def __init__(self):
        '''Initialize widget'''
        VerticalPanel.__init__(self)
        self.process_area = Text_Area_Row('Process Automation',
                                     help='status of process automation')
        self.tools_area = Text_Area_Row('Tools', help='status of tools')
        self.reporting_area = Text_Area_Row('Reporting/Dashboards',
                                       help='status of reporting/dashboards')
        self.infr_area = Text_Area_Row('Infrastructure', help='status of infrastructure')
        self.neo_area = Text_Area_Row('Neo release', help='status of Neo release')

        #Add those to itself
        self.add(self.process_area.panel())
        self.add(self.tools_area.panel())
        self.add(self.reporting_area.panel())
        self.add(self.infr_area.panel())
        self.add(self.neo_area.panel())
        
    def prep_data(self):
        data = dict()
        data['project'] = 'Engineering Services'
        data['Automation'] = self.process_area.widget().getText()
        data['Tools'] = self.tools_area.widget().getText()
        data['Reporting/Dashboards'] = self.process_area.widget().getText()
        data['Infrastructure'] = self.infr_area.widget().getText()
        data['Neo'] = self.neo_area.widget().getText()
        
        return data


class Input_Form(object):
    '''Input form that modifies itself depending on the proejct.
    '''

    def onModuleLoad(self):
        '''Create initial view of the panel.
        '''
        self.remote = Data_Service()
        # Keep state of which projec fields are currently shown
        self.cur_project_panel = None
        # Container that keeps everything
        self.panel = VerticalPanel()
        self.panel.setSpacing(10)

        # Create list of projects and populate it with items TODO: change
        # to read data from a configuration file
        proj_list = ListBox()
        proj_list.addItem('Operations')
        proj_list.addItem('Engineering Services')
        
        proj_list.setVisibleItemCount(0)
        proj_list.addChangeListener(getattr(self, 'on_project_changed'))
        proj_list.setStyleName('form-control input-lg')
        self.proj_row = Form_Row('Select project',
                            proj_list,
                            help='project, status of which you want to report')
        
        # Project-specific container
        self.project_panel = VerticalPanel()

        # Submit report button
        submit_btn = Button('Submit report', getattr(self, 'send_data'))
        submit_btn.setStyleName('btn btn-primary btn-lg')

        # Add controls here
        self.panel.add(self.proj_row.panel())
        self.panel.add(self.project_panel)
        self.panel.add(submit_btn)
        self.root = RootPanel('report')
        self.root.add(self.panel)
        self._load_project('Operations')

    def _load_project(self, project):
        '''Load project specific fields in the panel
        '''
        # Clean up the project panel if not empty
        if project == 'Operations':
            if self.cur_project_panel is not None:
                self.project_panel.remove(self.cur_project_panel)
            operations_fiedls = Operations_Fields()
            self.project_panel.add(operations_fiedls)
            self.cur_project_panel = operations_fiedls
        elif project == 'Engineering Services':
            if self.cur_project_panel is not None:
                self.project_panel.remove(self.cur_project_panel)
            eng_services_fields = Eng_Services_Fields()
            self.project_panel.add(eng_services_fields)
            self.cur_project_panel = eng_services_fields
            
    def onRemoteResponse(self, response, request_info):
        '''When we got data from JSON proxy fire up another method on
        the service that returns something.
        '''
        HTTPRequest().asyncGet('/success/', self, content_type='text/html')
        
    def onCompletion(self, response):
        '''This method is called when asyncGet returns. If we know parameters of the
        repsponse we may process differently for various cases. For example we may setup
        data in the form if we call it from Populate Form button.
        '''
        self.root.remove(self.panel)
        html = HTML()
        html.setHTML(response)
        self.root.add(html)

    def onRemoteError(self, code, errobj, request_info):
        Window.alert("got an error")

    def send_data(self):
        '''Retrieve data for the active project fields and send to flask.
        '''
        data = self.cur_project_panel.prep_data()
        self.remote.sendRequest('send_data', {'message': json.dumps(data)}, self)
        
 
    def on_project_changed(self, event):
        '''Change form fields depending on the proejct.
        '''
        proj_list = self.proj_row.widget()
        project = proj_list.getItemText(proj_list.getSelectedIndex())
        self._load_project(project)
        

if __name__ == '__main__':
    pyjd.setup("formdemo.html")
    app = Input_Form()
    app.onModuleLoad()
    pyjd.run()
        
