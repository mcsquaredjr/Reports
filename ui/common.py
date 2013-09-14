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

from pyjamas import Window
from pyjamas.ui import HasAlignment
from pyjamas.JSONService import JSONProxy
from pyjamas.HTTPRequest import HTTPRequest
import json

SEL_ROW_MSG = 'sel-row-msg'
DESEL_ROW_MSG = 'desel-row-msg'

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

    
