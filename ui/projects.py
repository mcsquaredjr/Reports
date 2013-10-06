# Classes to create Project Editor form

__author__ = 'Serge Boyko'
__date__ = '13-Sept-2013'

import pyjd
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.SimplePanel import SimplePanel
from pyjamas.ui.ScrollPanel import ScrollPanel
from pyjamas.ui.TextArea import TextArea
from pyjamas.ui.Label import Label
from pyjamas.ui.Button import Button
from pyjamas.ui.HTML import HTML
from pyjamas.ui.HTMLPanel import HTMLPanel
from pyjamas.ui.HTMLTable import HTMLTable
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.ListBox import ListBox
from pyjamas.ui.FormPanel import FormPanel
from pyjamas.ui.TextBox import TextBox
from pyjamas.ui.Grid import Grid
from pyjamas.ui import KeyboardListener
from pyjamas import Window
from pyjamas.ui import HasAlignment
from pyjamas.JSONService import JSONProxy
from pyjamas.HTTPRequest import HTTPRequest
import json

from common import Abstract_View
from common import Reports_Grid
from common import Data_Service

import time

# Define some global constants here
ADD_ROW_MSG = 'add-row-msg'
DEL_ROW_MSG = 'del-row-msg'
EDT_ROW_MSG = 'edt-row-msg'
SEL_ROW_MSG = 'sel-row-msg'
CNG_ROW_MSG = 'cng-row-msg'
DESEL_ROW_MSG = 'desel-row-msg'

COMMIT_PRJ_MSG = 'commit-prj-msg'
GET_PRJ_MSG = 'get-prj-msg'


SUCC_MSG = \
'''
<div class="alert alert-success fade in">
     <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
     <strong>Success!</strong> Data submitted.
</div>
'''
ERR_MSG = \
'''
<div class="alert alert-danger fade in">
     <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
     <strong>Oh, snap!</strong> Cannot do that. Try to use different project name.
</div>
'''



######################################################################
#                     PROJECTS EDITOR CLASS                          #
######################################################################
class Projects_Editor(SimplePanel):
    '''
    Create and edit projects
    '''
    def __init__(self):
        # We need to use old form of inheritance because of pyjamas
        SimplePanel.__init__(self)
        self.hpanel = HorizontalPanel(Width='475px')
        self.hpanel.setVerticalAlignment(HasAlignment.ALIGN_BOTTOM)
        
        self.name = TextBox()
        self.name.setStyleName('form-control')
        
        self.status = ListBox()
        self.status.addItem('Active')
        self.status.addItem('Inactive')
        self.status.setVisibleItemCount(0)
        self.status.setStyleName('form-control input-lg')
        self.status.setSize('100px', '34px')
        
        lbl = Label('', Width='10px')

        self.add_btn = Button('Add')
        self.add_btn.setStyleName('btn btn-primary')
        self.del_btn = Button('Delete')
        self.del_btn.setStyleName('btn btn-danger')

        self.hpanel.add(self.name)
        self.hpanel.add(lbl)
        self.hpanel.add(self.status)
        self.hpanel.add(self.add_btn)
        self.hpanel.add(self.del_btn)

 
    def get_name_txt(self):
        '''Return project name.
        '''
        return self.name.getText()

    def get_status(self):
        '''Return project status.
        '''
        return self.status.getItemText(self.status.getSelectedIndex())


######################################################################
#                     PROJECTS MODEL CLASS                           #
######################################################################
class Projects_Model(object):
    '''Holds data presented in table.
    '''
    
    def __init__(self):
        self.data = []
        self.data_deleted = []
   
    
    def add_row(self, new_data):
        project_name = new_data[0]
        exist = False
        
        # search in active/inactive data
        for el in self.data:
            if el[1] == project_name:
                exist = True
                break

        # search in deleted data
        if not exist:
            for el in self.data_deleted:
                if el[1] == project_name:
                    exist = True
                    break

        if not exist:
            self.data.append([None, project_name, new_data[1]])

        return not exist

    def remove_row(self, row):
        # we need to take into account header, thus index is minus 1
        row_data = self.data[row-1]
        
        self.data.remove(row_data)
        # add only projects that exist in database
        if row_data[0] is not None:
            # change status to 'Deleted'
            row_data[2] = 'Deleted'
            self.data_deleted.append(row_data)
       
    def edit_row(self, row, new_data):
        self.data[row-1][1] = new_data[0]
        self.data[row-1][2] = new_data[1]

    def get_row(self, row):
        row_data = self.data[row-1]
        return row_data

