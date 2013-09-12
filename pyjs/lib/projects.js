/* start module: projects */
$pyjs['loaded_modules']['projects'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['projects']['__was_initialized__']) return $pyjs['loaded_modules']['projects'];
	var $m = $pyjs['loaded_modules']['projects'];
	$m['__repr__'] = function() { return '<module: projects>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'projects';
	$m['__name__'] = __mod_name__;


	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
	$m['TextArea'] = $p['___import___']('pyjamas.ui.TextArea.TextArea', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['HTMLTable'] = $p['___import___']('pyjamas.ui.HTMLTable.HTMLTable', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['ListBox'] = $p['___import___']('pyjamas.ui.ListBox.ListBox', null, null, false);
	$m['FormPanel'] = $p['___import___']('pyjamas.ui.FormPanel.FormPanel', null, null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
	$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
	$m['JSONProxy'] = $p['___import___']('pyjamas.JSONService.JSONProxy', null, null, false);
	$m['HTTPRequest'] = $p['___import___']('pyjamas.HTTPRequest.HTTPRequest', null, null, false);
	$m['json'] = $p['___import___']('json', null);
	$m['Data_Service'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'projects';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['JSONProxy']['__init__'](self, 'process/');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['JSONProxy']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Data_Service', $p['tuple']($bases), $data);
	})();
	$m['Projects_Editor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'projects';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var lbl;
			$m['SimplePanel']['__init__'](self);
			self['hpanel'] = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{'Spacing':10, 'Width':'475px'}]);
			self['hpanel']['setVerticalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_BOTTOM'));
			self['$$name'] = $m['TextBox']();
			self['$$name']['setStyleName']('form-control');
			self['status'] = $m['ListBox']();
			self['status']['addItem']('Active');
			self['status']['addItem']('Inactive');
			self['status']['setVisibleItemCount'](0);
			self['status']['setStyleName']('form-control input-lg');
			self['status']['setSize']('100px', '34px');
			lbl = $m['Label']('');
			self['add_btn'] = $m['Button']('Add');
			self['add_btn']['setStyleName']('btn btn-primary');
			self['del_btn'] = $m['Button']('Delete');
			self['del_btn']['setStyleName']('btn btn-danger');
			self['hpanel']['add']($p['getattr'](self, '$$name'));
			self['hpanel']['add']($p['getattr'](self, 'status'));
			self['hpanel']['add']($p['getattr'](self, 'add_btn'));
			self['hpanel']['add']($p['getattr'](self, 'del_btn'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_panel', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'hpanel');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_panel'] = $method;
		$method = $pyjs__bind_method2('get_name_txt', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['$$name']['getText']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_name_txt'] = $method;
		$method = $pyjs__bind_method2('get_status', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['status']['getItemText'](self['status']['getSelectedIndex']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_status'] = $method;
		$method = $pyjs__bind_method2('get_add_btn', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'add_btn');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_add_btn'] = $method;
		$method = $pyjs__bind_method2('get_del_btn', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'del_btn');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_del_btn'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Projects_Editor', $p['tuple']($bases), $data);
	})();
	$m['Reports_Grid'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'projects';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Grid']['__init__'](self);
			self['selected_row'] = 0;
			self['setStyleName']('table');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('create_grid', function(rows, cols, headers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rows = arguments[1];
				cols = arguments[2];
				headers = arguments[3];
			}
			var $iter1_nextval,$iter1_type,header,i,html_header,$iter1_iter,$iter1_array,$iter1_idx;
			self['resize'](rows, cols);
			self['addTableListener'](self);
			$iter1_iter = $p['enumerate'](headers);
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
				i = $tupleassign1[0];
				header = $tupleassign1[1];
				html_header = '<h4>{0}</h4>'['format'](header);
				self['setHTML'](0, i, html_header);
			}
			return null;
		}
	, 1, [null,null,['self'],['rows'],['cols'],['headers']]);
		$cls_definition['create_grid'] = $method;
		$method = $pyjs__bind_method2('load_data', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			var el,$iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,$iter2_array;
			$iter2_iter = data;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				el = $iter2_nextval['$nextval'];
				self['add_row'](el);
			}
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['load_data'] = $method;
		$method = $pyjs__bind_method2('add_row', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			var $iter3_idx,i,$iter3_array,$add2,num_cols,$add1,$iter3_iter,$iter3_type,$iter3_nextval,row;
			num_cols = self['getColumnCount']();
			self['addRows'](self['getBodyElement'](), 1, num_cols);
			$m['Window']['alert']($p['getattr'](self, 'numRows'));
			row = self['getRowCount']();
			$iter3_iter = $p['range'](0, num_cols);
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				i = $iter3_nextval['$nextval'];
				self['setText'](self['getRowCount'](), i, data['__getitem__'](i));
			}
			self['numRows'] = $p['__op_add']($add1=$p['getattr'](self, 'numRows'),$add2=1);
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['add_row'] = $method;
		$method = $pyjs__bind_method2('change_row', function(row, data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				data = arguments[2];
			}
			var i,$iter4_nextval,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter;
			$iter4_iter = $p['range'](0, self['getColumnCount']());
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				i = $iter4_nextval['$nextval'];
				self['setText'](row, i, data['__getitem__'](i));
			}
			return null;
		}
	, 1, [null,null,['self'],['row'],['data']]);
		$cls_definition['change_row'] = $method;
		$method = $pyjs__bind_method2('remove_row', function(row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}

			self['removeRow'](row);
			return null;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['remove_row'] = $method;
		$method = $pyjs__bind_method2('onCellClicked', function(sender, row, col) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				row = arguments[2];
				col = arguments[3];
			}

			self['select_row'](row);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['row'],['col']]);
		$cls_definition['onCellClicked'] = $method;
		$method = $pyjs__bind_method2('select_row', function(row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}

			self['style_row']($p['getattr'](self, 'selected_row'), false);
			self['style_row'](row, true);
			self['selected_row'] = row;
			return null;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['select_row'] = $method;
		$method = $pyjs__bind_method2('style_row', function(row, selected) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				selected = arguments[2];
			}

			if ($p['bool'](($p['cmp'](row, 0) == 1))) {
				if ($p['bool'](selected)) {
					self['getRowFormatter']()['addStyleName'](row, 'user-SelectedRow');
				}
				else {
					self['getRowFormatter']()['removeStyleName'](row, 'user-SelectedRow');
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['row'],['selected']]);
		$cls_definition['style_row'] = $method;
		var $bases = new Array($m['Grid']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Reports_Grid', $p['tuple']($bases), $data);
	})();
	$m['Projects_Model'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'projects';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['data'] = $p['list']([]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add_row', function(new_data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				new_data = arguments[1];
			}

			self['data']['append'](new_data);
			return null;
		}
	, 1, [null,null,['self'],['new_data']]);
		$cls_definition['add_row'] = $method;
		$method = $pyjs__bind_method2('remove_row', function(row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}
			var row_data;
			row_data = $p['getattr'](self, 'data')['__getitem__'](row);
			self['data']['remove'](row_data);
			return null;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['remove_row'] = $method;
		$method = $pyjs__bind_method2('edit_row', function(row, new_data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				new_data = arguments[2];
			}

			$p['getattr'](self, 'data')['__setitem__'](row, new_data);
			return null;
		}
	, 1, [null,null,['self'],['row'],['new_data']]);
		$cls_definition['edit_row'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Projects_Model', $p['tuple']($bases), $data);
	})();
	$m['Projects_Controller'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'projects';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['model'] = null;
			self['view'] = null;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('register', function(model, view) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				model = arguments[1];
				view = arguments[2];
			}

			self['model'] = model;
			self['view'] = view;
			return null;
		}
	, 1, [null,null,['self'],['model'],['view']]);
		$cls_definition['register'] = $method;
		$method = $pyjs__bind_method2('process_msg', function(msg) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			} else {
				var self = arguments[0];
				msg = arguments[1];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']));

			}
			var grid,data;
			if ($p['bool']($p['op_eq'](msg, 'add_row'))) {
				data = args['__getitem__'](0);
				self['model']['add_row'](data);
				grid = self['view']['get_grid']();
				grid['add_row'](data);
			}
			return null;
		}
	, 1, ['args',null,['self'],['msg']]);
		$cls_definition['process_msg'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Projects_Controller', $p['tuple']($bases), $data);
	})();
	$m['Projects_View'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'projects';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['remote'] = $m['Data_Service']();
			self['panel'] = $m['VerticalPanel']();
			self['panel']['setSpacing'](10);
			self['tbl_panel'] = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{'Width':'475px'}]);
			self['grid'] = $m['Reports_Grid']();
			self['grid']['create_grid'](5, 2, $p['list'](['Project Name', 'Project State']));
			self['tbl_panel']['add']($p['getattr'](self, 'grid'));
			self['editor'] = $m['Projects_Editor']();
			self['editor']['get_add_btn']()['addClickListener']($p['getattr'](self, 'on_add_btn_click'));
			self['root'] = $m['RootPanel']('projects_');
			self['root']['add'](self['editor']['get_panel']());
			self['root']['add']($p['getattr'](self, 'tbl_panel'));
			self['controller'] = null;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('register', function(controller) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				controller = arguments[1];
			}

			self['controller'] = controller;
			return null;
		}
	, 1, [null,null,['self'],['controller']]);
		$cls_definition['register'] = $method;
		$method = $pyjs__bind_method2('get_grid', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'grid');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_grid'] = $method;
		$method = $pyjs__bind_method2('on_add_btn_click', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var status,project_name,data;
			project_name = self['editor']['get_name_txt']();
			status = self['editor']['get_status']();
			data = $p['list']([project_name, status]);
			self['controller']['process_msg']('add_row', data);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['on_add_btn_click'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Projects_View', $p['tuple']($bases), $data);
	})();
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
		$m['pyjd']['setup']('projects.html');
		$m['view'] = $m['Projects_View']();
		$m['view']['onModuleLoad']();
		$m['model'] = $m['Projects_Model']();
		$m['controller'] = $m['Projects_Controller']();
		$m['controller']['register']($m['model'], $m['view']);
		$m['view']['register']($m['controller']);
		$m['pyjd']['run']();
	}
	return this;
}; /* end projects */


/* end module: projects */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.TextArea.TextArea', 'pyjamas.ui.TextArea', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.HTMLTable.HTMLTable', 'pyjamas.ui.HTMLTable', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.FormPanel.FormPanel', 'pyjamas.ui.FormPanel', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.Window', 'pyjamas.ui.HasAlignment', 'pyjamas.JSONService.JSONProxy', 'pyjamas.JSONService', 'pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest', 'json']
*/
