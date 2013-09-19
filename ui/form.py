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

from common import Report_Date_Field

DATE_MATCHER = \
r'^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$'


######################################################################
#                         CLASS DATA SERVICE                         #
######################################################################
class Data_Service(JSONProxy):
    def __init__(self):
        JSONProxy.__init__(self, 'process/')


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
    def __init__(self):
        # We need to use old form of inheritance because of pyjamas
        SimplePanel.__init__(self)
        self.hpanel = HorizontalPanel()
        self.hpanel.setVerticalAlignment(HasAlignment.ALIGN_TOP)
        
        self.name = TextBox()
        self.name.setStyleName('form-control')

        self.start = Label('12/01/2013')
        self.start.setStyleName('form-control text-normal')

        self.end = Report_Date_Field(cal_ID='end')
        self.end.getTextBox().setStyleName('form-control')
        self.end.setRegex(DATE_MATCHER)
        self.end.appendValidListener(self._display_ok)
        self.end.appendInvalidListener(self._display_error)
        self.end.validate(None)

        self.hpanel.add(self.name)
        self.hpanel.add(Label(Width='10px'))
        self.hpanel.add(self.start)
        self.hpanel.add(Label(Width='10px'))
        self.hpanel.add(self.end)

        
    def get_name_txt(self):
        '''Return project name.
        '''
        return self.name.getText()

    def get_milestone_data(self):
        '''Return all data for a milestone and validation result.
        '''
        valid = False
        name_txt = self.get_name_txt()
        start_txt = self.start.getText()
        end_txt = self.end.getTextBox().getText()
        data = [name_txt, start_txt, end_txt]
        # We are only valid if these conditions are met
        if len(name_txt.strip()) > 0 and self.end.valid == True:
            valid = True 
        return (valid, data)


    def _display_ok(self, obj):
        obj.setStyleName('form-input')


    def _display_error(self, obj):
        if len(obj.getTextBox().getText()) > 0:
            obj.setStyleName('form-group has-error')
        



######################################################################
#                        IMPEDIMENTS CLASS                           #
######################################################################
class Impediments(SimplePanel):
    '''
    Create and edit projects
    '''
    def __init__(self):
        # We need to use old form of inheritance because of pyjamas
        SimplePanel.__init__(self)
        self.vpanel = VerticalPanel()
        #self.vpanel.setVerticalAlignment(HasAlignment.ALIGN_TOP)

        desc_panel = VerticalPanel()
        self.desc_box = TextBox()
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
        self.status_lbl = Label('added on: ')
        self.status_lbl.setStyleName('text-muted')
        status_panel = VerticalPanel()
        status_panel.add(self.status_lst)
        status_panel.add(self.status_lbl)

        self.comment = Text_Area_Row('', 'why it exists or is being closed')
        hpanel = HorizontalPanel()
        
        hpanel.add(desc_panel)
        hpanel.add(Label(Width='10px'))
        hpanel.add(status_panel)
        #self.vpanel.add(Label(Width='10px'))
        self.vpanel.add(hpanel)
        self.vpanel.add(self.comment.panel())


    def get_impediment_data(self):
        # TODO
        pass



        



            
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
#                     CLASS OPERATIONS FIELD                         #
######################################################################
class Operations_Fields(VerticalPanel):
    '''Fields for operations report:
    Budgetf
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


    
######################################################################
#              CLASS ENGINEERING SERVICES FIELD                      #
######################################################################
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


######################################################################
#                       CLASS DEV FIELDS                             #
######################################################################
class Dev_Fields(VerticalPanel):
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
        self.status_area = Text_Area_Row('Status', help='status of the project')

        # Keeps milestones
        self.main_mlst_panel = VerticalPanel()

        hp_mlst = HorizontalPanel()
        self.add_milestone_btn = Button('Add',
                                        getattr(self, 'add_milestone'))
        self.add_milestone_btn.setStyleName('btn btn-info')

        self.remove_milestone_btn = Button('Remove',
                                        getattr(self, 'remove_milestone'))
        self.remove_milestone_btn.setStyleName('btn btn-danger')


        
        milestone_panel = VerticalPanel()
        self.milestone_row = Form_Row('Milestones', milestone_panel,
                                      help='add milestone and provide expected completion date')
        
        hp_mlst.add(Label(Width='330px'))

        hp_mlst.add(self.remove_milestone_btn)
        hp_mlst.add(Label(Width='10px'))
        hp_mlst.add(self.add_milestone_btn)
        
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
        hp_impd.add(self.remove_impediment_btn)
        hp_impd.add(Label(Width='10px'))
        hp_impd.add(self.add_impediment_btn)
        
        self.main_impd_panel.add(self.impediment_row.panel())
        self.main_impd_panel.add(hp_impd)
        
        # Add those to itself
        self.add(self.status_area.panel())
        self.add(self.risks_area.panel())
        self.add(self.main_mlst_panel)
        self.add(self.main_impd_panel)


    def prep_data(self):
        data = dict()
        data['project'] = 'Dev Project'
        data['Status'] = self.status_area.widget().getText()
        data['Risks'] = self.risks_area.widget().getText()
        
        return data

    def add_milestone(self, sender):
        '''Add milestone to the development project.
        '''
        milestone = Milestones_Row()
        self.milestone_row.widget().add(milestone.hpanel)

    def remove_milestone(self, sender):
        '''Remove milestone.
        '''
        
    def add_impediment(self, sender):
        '''Add impediment to the development project.
        '''
        impediment = Impediments()
        self.impediment_row.widget().add(impediment.vpanel)

    def remove_impediment(self, sender):
        '''Remove impediment.
        '''
        pass


######################################################################
#                       CLASS INPUT FORM                             #
######################################################################
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
        proj_list = ListBox(Height='34px')
       
        proj_list.addItem('Operations')
        proj_list.addItem('Engineering Services')
        proj_list.addItem('Dev Project')
        
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
        else:
            if self.cur_project_panel is not None:
                self.project_panel.remove(self.cur_project_panel)
            dev_fields = Dev_Fields()
            self.project_panel.add(dev_fields)
            self.cur_project_panel = dev_fields
                
            
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




        
######################################################################
#                                MAIN                                #
######################################################################
if __name__ == '__main__':
    pyjd.setup("form.html")
    app = Input_Form()
    app.onModuleLoad()
    pyjd.run()
        