######################################################################
#                    PROJECTS CONTROLLER CLASS                       #
######################################################################

class Projects_Controller(object):
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
        # Ask database for project data
        self.process_msg(GET_PRJ_MSG)
        
                
    def process_msg(self, msg, *args):
        '''Process message and update model and view. Views and model sent messages
        about user actions or model updates and pass the data via messages to controller.
        '''
        grid = self.view.grid
        editor = self.view.editor

        if msg == ADD_ROW_MSG:
            data = args[0]

            if self.model.add_row(data):
                grid.add_row(data)
            
                editor.name.setText('')
                editor.add_btn.setEnabled(False)

            editor.name.setFocus(True)
            
        if msg == DEL_ROW_MSG:
            row = args[0]
            self.model.remove_row(row)
            grid.remove_row(row)
            editor.del_btn.setEnabled(False)
            editor.name.setText('')
            editor.name.setFocus(True)
            editor.add_btn.setText('Add')
            editor.add_btn.setEnabled(False)
        
        if msg == SEL_ROW_MSG:
            row = args[0]
            row_data = self.model.get_row(row)
            editor.name.setText(row_data[1])
            editor.status.selectValue(row_data[2])
            # change title on the add button to edit rows
            editor.add_btn.setText('Change')
            editor.add_btn.setEnabled(True)
            editor.del_btn.setEnabled(True)
            editor.name.setFocus(True)
            
        if msg == DESEL_ROW_MSG:
            editor.add_btn.setText('Add')
            editor.del_btn.setEnabled(False)
            editor.add_btn.setEnabled(False)
            editor.name.setFocus(True)
            editor.name.setText('')
            
        if msg == EDT_ROW_MSG:
            row = args[0]
            new_data = args[1]
            self.model.edit_row(row, new_data)
            grid.change_row(row, new_data)

        if msg == COMMIT_PRJ_MSG:
            # communicate to remote via json rpc and send data there
            data = self.model.data + self.model.data_deleted
            self.remote.sendRequest('send_projects',
                                    {'message': json.dumps(data)}, self)
            self.view.submit_btn.setEnabled(False)

        if msg == GET_PRJ_MSG:
            # Receive data from remote
            self.remote.sendRequest('get_projects',
                                    {'message': json.dumps(None)}, self)
            


    def onRemoteError(self, code, errorobj, request_info):
        #Window.alert('Error updating project data.')
        self.view.msg_lbl.setHTML(ERR_MSG)
        
        

    def onRemoteResponse(self, response, request_info):
        '''Executed if remote processesing was OK.
        '''
        self.model.data = json.loads(response['data'])
        self.model.data_deleted = []
        if response['msg'] == 'get_projects':
            data = self.model.data
            for row in data:
                self.view.grid.add_row([row[1], row[2]])
        else:
            self.view.msg_lbl.setHTML(SUCC_MSG)    

        self.view.submit_btn.setEnabled(True)
       
        


######################################################################
#                     PROJECTS VIEW CLASS                            #
######################################################################

