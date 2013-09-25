# Classes to create Milestones Editor form

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
from pyjamas.ui.HTMLTable import HTMLTable
from pyjamas.ui.Calendar import DateField
from pyjamas.ui.Calendar import Calendar 
from pyjamas.ui.Calendar import CalendarPopup
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.ListBox import ListBox
from pyjamas.ui.FormPanel import FormPanel
from pyjamas.ui.TextBox import TextBox
from pyjamas.ui.Grid import Grid
from pyjamas.ui import KeyboardListener

from pyjamas.ui.Image import Image
from pyjamas.ui.HyperlinkImage import HyperlinkImage  

from pyjamas import Window
from pyjamas.ui import HasAlignment
from pyjamas.JSONService import JSONProxy
from pyjamas.HTTPRequest import HTTPRequest
import json

from common import Abstract_View
from common import Reports_Grid
from common import Report_Date_Field

# Define some global constants here
ADD_ROW_MSG = 'add-row-msg'
DEL_ROW_MSG = 'del-row-msg'
EDT_ROW_MSG = 'edt-row-msg'
SEL_ROW_MSG = 'sel-row-msg'
CNG_ROW_MSG = 'cng-row-msg'
DESEL_ROW_MSG = 'desel-row-msg'
CAL_DATE_MSG = 'cal-date-msg'

DATE_MATCHER = \
r'^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$'


######################################################################
#                     MILESTONES EDITOR CLASS                        #
######################################################################
class Milestones_Editor(SimplePanel):
    '''
    Create and edit projects
    '''
    def __init__(self):
        # We need to use old form of inheritance because of pyjamas
        SimplePanel.__init__(self)
        self.hpanel = HorizontalPanel(Width='735px')
        self.hpanel.setVerticalAlignment(HasAlignment.ALIGN_TOP)
        
        self.name = TextBox()
        self.name.setStyleName('form-control')

        self.start = Report_Date_Field(cal_ID='start')
        
        self.start.getTextBox().setStyleName('form-control')
        self.start.setRegex(DATE_MATCHER)
        self.start.appendValidListener(self._display_ok)
        self.start.appendInvalidListener(self._display_error)
        self.start.validate(None)

        self.end = Report_Date_Field(cal_ID='end')
        self.end.getTextBox().setStyleName('form-control')
        self.end.setRegex(DATE_MATCHER)
        self.end.appendValidListener(self._display_ok)
        self.end.appendInvalidListener(self._display_error)
        self.end.validate(None)

        self.status = ListBox()
        self.status.addItem('Active')
        self.status.addItem('Inactive')
        self.status.setVisibleItemCount(0)
        self.status.setStyleName('form-control input-lg')
        self.status.setSize('100px', '34px')
        
        spacer1 = Label(Width='10px')
        spacer2 = Label(Width='10px')
        spacer3 = Label(Width='10px')

        self.add_btn = Button('Add')
        self.add_btn.setStyleName('btn btn-primary')
        self.del_btn = Button('Delete')
        self.del_btn.setStyleName('btn btn-danger')

        self.hpanel.add(self.name)
        self.hpanel.add(spacer1)
        self.hpanel.add(self.status)
        self.hpanel.add(spacer2)
        self.hpanel.add(self.start)
        #self.hpanel.add(spacer3)
        self.hpanel.add(self.end)
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


    def get_milestone_data(self):
        '''Return all data for a milestone and validation result.
        '''
        valid = False
        name_txt = self.get_name_txt()
        status_txt = self.get_status()
        start_txt = self.start.getTextBox().getText()
        end_txt = self.end.getTextBox().getText()
        data = [name_txt, status_txt, start_txt, end_txt]
        # We are only valid if these conditions are met
        if len(name_txt.strip()) > 0 and self.start.valid == True and self.end.valid == True:
            valid = True 
        return (valid, data)


    def _display_ok(self, obj):
        obj.setStyleName('form-input')


    def _display_error(self, obj):
        if len(obj.getTextBox().getText()) > 0:
            obj.setStyleName('form-group has-error')        
        

######################################################################
#                     MILESTONES MODEL CLASS                         #
######################################################################
class Milestones_Model(object):
    '''Holds data presented in table.
    '''
    # TODO: expand to include methods to load and save to DB
    def __init__(self):
        self.data = []
        self.data_deleted = []
        self.load()

    def load(self):
        self.data.append(['Milestone1', 'Active', '20/09/2013', '30/09/2013'])
        self.data.append(['Milestone2', 'Inactive', '20/09/2013', '30/09/2013'])
        self.data.append(['Milestone3', 'Inactive', '20/09/2013', '30/09/2013'])
        self.data_deleted.append(['Milestone4', 'Deleted', '20/09/2013', '30/09/2013'])
        self.data_deleted.append(['Milestone5', 'Deleted', '20/09/2013', '30/09/2013'])
        self.data_deleted.append(['Milestone6', 'Deleted', '20/09/2013', '30/09/2013'])

    def save():
        # TODO:
        return True

    def add_row(self, new_data):
        key = new_data[0]
        exist = False
        
        # search in active/inactive data
        for el in self.data:
            if el[0] == key:
                exist = True
                break

        # search in deleted data
        if not exist:
            for el in self.data_deleted:
                if el[0] == key:
                    exist = True
                    break

        if not exist:
            self.data.append(new_data)

        return not exist

    def remove_row(self, row):
        # we need to take into account header, thus index is minus 1
        row_data = self.data[row-1]
        self.data.remove(row_data)
         # change status to 'Deleted'
        row_data[1] = 'Deleted'
        self.data_deleted.append(row_data)

    def edit_row(self, row, new_data):
        self.data[row-1] = new_data

    def get_row(self, row):
        row_data = self.data[row-1]
        return row_data

