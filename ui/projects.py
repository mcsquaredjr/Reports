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


    

class Projects_Editor(object):
    '''Input form that modifies itself depending on the proejct.
    '''

    def onModuleLoad(self):
        '''Create initial view of the panel.
        '''
        self.remote = Data_Service()
        
        # Container that keeps everything
        self.panel = VerticalPanel()
        self.panel.setSpacing(10)

        # Create list of projects and populate it with items TODO: change
        # to read data from a configuration file
        proj_list = ListBox()
        proj_list.addItem('Operations')
        proj_list.addItem('Engineering Services')
        
        proj_list.setVisibleItemCount(0)
        proj_list.setStyleName('form-control input-lg')
        self.panel.add(proj_list)
        
        self.root = RootPanel('projects_')
        self.root.add(self.panel)
        

if __name__ == '__main__':
    pyjd.setup("projects.html")
    app = Projects_Editor()
    app.onModuleLoad()
    pyjd.run()
        
