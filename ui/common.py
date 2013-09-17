# Common UI classes

import pyjd
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.SimplePanel import SimplePanel
from pyjamas.ui.ScrollPanel import ScrollPanel

from pyjamas.ui.TextArea import TextArea
from pyjamas.ui.Label import Label
from pyjamas.ui.Button import Button
from pyjamas.ui.HTML import HTML
from pyjamas.ui.HTMLTable import HTMLTable

from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.ListBox import ListBox
from pyjamas.ui.FormPanel import FormPanel
from pyjamas.ui.TextBox import TextBox
from pyjamas.ui.Grid import Grid
from pyjamas.ui import KeyboardListener

from pyjamas.ui.Calendar import DateField
from pyjamas.ui.Calendar import Calendar 
from pyjamas.ui.Calendar import CalendarPopup
from pyjamas.ui import Event
from pyjamas.ui.Image import Image
from pyjamas.ui.HyperlinkImage import HyperlinkImage  

from pyjamas import Window, DOM
from pyjamas.ui import HasAlignment
from pyjamas.JSONService import JSONProxy
from pyjamas.HTTPRequest import HTTPRequest
import json
import re 
import time
from regextextbox import RegexTextBox


SEL_ROW_MSG = 'sel-row-msg'
DESEL_ROW_MSG = 'desel-row-msg'
CAL_DATE_MSG = 'cal-date-msg'

######################################################################
#                     ABSTRACT VIEW CLASS                            #
######################################################################
class Abstract_View(object):
    '''Abstract view to provide reference to controller. Composite Views
    may override register method to register controller for related
    views.
    '''
    def __init__(self):
        self.controller = None
        
    def register(self, controller):
        self.controller = controller


######################################################################
#                     REPORTS GRID CLASS                             #
######################################################################
class Reports_Grid(Grid, Abstract_View):
    def __init__(self):
        Grid.__init__(self)
        Abstract_View.__init__(self)
        self.selected_row = 0
        self.setStyleName('table')
        self.controller = None
        

    def create_grid(self, rows, cols, headers):
        self.resize(rows, cols)
        self.addTableListener(self)
        for i, header in enumerate(headers):
            html_header = '<h4>{0}</h4>'.format(header)
            self.setHTML(0, i, html_header)


    def load_data(self, data):
        for el in data:
            self.add_row(el)

            
    def add_row(self, data):
        num_cols = self.getColumnCount()
        # We need to get actual tb element before appending to it
        self.addRows(self.getBodyElement(), 1, num_cols)
        row = self.getRowCount()
        for i in range(0, num_cols):
            self.setText(self.getRowCount(), i, data[i])
        # There is a bug in pyjs that prevents getRowCount to return correct
        # number of rows, here is a fix
        self.numRows += 1


    def change_row(self, row, data):
        for i in range(0, self.getColumnCount()):
            self.setText(row, i, data[i])

    def remove_row(self, row):
        self.removeRow(row)
    
    
    def onCellClicked(self, sender, row, col):
        self.select_row(row)


    def select_row(self, row):
        self.style_row(self.selected_row, False)
        self.style_row(row, True)
        self.selected_row = row
        if self.controller is not None:
            if row > 0:
                self.controller.process_msg(SEL_ROW_MSG, row)
            else:
                self.controller.process_msg(DESEL_ROW_MSG)    

    def style_row(self, row, selected):
        if row > 0: #and row < self.getRowCount():
            if selected:
                self.getRowFormatter().addStyleName(row, "user-SelectedRow")
            else:
                self.getRowFormatter().removeStyleName(row, "user-SelectedRow")



                
######################################################################
#                     REPORT DATE FIELD CLASS                        #
######################################################################
class Report_Date_Field(DateField, Abstract_View):
    '''Custom report date field with validation. The code borrows heavily
    from the datefield PyJs example (as you may see from the syntax)
    '''
    # Override icon location
    img_base = '' 
    icon_img = '/static/kalendar.png'
    
    def __init__(self, cal_ID=None):
        DateField.__init__(self, format='%d/%m/%Y')
        Abstract_View.__init__(self)
        self._blurListeners = []
        self._invalidListeners = []
        self._validListeners = []
        self._regex = None
        # Unique identifier to name a calendar, any string
        self.cal_ID = cal_ID
        # We need to forward events to textbox, so we need to override
        # the onBrowserEvent
        self.getTextBox().onBrowserEvent = self.onBrowserEvent
        # Flag telling if the validation was successful 
        self.valid = None

        
    def setRegex(self, regex):
        self._regex = regex
        self._blurListeners.append(self.validate)


    def validate(self, event):
        if self._regex is None:
            return
        
        if re.match(self._regex, self.getTextBox().getText()):
            _listeners = self._validListeners
            self.valid = True
        else:
            _listeners = self._invalidListeners
            self.valid = False

        for _listener in _listeners:
            _listener(self)


    def appendInvalidListener(self, listener):
        self._invalidListeners.append(listener)


    def appendValidListener(self, listener):
        self._validListeners.append(listener)


    def onBlur(self):
        # added parameter to validate
        self.validate()


    def onDateSelected(self, yyyy, mm, dd): 
        secs = time.mktime((int(yyyy), int(mm), int(dd), 0, 0, 0, 0, 0, -1)) 
        d = time.strftime(self.format, time.localtime(secs))
        self.tbox.setFocus(True)
        self.tbox.setText(d)
        self.tbox.setFocus(False)
        #if self.controller is not None:
        #    self.controller.process_msg(CAL_DATE_MSG, self.cal_ID)

        
    def onBrowserEvent(self, event):
        TextBox.onBrowserEvent(self, event)
        #Window.alert('was I ever called?')
        type = DOM.eventGetType(event)
        if type == "blur":
            for _listener in self._blurListeners:
                if hasattr(_listener, 'onBlur'): 
                    _listener.onBlur(self)
                    
                else:
                    _listener(self)
                    if self.controller is not None:
                        self.controller.process_msg(CAL_DATE_MSG, self.cal_ID)
                    
                    
        
        
        
