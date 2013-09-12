import pyjd
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.SimplePanel import SimplePanel
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

from pyjamas import Window
from pyjamas.ui import HasAlignment
from pyjamas.JSONService import JSONProxy
from pyjamas.HTTPRequest import HTTPRequest
import json


######################################################################
#                     DATA SERVICE CLASS                             #
######################################################################

class Data_Service(JSONProxy):
    def __init__(self):
        JSONProxy.__init__(self, 'process/')

######################################################################
#                     PROJECTS EDITOR CLASS                          #
######################################################################
        
class Projects_Editor(SimplePanel):
    '''
    Create and edit projects
    '''
    def __init__(self):
        SimplePanel.__init__(self)
        self.hpanel = HorizontalPanel(Spacing=10, Width='475px')
        self.hpanel.setVerticalAlignment(HasAlignment.ALIGN_BOTTOM)
        #self.hpanel.setHorizontalAlignment(HasAlignment.ALIGN_RIGHT)

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
        self.hpanel.add(self.add_btn)
        self.hpanel.add(self.del_btn)

    def get_panel(self):
        return self.hpanel

    def get_name_txt(self):
        return self.name.getText()

    def get_status(self):
        return self.status.getItemText(self.status.getSelectedIndex())

    def get_add_btn(self):
        return self.add_btn

    def get_del_btn(self):
        return self.del_btn

######################################################################
#                     REPORTS GRID CLASS                             #
######################################################################

class Reports_Grid(Grid):
    def __init__(self):
        Grid.__init__(self)
        self.selected_row = 0
        self.setStyleName('table')
        

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
        
        Window.alert(self.numRows)
        row = self.getRowCount()
        for i in range(0, num_cols):
            self.setText(self.getRowCount(), i, data[i])
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
        

    def style_row(self, row, selected):
        if row > 0: #and row < self.getRowCount():
            if selected:
                self.getRowFormatter().addStyleName(row, "user-SelectedRow")
            else:
                self.getRowFormatter().removeStyleName(row, "user-SelectedRow")
    


######################################################################
#                     PROJECTS MODEL CLASS                           #
######################################################################

class Projects_Model(object):
    def __init__(self):
        self.data = []

    def add_row(self, new_data):
        self.data.append(new_data)

    def remove_row(self, row):
        row_data = self.data[row]
        self.data.remove(row_data)

    def edit_row(self, row, new_data):
        self.data[row] = new_data



######################################################################
#                    PROJECTS CONTROLLER CLASS                       #
######################################################################

class Projects_Controller(object):
    def __init__(self):
        self.model = None
        self.view = None

    def register(self, model, view):
        self.model = model
        self.view = view
                

    def process_msg(self, msg, *args):
        '''Process message and update model and view.
        '''
        if msg == 'add_row':
            data = args[0]
            self.model.add_row(data)
            grid = self.view.get_grid()
            grid.add_row(data)
            


            
######################################################################
#                     PROJECTS VIEW CLASS                            #
######################################################################

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

        self.tbl_panel = VerticalPanel(Width='475px')
        # First is a row count
        self.grid = Reports_Grid()
        self.grid.create_grid(5, 2, ['Project Name', 'Project State'])
        self.tbl_panel.add(self.grid)
        self.editor = Projects_Editor()

        self.editor.get_add_btn().addClickListener(getattr(self, 'on_add_btn_click'))
        self.root = RootPanel('projects_')
        self.root.add(self.editor.get_panel())
        self.root.add(self.tbl_panel)
    
        self.controller = None


    def register(self, controller):
        '''Register controller for a view
        '''
        self.controller = controller

    def get_grid(self):
        return self.grid

    def on_add_btn_click(self, event):
        '''Process click on Add button.
        '''
        project_name = self.editor.get_name_txt()
        status = self.editor.get_status()
        data = [project_name, status]
        self.controller.process_msg('add_row', data)




        
        
if __name__ == '__main__':
    pyjd.setup("projects.html")
    view = Projects_View()
    view.onModuleLoad()
    model = Projects_Model()
    controller = Projects_Controller()
    controller.register(model, view)
    view.register(controller)
    pyjd.run()
        
