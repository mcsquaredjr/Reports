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

        
class Projects_Editor(SimplePanel):
    '''
    Create and edit projects
    '''
    def __init__(self):
        SimplePanel.__init__(self)
        self.hpanel = HorizontalPanel()
        self.hpanel.setSpacing(10)
        self.hpanel.setVerticalAlignment(HasAlignment.ALIGN_BOTTOM)
        self.hpanel.setHorizontalAlignment(HasAlignment.ALIGN_RIGHT)

        self.name = TextBox()
        self.name.setStyleName('form-control')
        
        self.status = ListBox()
        self.status.addItem('Active')
        self.status.addItem('Inactive')
        self.status.setVisibleItemCount(0)
        self.status.setStyleName('form-control input-lg')
        self.status.setSize('100px', '34px')
        
        lbl = Label('')

        self.add_btn = Button('Add')
        self.add_btn.setStyleName('btn btn-primary')
        self.del_btn = Button('Delete')
        self.del_btn.setStyleName('btn btn-danger')

        self.hpanel.add(self.name)
        self.hpanel.add(self.status)
        self.hpanel.add(lbl)
        
        self.hpanel.add(self.add_btn)
        self.hpanel.setSpacing(30)

        self.hpanel.add(self.del_btn)

        self.hpanel.setCellWidth(self.name, '50%')
        self.hpanel.setCellWidth(self.status, '20%')
        self.hpanel.setCellWidth(lbl, '10%')
        
        self.hpanel.setCellWidth(self.add_btn, '10%')
        self.hpanel.setCellWidth(self.del_btn, '10%')

    def get_panel(self):
        return self.hpanel
    

class Projects_View(object):
    '''Input form that modifies itself depending on the proejct.
    '''
    def onModuleLoad(self):
        '''Create initial view of the panel.
        '''
        self.remote = Data_Service()
        
        # Container that keeps everything
        self.panel = VerticalPanel()
        self.panel.setSpacing(10)

        editor = Projects_Editor()
        
        self.root = RootPanel('projects_')
        self.root.add(editor.get_panel())
        

if __name__ == '__main__':
    pyjd.setup("projects.html")
    app = Projects_View()
    app.onModuleLoad()
    pyjd.run()
        