######################################################################
#                    MILESTONES CONTROLLER CLASS                     #
######################################################################

class Milestones_Controller(object):
    '''Controller class, it has to be registered with managed views to be notified
    about user inputs'''
    def __init__(self):
        self.model = None
        self.view = None

    def register(self, model, view):
        '''Register model and view.
        '''
        self.model = model
        self.view = view

        data = self.model.data
        self.view.grid.load_data(data)
                
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
                editor.start.getTextBox().setText('')
                editor.end.getTextBox().setText('')
                # need to return to initial state
                editor.start.valid = None
                editor.end.valid = None

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
            editor.start.getTextBox().setText('')
            editor.end.getTextBox().setText('')
        
        if msg == SEL_ROW_MSG:
            row = args[0]
            row_data = self.model.get_row(row)
            editor.name.setText(row_data[0])
            editor.status.selectValue(row_data[1])
            editor.start.getTextBox().setText(row_data[2])
            editor.end.getTextBox().setText(row_data[3])
            #change title on the add button to edit rows
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
            editor.start.getTextBox().setText('')
            editor.end.getTextBox().setText('')
            
            
        if msg == EDT_ROW_MSG:
            row = args[0]
            new_data = args[1]
            self.model.edit_row(row, new_data)
            grid.change_row(row, new_data)

        if msg == CAL_DATE_MSG:
            self._validate_editor()
            cal_id = args[0]
            if cal_id == 'start':
                self.view.editor.end.getTextBox().setFocus(True)
            else:
                if self.view.editor.add_btn.isEnabled():
                    self.view.editor.add_btn.setFocus(True)


    def _validate_editor(self):
        (valid, data) = self.view.editor.get_milestone_data()
        if valid:
            self.view.editor.add_btn.setEnabled(True)
        else:
            self.view.editor.add_btn.setEnabled(False)
                    
######################################################################
#                    MILESTONES VIEW CLASS                           #
######################################################################

class Milestones_View(Abstract_View):
    def __init__(self):
        Abstract_View.__init__(self)
    '''Project editor view.
    '''
    def onModuleLoad(self):
        '''Create initial view of the panel.
        '''
        # Register data service here
        self.remote = None
        # Container that keeps everything
        self.panel = VerticalPanel()
        self.panel.setSpacing(10)

        spacer1 = Label()
        spacer1.setHeight('10px')
        spacer2 = Label()
        spacer2.setHeight('10px')
        
        self.tbl_panel = VerticalPanel(Width='735px')
        # First is a row count
        self.grid = Reports_Grid()
        self.grid.create_grid(1, 4, ['Milestone Name', 'Milestone State', 'Start Date', 'End Date'])
        self.tbl_panel.add(self.grid)

        self.editor = Milestones_Editor()
        self.submit_btn = Button('Submit')
        self.submit_btn.setStyleName('btn btn-primary btn-lg')

        hpanel = HorizontalPanel()
        hpanel.setHorizontalAlignment(HasAlignment.ALIGN_RIGHT)
        hpanel.add(self.submit_btn)
        
        self.root = RootPanel('projects_')
        self.root.add(spacer1)
        self.root.add(self.editor.hpanel)
        self.root.add(spacer2)
        self.root.add(self.tbl_panel)

        spacer3 = Label()
        spacer3.setHeight('20px')

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
        self.editor.start.register(controller)
        self.editor.end.register(controller)
        

    def on_add_btn_click(self, event):
        '''Process click on Add button.
        '''
        (valid, data) = self.editor.get_milestone_data()
        if self.editor.add_btn.getText() == 'Add':
            self.controller.process_msg(ADD_ROW_MSG, data)
        else:
            self.controller.process_msg(EDT_ROW_MSG, self.grid.selected_row, data)


    def on_del_btn_click(self, event):
        '''Process click on Add button.
        '''
        if self.grid.selected_row > 0:
            self.controller.process_msg(DEL_ROW_MSG, self.grid.selected_row)


    def onKeyDown(self, sender, keycode, modifiers):
        pass


    def onKeyUp(self, sender, keycode, modifiers):
        # We are managing view control states here, though might send
        # a message to controller as well, but since we are not passing any data,
        # we do not bother about controller
        (valid, data) = self.editor.get_milestone_data()
        #Window.alert('Valid is {0}, data is {1}'.format(valid, data))
        if valid:
            self.editor.add_btn.setEnabled(True)
        else:
            self.editor.add_btn.setEnabled(False)
        

    def onKeyPress(self, sender, keycode, modifiers):
        '''Let users input using keyboard.
        '''
        (valid, data) = self.editor.get_milestone_data()
       
        if keycode == KeyboardListener.KEY_ESCAPE:
            pass   # TODO: should we do something useful here?
        elif keycode == KeyboardListener.KEY_ENTER:
            if self.editor.add_btn.getText() == 'Add' and self.editor.add_btn.isEnabled():
                self.controller.process_msg(ADD_ROW_MSG, data)
            elif self.editor.add_btn.getText() == 'Change' and self.editor.add_btn.isEnabled():
                self.controller.process_msg(EDT_ROW_MSG, self.grid.selected_row, data)





if __name__ == '__main__':
    pyjd.setup("milestones.html")
    view = Milestones_View()
    view.onModuleLoad()
    model = Milestones_Model()
    controller = Milestones_Controller()
    controller.register(model, view)
    view.register(controller)
    pyjd.run()
        