class Projects_View(Abstract_View):
    def __init__(self):
        Abstract_View.__init__(self)
    '''Project editor view.
    '''
    def onModuleLoad(self):
        '''Create initial view of the panel.
        '''
        # Container that keeps everything
        self.panel = VerticalPanel()
        self.panel.setSpacing(10)

        spacer1 = Label()
        spacer1.setHeight('10px')
        spacer2 = Label()
        spacer2.setHeight('10px')
        
        self.tbl_panel = VerticalPanel(Width='475px')
        # First is a row count
        self.grid = Reports_Grid()
        self.grid.create_grid(1, 2, ['Project Name', 'Project State'])
        self.tbl_panel.add(self.grid)

        self.editor = Projects_Editor()
        self.submit_btn = Button('Submit', getattr(self, 'send_data'))
        self.submit_btn.setStyleName('btn btn-primary btn-lg')

        hpanel = HorizontalPanel()
        hpanel.setHorizontalAlignment(HasAlignment.ALIGN_RIGHT)
        hpanel.add(self.submit_btn)
        self.msg_lbl = HTMLPanel('', Width='475px')
        
        self.root = RootPanel('projects_')
        self.root.add(spacer1)
        self.root.add(self.editor.hpanel)
        self.root.add(spacer2)
        self.root.add(self.tbl_panel)

        spacer3 = Label()
        spacer3.setHeight('20px')
        self.root.add(self.msg_lbl)
        self.root.add(spacer3)
        self.root.add(hpanel)
        
        
        # Add listeners and initialize components
        self._add_listeners()
        self._iniate_states()
        
    def _add_listeners(self):
        '''Register listeners here.
        '''
        self.editor.add_btn.addClickListener(getattr(self, 'on_add_btn_click'))
        self.editor.del_btn.addClickListener(getattr(self, 'on_del_btn_click'))
        self.editor.name.addKeyboardListener(self)

    def _iniate_states(self):
         self.editor.add_btn.setEnabled(False)
         self.editor.del_btn.setEnabled(False)
         self.editor.name.setFocus(True)   
        

    def register(self, controller):
        '''Register controller for a view and related controls.
        '''
        self.controller = controller
        self.grid.register(controller)


    def on_add_btn_click(self, event):
        '''Process click on Add button.
        '''
        project_name = self.editor.get_name_txt()
        status = self.editor.get_status()
        data = [project_name, status]
        if self.editor.add_btn.getText() == 'Add':
            self.controller.process_msg(ADD_ROW_MSG, data)
        else:
            self.controller.process_msg(EDT_ROW_MSG, self.grid.selected_row, data)


    def on_del_btn_click(self, event):
        '''Process click on Add button.
        '''
        if self.grid.selected_row > 0:
            self.controller.process_msg(DEL_ROW_MSG, self.grid.selected_row)

    def send_data(self):
        '''Notify controller that we need to send data to db and let it
        do the work'''
        self.controller.process_msg(COMMIT_PRJ_MSG)
        

    def onKeyDown(self, sender, keycode, modifiers):
        pass

    def onKeyUp(self, sender, keycode, modifiers):
        # We are managing view control states here, though might send
        # a message to controller as well, but since we are not passing any data,
        # we do not bother about controller
        project_name = self.editor.get_name_txt()
        if project_name.strip() != '':
            self.editor.add_btn.setEnabled(True)
        else:
            self.editor.add_btn.setEnabled(False)
        

    def onKeyPress(self, sender, keycode, modifiers):
        '''Let users input using keyboard.
        '''
        project_name = self.editor.get_name_txt()
        status = self.editor.get_status()
        data = [project_name, status]
        
        if keycode == KeyboardListener.KEY_ESCAPE:
            pass   # TODO: should we do something useful here?
        elif keycode == KeyboardListener.KEY_ENTER:
            if self.editor.add_btn.getText() == 'Add' and self.editor.add_btn.isEnabled():
                self.controller.process_msg(ADD_ROW_MSG, data)
            elif self.editor.add_btn.getText() == 'Change' and self.editor.add_btn.isEnabled():
                self.controller.process_msg(EDT_ROW_MSG, self.grid.selected_row, data)


        
if __name__ == '__main__':
    pyjd.setup("projects.html")
    view = Projects_View()
    view.onModuleLoad()
    model = Projects_Model()
    controller = Projects_Controller()
    controller.register(model, view)
    view.register(controller)
    pyjd.run()
        
