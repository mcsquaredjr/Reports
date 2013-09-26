/* start module: projects */
$pyjs['loaded_modules']['projects'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['projects']['__was_initialized__']) return $pyjs['loaded_modules']['projects'];
	var $m = $pyjs['loaded_modules']['projects'];
	$m['__repr__'] = function() { return '<module: projects>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'projects';
	$m['__name__'] = __mod_name__;


	$m['__author__'] = 'Serge Boyko';
	$m['__date__'] = '13-Sept-2013';
	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
	$m['ScrollPanel'] = $p['___import___']('pyjamas.ui.ScrollPanel.ScrollPanel', null, null, false);
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
	$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
	$m['JSONProxy'] = $p['___import___']('pyjamas.JSONService.JSONProxy', null, null, false);
	$m['HTTPRequest'] = $p['___import___']('pyjamas.HTTPRequest.HTTPRequest', null, null, false);
	$m['json'] = $p['___import___']('json', null);
	$m['Abstract_View'] = $p['___import___']('common.Abstract_View', null, null, false);
	$m['Reports_Grid'] = $p['___import___']('common.Reports_Grid', null, null, false);
	$m['ADD_ROW_MSG'] = 'add-row-msg';
	$m['DEL_ROW_MSG'] = 'del-row-msg';
	$m['EDT_ROW_MSG'] = 'edt-row-msg';
	$m['SEL_ROW_MSG'] = 'sel-row-msg';
	$m['CNG_ROW_MSG'] = 'cng-row-msg';
	$m['DESEL_ROW_MSG'] = 'desel-row-msg';
	$m['EXIST_IN_DB_STATUS'] = 1;
	$m['NOT_EXIST_IN_DB_STATUS'] = 0;
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
			self['hpanel'] = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{'Width':'475px'}]);
			self['hpanel']['setVerticalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_BOTTOM'));
			self['$$name'] = $m['TextBox']();
			self['$$name']['setStyleName']('form-control');
			self['status'] = $m['ListBox']();
			self['status']['addItem']('Active');
			self['status']['addItem']('Inactive');
			self['status']['setVisibleItemCount'](0);
			self['status']['setStyleName']('form-control input-lg');
			self['status']['setSize']('100px', '34px');
			lbl = $pyjs_kwargs_call(null, $m['Label'], null, null, [{'Width':'10px'}, '']);
			self['add_btn'] = $m['Button']('Add');
			self['add_btn']['setStyleName']('btn btn-primary');
			self['del_btn'] = $m['Button']('Delete');
			self['del_btn']['setStyleName']('btn btn-danger');
			self['hpanel']['add']($p['getattr'](self, '$$name'));
			self['hpanel']['add'](lbl);
			self['hpanel']['add']($p['getattr'](self, 'status'));
			self['hpanel']['add']($p['getattr'](self, 'add_btn'));
			self['hpanel']['add']($p['getattr'](self, 'del_btn'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
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
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Projects_Editor', $p['tuple']($bases), $data);
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
			self['data_deleted'] = $p['list']([]);
			self['load']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('load', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var el,$iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$iter1_iter,$iter2_idx,$iter1_array,$iter2_type,$iter2_array,$iter1_idx;
			self['data']['append']($p['list']([0, 'Project1', 'Active']));
			self['data']['append']($p['list']([1, 'Project2', 'Inactive']));
			self['data']['append']($p['list']([2, 'Project3', 'Inactive']));
			self['data_deleted']['append']($p['list']([3, 'Project4', 'Deleted']));
			self['data_deleted']['append']($p['list']([4, 'Project5', 'Deleted']));
			self['data_deleted']['append']($p['list']([5, 'Project6', 'Deleted']));
			$iter1_iter = $p['getattr'](self, 'data');
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				el = $iter1_nextval['$nextval'];
				el['append']($m['EXIST_IN_DB_STATUS']);
			}
			$iter2_iter = $p['getattr'](self, 'data_deleted');
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				el = $iter2_nextval['$nextval'];
				el['append']($m['EXIST_IN_DB_STATUS']);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['load'] = $method;
		$method = $pyjs__bind_method2('save', function() {
			if (this['__is_instance__'] === true) {
			} else {
			}

			return true;
		}
	, 1, [null,null]);
		$cls_definition['save'] = $method;
		$method = $pyjs__bind_method2('add_row', function(new_data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				new_data = arguments[1];
			}
			var project_name,el,$iter4_nextval,$iter3_array,$iter4_idx,$iter3_idx,exist,$iter3_iter,$iter4_type,$iter3_type,$iter4_array,$iter4_iter,$iter3_nextval;
			project_name = new_data['__getitem__'](0);
			exist = false;
			$iter3_iter = $p['getattr'](self, 'data');
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				el = $iter3_nextval['$nextval'];
				if ($p['bool']($p['op_eq'](el['__getitem__'](1), project_name))) {
					exist = true;
					break;
				}
			}
			if ($p['bool'](!$p['bool'](exist))) {
				$iter4_iter = $p['getattr'](self, 'data_deleted');
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					el = $iter4_nextval['$nextval'];
					if ($p['bool']($p['op_eq'](el['__getitem__'](1), project_name))) {
						exist = true;
						break;
					}
				}
			}
			if ($p['bool'](!$p['bool'](exist))) {
				self['data']['append']($p['list']([null, project_name, new_data['__getitem__'](1), $m['NOT_EXIST_IN_DB_STATUS']]));
			}
			return !$p['bool'](exist);
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
			var $sub2,row_data,$sub1;
			row_data = $p['getattr'](self, 'data')['__getitem__']($p['__op_sub']($sub1=row,$sub2=1));
			self['data']['remove'](row_data);
			if ($p['bool']($p['op_eq'](row_data['__getitem__'](3), $m['EXIST_IN_DB_STATUS']))) {
				row_data['__setitem__'](2, 'Deleted');
				self['data_deleted']['append'](row_data);
			}
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
			var $sub3,$sub6,$sub5,$sub4;
			$p['getattr'](self, 'data')['__getitem__']($p['__op_sub']($sub3=row,$sub4=1))['__setitem__'](1, new_data['__getitem__'](0));
			$p['getattr'](self, 'data')['__getitem__']($p['__op_sub']($sub5=row,$sub6=1))['__setitem__'](2, new_data['__getitem__'](1));
			return null;
		}
	, 1, [null,null,['self'],['row'],['new_data']]);
		$cls_definition['edit_row'] = $method;
		$method = $pyjs__bind_method2('get_row', function(row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}
			var row_data,$sub8,$sub7;
			row_data = $p['getattr'](self, 'data')['__getitem__']($p['__op_sub']($sub7=row,$sub8=1));
			return row_data;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['get_row'] = $method;
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
			var $iter5_nextval,$iter5_array,$iter5_iter,$iter5_idx,$iter5_type,row,data;
			self['model'] = model;
			self['view'] = view;
			data = $p['getattr']($p['getattr'](self, 'model'), 'data');
			$iter5_iter = data;
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				row = $iter5_nextval['$nextval'];
				self['view']['grid']['add_row']($p['list']([row['__getitem__'](1), row['__getitem__'](2)]));
			}
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
			var new_data,row_data,grid,editor,data,row;
			grid = $p['getattr']($p['getattr'](self, 'view'), 'grid');
			editor = $p['getattr']($p['getattr'](self, 'view'), 'editor');
			if ($p['bool']($p['op_eq'](msg, $m['ADD_ROW_MSG']))) {
				data = args['__getitem__'](0);
				if ($p['bool'](self['model']['add_row'](data))) {
					grid['add_row'](data);
					editor['$$name']['setText']('');
					editor['add_btn']['setEnabled'](false);
				}
				editor['$$name']['setFocus'](true);
			}
			if ($p['bool']($p['op_eq'](msg, $m['DEL_ROW_MSG']))) {
				row = args['__getitem__'](0);
				self['model']['remove_row'](row);
				grid['remove_row'](row);
				editor['del_btn']['setEnabled'](false);
				editor['$$name']['setText']('');
				editor['$$name']['setFocus'](true);
				editor['add_btn']['setText']('Add');
				editor['add_btn']['setEnabled'](false);
			}
			if ($p['bool']($p['op_eq'](msg, $m['SEL_ROW_MSG']))) {
				row = args['__getitem__'](0);
				row_data = self['model']['get_row'](row);
				editor['$$name']['setText'](row_data['__getitem__'](1));
				editor['status']['selectValue'](row_data['__getitem__'](2));
				editor['add_btn']['setText']('Change');
				editor['add_btn']['setEnabled'](true);
				editor['del_btn']['setEnabled'](true);
				editor['$$name']['setFocus'](true);
			}
			if ($p['bool']($p['op_eq'](msg, $m['DESEL_ROW_MSG']))) {
				editor['add_btn']['setText']('Add');
				editor['del_btn']['setEnabled'](false);
				editor['add_btn']['setEnabled'](false);
				editor['$$name']['setFocus'](true);
				editor['$$name']['setText']('');
			}
			if ($p['bool']($p['op_eq'](msg, $m['EDT_ROW_MSG']))) {
				row = args['__getitem__'](0);
				new_data = args['__getitem__'](1);
				self['model']['edit_row'](row, new_data);
				grid['change_row'](row, new_data);
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
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Abstract_View']['__init__'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var spacer3,spacer2,hpanel,spacer1;
			self['remote'] = null;
			self['panel'] = $m['VerticalPanel']();
			self['panel']['setSpacing'](10);
			spacer1 = $m['Label']();
			spacer1['setHeight']('10px');
			spacer2 = $m['Label']();
			spacer2['setHeight']('10px');
			self['tbl_panel'] = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{'Width':'475px'}]);
			self['grid'] = $m['Reports_Grid']();
			self['grid']['create_grid'](1, 2, $p['list'](['Project Name', 'Project State']));
			self['tbl_panel']['add']($p['getattr'](self, 'grid'));
			self['editor'] = $m['Projects_Editor']();
			self['submit_btn'] = $m['Button']('Submit');
			self['submit_btn']['setStyleName']('btn btn-primary btn-lg');
			hpanel = $m['HorizontalPanel']();
			hpanel['setHorizontalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_RIGHT'));
			hpanel['add']($p['getattr'](self, 'submit_btn'));
			self['root'] = $m['RootPanel']('projects_');
			self['root']['add'](spacer1);
			self['root']['add']($p['getattr']($p['getattr'](self, 'editor'), 'hpanel'));
			self['root']['add'](spacer2);
			self['root']['add']($p['getattr'](self, 'tbl_panel'));
			spacer3 = $m['Label']();
			spacer3['setHeight']('20px');
			self['root']['add'](spacer3);
			self['root']['add'](hpanel);
			self['_add_listeners']();
			self['_iniate_states']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('_add_listeners', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['editor']['add_btn']['addClickListener']($p['getattr'](self, 'on_add_btn_click'));
			self['editor']['del_btn']['addClickListener']($p['getattr'](self, 'on_del_btn_click'));
			self['editor']['$$name']['addKeyboardListener'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_add_listeners'] = $method;
		$method = $pyjs__bind_method2('_iniate_states', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['editor']['add_btn']['setEnabled'](false);
			self['editor']['del_btn']['setEnabled'](false);
			self['editor']['$$name']['setFocus'](true);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_iniate_states'] = $method;
		$method = $pyjs__bind_method2('register', function(controller) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				controller = arguments[1];
			}

			self['controller'] = controller;
			self['grid']['register'](controller);
			return null;
		}
	, 1, [null,null,['self'],['controller']]);
		$cls_definition['register'] = $method;
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
			if ($p['bool']($p['op_eq'](self['editor']['add_btn']['getText'](), 'Add'))) {
				self['controller']['process_msg']($m['ADD_ROW_MSG'], data);
			}
			else {
				self['controller']['process_msg']($m['EDT_ROW_MSG'], $p['getattr']($p['getattr'](self, 'grid'), 'selected_row'), data);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['on_add_btn_click'] = $method;
		$method = $pyjs__bind_method2('on_del_btn_click', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			if ($p['bool'](($p['cmp']($p['getattr']($p['getattr'](self, 'grid'), 'selected_row'), 0) == 1))) {
				self['controller']['process_msg']($m['DEL_ROW_MSG'], $p['getattr']($p['getattr'](self, 'grid'), 'selected_row'));
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['on_del_btn_click'] = $method;
		$method = $pyjs__bind_method2('onKeyDown', function(sender, keycode, modifiers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyDown'] = $method;
		$method = $pyjs__bind_method2('onKeyUp', function(sender, keycode, modifiers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}
			var project_name;
			project_name = self['editor']['get_name_txt']();
			if ($p['bool'](!$p['op_eq'](project_name['strip'](), ''))) {
				self['editor']['add_btn']['setEnabled'](true);
			}
			else {
				self['editor']['add_btn']['setEnabled'](false);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyUp'] = $method;
		$method = $pyjs__bind_method2('onKeyPress', function(sender, keycode, modifiers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}
			var status,project_name,$and1,$and3,$and4,$and2,data;
			project_name = self['editor']['get_name_txt']();
			status = self['editor']['get_status']();
			data = $p['list']([project_name, status]);
			if ($p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_ESCAPE')))) {
			}
			else if ($p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_ENTER')))) {
				if ($p['bool'](($p['bool']($and1=$p['op_eq'](self['editor']['add_btn']['getText'](), 'Add'))?self['editor']['add_btn']['isEnabled']():$and1))) {
					self['controller']['process_msg']($m['ADD_ROW_MSG'], data);
				}
				else if ($p['bool'](($p['bool']($and3=$p['op_eq'](self['editor']['add_btn']['getText'](), 'Change'))?self['editor']['add_btn']['isEnabled']():$and3))) {
					self['controller']['process_msg']($m['EDT_ROW_MSG'], $p['getattr']($p['getattr'](self, 'grid'), 'selected_row'), data);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyPress'] = $method;
		var $bases = new Array($m['Abstract_View']);
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
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.ScrollPanel.ScrollPanel', 'pyjamas.ui.ScrollPanel', 'pyjamas.ui.TextArea.TextArea', 'pyjamas.ui.TextArea', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.HTMLTable.HTMLTable', 'pyjamas.ui.HTMLTable', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.FormPanel.FormPanel', 'pyjamas.ui.FormPanel', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.KeyboardListener', 'pyjamas.Window', 'pyjamas.ui.HasAlignment', 'pyjamas.JSONService.JSONProxy', 'pyjamas.JSONService', 'pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest', 'json', 'common.Abstract_View', 'common', 'common.Reports_Grid']
*/
