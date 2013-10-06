/* start module: form */
$pyjs['loaded_modules']['form'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['form']['__was_initialized__']) return $pyjs['loaded_modules']['form'];
	var $m = $pyjs['loaded_modules']['form'];
	$m['__repr__'] = function() { return '<module: form>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'form';
	$m['__name__'] = __mod_name__;


	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
	$m['TextArea'] = $p['___import___']('pyjamas.ui.TextArea.TextArea', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['ListBox'] = $p['___import___']('pyjamas.ui.ListBox.ListBox', null, null, false);
	$m['FormPanel'] = $p['___import___']('pyjamas.ui.FormPanel.FormPanel', null, null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
	$m['JSONProxy'] = $p['___import___']('pyjamas.JSONService.JSONProxy', null, null, false);
	$m['HTTPRequest'] = $p['___import___']('pyjamas.HTTPRequest.HTTPRequest', null, null, false);
	$m['json'] = $p['___import___']('json', null);
	$m['Abstract_View'] = $p['___import___']('common.Abstract_View', null, null, false);
	$m['Report_Date_Field'] = $p['___import___']('common.Report_Date_Field', null, null, false);
	$m['Data_Service'] = $p['___import___']('common.Data_Service', null, null, false);
	$m['SEND_DATA_MSG'] = 'send-data-msg';
	$m['GET_REPORT_MSG'] = 'get-report-msg';
	$m['PROJ_CHANGED_MSG'] = 'proj-changed-msg';
	$m['GET_PRJ_MSG'] = 'get-prj-msg';
	$m['DATE_MATCHER'] = '^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$';
	$m['Form_Row'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'form';
		$method = $pyjs__bind_method2('__init__', function(name, widget, help) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				widget = arguments[2];
				help = arguments[3];
			}
			if (typeof help == 'undefined') help=arguments['callee']['__args__'][5][1];

			$m['SimplePanel']['__init__'](self);
			self['mainpanel'] = $m['VerticalPanel']();
			self['lbl'] = $m['Label'](name);
			self['hlp'] = $m['Label'](help);
			self['lbl']['setStyleName']('h3');
			self['hlp']['setStyleName']('text-muted');
			self['wdg'] = widget;
			self['mainpanel']['add']($p['getattr'](self, 'lbl'));
			self['mainpanel']['add']($p['getattr'](self, 'wdg'));
			self['mainpanel']['add']($p['getattr'](self, 'hlp'));
			return null;
		}
	, 1, [null,null,['self'],['name'],['widget'],['help', '']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('panel', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'mainpanel');
		}
	, 1, [null,null,['self']]);
		$cls_definition['panel'] = $method;
		$method = $pyjs__bind_method2('widget', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'wdg');
		}
	, 1, [null,null,['self']]);
		$cls_definition['widget'] = $method;
		$method = $pyjs__bind_method2('help', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'hlp');
		}
	, 1, [null,null,['self']]);
		$cls_definition['help'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Form_Row', $p['tuple']($bases), $data);
	})();
	$m['Milestones_Row'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'form';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['SimplePanel']['__init__'](self);
			self['hpanel'] = $m['HorizontalPanel']();
			self['hpanel']['setVerticalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_TOP'));
			self['$$name'] = $m['TextBox']();
			self['$$name']['setStyleName']('form-control');
			self['start'] = $m['Label']('12/01/2013');
			self['start']['setStyleName']('form-control text-normal');
			self['end'] = $pyjs_kwargs_call(null, $m['Report_Date_Field'], null, null, [{'cal_ID':'end'}]);
			self['end']['getTextBox']()['setStyleName']('form-control');
			self['end']['setRegex']($m['DATE_MATCHER']);
			self['end']['appendValidListener']($p['getattr'](self, '_display_ok'));
			self['end']['appendInvalidListener']($p['getattr'](self, '_display_error'));
			self['end']['validate'](null);
			self['hpanel']['add']($p['getattr'](self, '$$name'));
			self['hpanel']['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{'Width':'10px'}]));
			self['hpanel']['add']($p['getattr'](self, 'start'));
			self['hpanel']['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{'Width':'10px'}]));
			self['hpanel']['add']($p['getattr'](self, 'end'));
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
		$method = $pyjs__bind_method2('get_milestone_data', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var end_txt,$and1,start_txt,valid,name_txt,data,$and2;
			valid = false;
			name_txt = self['get_name_txt']();
			start_txt = self['start']['getText']();
			end_txt = self['end']['getTextBox']()['getText']();
			data = $p['list']([name_txt, start_txt, end_txt]);
			if ($p['bool'](($p['bool']($and1=($p['cmp']($p['len'](name_txt['strip']()), 0) == 1))?$p['op_eq']($p['getattr']($p['getattr'](self, 'end'), 'valid'), true):$and1))) {
				valid = true;
			}
			return $p['tuple']([valid, data]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_milestone_data'] = $method;
		$method = $pyjs__bind_method2('_display_ok', function(obj) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}

			obj['setStyleName']('form-input');
			return null;
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['_display_ok'] = $method;
		$method = $pyjs__bind_method2('_display_error', function(obj) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}

			if ($p['bool'](($p['cmp']($p['len'](obj['getTextBox']()['getText']()), 0) == 1))) {
				obj['setStyleName']('form-group has-error');
			}
			return null;
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['_display_error'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Milestones_Row', $p['tuple']($bases), $data);
	})();
	$m['Impediments'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'form';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var hpanel,status_panel,desc_lbl,desc_panel;
			$m['SimplePanel']['__init__'](self);
			self['vpanel'] = $m['VerticalPanel']();
			desc_panel = $m['VerticalPanel']();
			self['desc_box'] = $m['TextBox']();
			self['desc_box']['setVisibleLength'](44);
			self['desc_box']['setStyleName']('form-control');
			desc_lbl = $m['Label']('impediment description');
			desc_lbl['setStyleName']('text-muted');
			desc_panel['add']($p['getattr'](self, 'desc_box'));
			desc_panel['add'](desc_lbl);
			status_panel = $m['VerticalPanel']();
			self['status_lst'] = $pyjs_kwargs_call(null, $m['ListBox'], null, null, [{'Height':'34px'}]);
			self['status_lst']['setStyleName']('form-control input-lg');
			self['status_lst']['addItem']('Open');
			self['status_lst']['addItem']('Closed');
			self['status_lbl'] = $m['Label']('added on: 02/02/2013');
			self['status_lbl']['setStyleName']('text-muted');
			status_panel = $m['VerticalPanel']();
			status_panel['add']($p['getattr'](self, 'status_lst'));
			status_panel['add']($p['getattr'](self, 'status_lbl'));
			self['$$comment'] = (typeof Text_Area_Row == "undefined"?$m['Text_Area_Row']:Text_Area_Row)('', 'why it exists or is being closed');
			hpanel = $m['HorizontalPanel']();
			hpanel['add'](desc_panel);
			hpanel['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{'Width':'10px'}]));
			hpanel['add'](status_panel);
			self['vpanel']['add'](hpanel);
			self['vpanel']['add'](self['$$comment']['panel']());
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_impediment_data', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_impediment_data'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Impediments', $p['tuple']($bases), $data);
	})();
	$m['Text_Area_Row'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'form';
		$method = $pyjs__bind_method2('__init__', function(name, help) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				help = arguments[2];
			}
			var widget;
			widget = $m['TextArea']();
			widget['setCharacterWidth'](72);
			widget['setStyleName']('form-control');
			widget['setVisibleLines'](5);
			$pyjs_kwargs_call($m['Form_Row'], '__init__', null, null, [{'help':help}, self, name, widget]);
			return null;
		}
	, 1, [null,null,['self'],['name'],['help']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Form_Row']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Text_Area_Row', $p['tuple']($bases), $data);
	})();
	$m['Dev_Fields'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'form';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var hp_impd,milestone_panel,hp_mlst,impediment_panel;
			$m['VerticalPanel']['__init__'](self);
			self['status_area'] = $pyjs_kwargs_call(null, $m['Text_Area_Row'], null, null, [{'help':'status of the project'}, 'Status']);
			self['main_mlst_panel'] = $m['VerticalPanel']();
			hp_mlst = $m['HorizontalPanel']();
			self['add_milestone_btn'] = $m['Button']('Add', $p['getattr'](self, 'add_milestone'));
			self['add_milestone_btn']['setStyleName']('btn btn-info');
			self['remove_milestone_btn'] = $m['Button']('Remove', $p['getattr'](self, 'remove_milestone'));
			self['remove_milestone_btn']['setStyleName']('btn btn-danger');
			milestone_panel = $m['VerticalPanel']();
			self['milestone_row'] = $pyjs_kwargs_call(null, $m['Form_Row'], null, null, [{'help':'add milestone and provide expected completion date'}, 'Milestones', milestone_panel]);
			hp_mlst['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{'Width':'330px'}]));
			hp_mlst['add']($p['getattr'](self, 'add_milestone_btn'));
			hp_mlst['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{'Width':'10px'}]));
			hp_mlst['add']($p['getattr'](self, 'remove_milestone_btn'));
			self['main_mlst_panel']['add'](self['milestone_row']['panel']());
			self['main_mlst_panel']['add'](hp_mlst);
			self['risks_area'] = $pyjs_kwargs_call(null, $m['Text_Area_Row'], null, null, [{'help':'short / long term risks'}, 'Risks']);
			self['main_impd_panel'] = $m['VerticalPanel']();
			hp_impd = $m['HorizontalPanel']();
			self['add_impediment_btn'] = $m['Button']('Add', $p['getattr'](self, 'add_impediment'));
			self['add_impediment_btn']['setStyleName']('btn btn-info');
			self['remove_impediment_btn'] = $m['Button']('Remove', $p['getattr'](self, 'remove_impediment'));
			self['remove_impediment_btn']['setStyleName']('btn btn-danger');
			impediment_panel = $m['VerticalPanel']();
			self['impediment_row'] = $pyjs_kwargs_call(null, $m['Form_Row'], null, null, [{'help':'add impediments, one per section, please'}, 'Impediments', impediment_panel]);
			hp_impd['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{'Width':'330px'}]));
			hp_impd['add']($p['getattr'](self, 'add_impediment_btn'));
			hp_impd['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{'Width':'10px'}]));
			hp_impd['add']($p['getattr'](self, 'remove_impediment_btn'));
			self['main_impd_panel']['add'](self['impediment_row']['panel']());
			self['main_impd_panel']['add'](hp_impd);
			self['add'](self['status_area']['panel']());
			self['add'](self['risks_area']['panel']());
			self['add']($p['getattr'](self, 'main_mlst_panel'));
			self['add']($p['getattr'](self, 'main_impd_panel'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('prep_data', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var data;
			data = $p['dict']();
			data['__setitem__']('project', 'Dev Project');
			data['__setitem__']('Status', self['status_area']['widget']()['getText']());
			data['__setitem__']('Risks', self['risks_area']['widget']()['getText']());
			return data;
		}
	, 1, [null,null,['self']]);
		$cls_definition['prep_data'] = $method;
		$method = $pyjs__bind_method2('add_milestone', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var milestone;
			milestone = $m['Milestones_Row']();
			self['milestone_row']['widget']()['add']($p['getattr'](milestone, 'hpanel'));
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['add_milestone'] = $method;
		$method = $pyjs__bind_method2('remove_milestone', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['remove_milestone'] = $method;
		$method = $pyjs__bind_method2('add_impediment', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var impediment;
			impediment = $m['Impediments']();
			self['impediment_row']['widget']()['add']($p['getattr'](impediment, 'vpanel'));
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['add_impediment'] = $method;
		$method = $pyjs__bind_method2('remove_impediment', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['remove_impediment'] = $method;
		var $bases = new Array($m['VerticalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Dev_Fields', $p['tuple']($bases), $data);
	})();
	$m['Input_Form'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'form';
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
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var proj_list;
			self['cur_project_panel'] = null;
			self['panel'] = $m['VerticalPanel']();
			self['panel']['setSpacing'](10);
			proj_list = $pyjs_kwargs_call(null, $m['ListBox'], null, null, [{'Height':'34px'}]);
			proj_list['addItem']('');
			proj_list['setVisibleItemCount'](0);
			proj_list['addChangeListener']($p['getattr'](self, 'on_project_changed'));
			proj_list['setStyleName']('form-control input-lg');
			self['proj_row'] = $pyjs_kwargs_call(null, $m['Form_Row'], null, null, [{'help':'project, status of which you want to report'}, 'Select project', proj_list]);
			self['project_panel'] = $m['VerticalPanel']();
			self['submit_btn'] = $m['Button']('Submit report', $p['getattr'](self, 'send_data'));
			self['submit_btn']['setStyleName']('btn btn-primary btn-lg');
			self['submit_btn']['setEnabled'](false);
			self['panel']['add'](self['proj_row']['panel']());
			self['panel']['add']($p['getattr'](self, 'project_panel'));
			self['panel']['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{'Height':'20px'}]));
			self['panel']['add']($p['getattr'](self, 'submit_btn'));
			self['root'] = $m['RootPanel']('report');
			self['root']['add']($p['getattr'](self, 'panel'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('_load_project', function(project) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				project = arguments[1];
			}
			var dev_fields;
			if ($p['bool'](($p['getattr'](self, 'cur_project_panel') !== null))) {
				self['project_panel']['remove']($p['getattr'](self, 'cur_project_panel'));
			}
			dev_fields = $m['Dev_Fields']();
			self['project_panel']['add'](dev_fields);
			self['cur_project_panel'] = dev_fields;
			return null;
		}
	, 1, [null,null,['self'],['project']]);
		$cls_definition['_load_project'] = $method;
		$method = $pyjs__bind_method2('send_data', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var data;
			data = self['cur_project_panel']['prep_data']();
			self['controller']['process_msg']($m['SEND_DATA_MSG'], data);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['send_data'] = $method;
		$method = $pyjs__bind_method2('on_project_changed', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var project,proj_list;
			proj_list = self['proj_row']['widget']();
			project = proj_list['getItemText'](proj_list['getSelectedIndex']());
			if ($p['bool'](!$p['op_eq'](project, ''))) {
				self['controller']['process_msg']($m['PROJ_CHANGED_MSG'], project);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['on_project_changed'] = $method;
		var $bases = new Array($m['Abstract_View']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Input_Form', $p['tuple']($bases), $data);
	})();
	$m['Form_Controller'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'form';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['model'] = null;
			self['view'] = null;
			self['remote'] = $m['Data_Service']();
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
			self['process_msg']($m['GET_PRJ_MSG']);
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
			var project,data,proj_list;
			if ($p['bool']($p['op_eq'](msg, $m['SEND_DATA_MSG']))) {
				data = args['__getitem__'](0);
				self['remote']['sendRequest']('send_data', $p['dict']([['message', $m['json']['dumps'](data)]]), self);
			}
			if ($p['bool']($p['op_eq'](msg, $m['GET_REPORT_MSG']))) {
				proj_list = self['view']['proj_row']['widget']();
				project = proj_list['getItemText'](proj_list['getSelectedIndex']());
				self['remote']['sendRequest']('get_report_for_project', $p['dict']([['message', $m['json']['dumps'](project)]]), self);
			}
			if ($p['bool']($p['op_eq'](msg, $m['PROJ_CHANGED_MSG']))) {
				project = args['__getitem__'](0);
				self['view']['_load_project'](project);
				self['view']['submit_btn']['setEnabled'](true);
			}
			if ($p['bool']($p['op_eq'](msg, $m['GET_PRJ_MSG']))) {
				self['remote']['sendRequest']('get_projects', $p['dict']([['message', $m['json']['dumps'](null)]]), self);
			}
			return null;
		}
	, 1, ['args',null,['self'],['msg']]);
		$cls_definition['process_msg'] = $method;
		$method = $pyjs__bind_method2('onRemoteError', function(code, errobj, request_info) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				code = arguments[1];
				errobj = arguments[2];
				request_info = arguments[3];
			}

			$m['Window']['alert']('got an error');
			return null;
		}
	, 1, [null,null,['self'],['code'],['errobj'],['request_info']]);
		$cls_definition['onRemoteError'] = $method;
		$method = $pyjs__bind_method2('onRemoteResponse', function(response, request_info) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
				request_info = arguments[2];
			}
			var $iter1_nextval,$iter1_type,row,proj_list,$iter1_array,msg,$iter1_iter,data,$iter1_idx;
			msg = response['__getitem__']('msg');
			if ($p['bool']($p['op_eq'](msg, 'send_data'))) {
				$pyjs_kwargs_call($m['HTTPRequest'](), 'asyncGet', null, null, [{'content_type':'text/html'}, '/success/', self]);
			}
			if ($p['bool']($p['op_eq'](msg, 'get_projects'))) {
				data = $m['json']['loads'](response['__getitem__']('data'));
				proj_list = self['view']['proj_row']['widget']();
				$iter1_iter = data;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					row = $iter1_nextval['$nextval'];
					proj_list['addItem'](row['__getitem__'](1));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['response'],['request_info']]);
		$cls_definition['onRemoteResponse'] = $method;
		$method = $pyjs__bind_method2('onCompletion', function(response) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
			}
			var html;
			self['view']['root']['remove']($p['getattr']($p['getattr'](self, 'view'), 'panel'));
			html = $m['HTML']();
			html['setHTML'](response);
			self['view']['root']['add'](html);
			return null;
		}
	, 1, [null,null,['self'],['response']]);
		$cls_definition['onCompletion'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Form_Controller', $p['tuple']($bases), $data);
	})();
	$m['Report_Model'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'form';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['report_data'] = $p['dict']();
			$p['getattr'](self, 'report_data')['__setitem__']('status', '');
			$p['getattr'](self, 'report_data')['__setitem__']('milestones', '');
			$p['getattr'](self, 'report_data')['__setitem__']('milestones', $p['list']([]));
			$p['getattr'](self, 'report_data')['__setitem__']('impediments', $p['list']([]));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_impediments_count', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['len']($p['getattr'](self, 'report_data')['__getitem__']('impediments'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_impediments_count'] = $method;
		$method = $pyjs__bind_method2('get_milestones_count', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['len']($p['getattr'](self, 'report_data')['__getitem__']('milestones'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_milestones_count'] = $method;
		$method = $pyjs__bind_method2('add_milestone', function(name, end_date, expected_completion) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				end_date = arguments[2];
				expected_completion = arguments[3];
			}
			var milestone_data;
			milestone_data = $p['dict']();
			milestone_data['__setitem__']('name', name);
			milestone_data['__setitem__']('end_date', end_date);
			milestone_data['__setitem__']('expected_completion', expected_completion);
			$p['getattr'](self, 'report_data')['__getitem__']('milestones')['append'](milestone_data);
			return null;
		}
	, 1, [null,null,['self'],['name'],['end_date'],['expected_completion']]);
		$cls_definition['add_milestone'] = $method;
		$method = $pyjs__bind_method2('add_impediment', function(description, $$comment, start_date, end_date, state) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				description = arguments[1];
				$$comment = arguments[2];
				start_date = arguments[3];
				end_date = arguments[4];
				state = arguments[5];
			}
			var $$comment,impediment_data;
			impediment_data = $p['dict']();
			impediment_data['__setitem__']('description', description);
			impediment_data['__setitem__']('comment', $$comment);
			impediment_data['__setitem__']('start_date', start_date);
			impediment_data['__setitem__']('end_date', end_date);
			impediment_data['__setitem__']('state', state);
			$p['getattr'](self, 'report_data')['__getitem__']('impediments')['append'](impediment_data);
			return null;
		}
	, 1, [null,null,['self'],['description'],['$$comment'],['start_date'],['end_date'],['state']]);
		$cls_definition['add_impediment'] = $method;
		$method = $pyjs__bind_method2('add_status', function(status) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				status = arguments[1];
			}

			$p['getattr'](self, 'report_data')['__setitem__']('status', status);
			return null;
		}
	, 1, [null,null,['self'],['status']]);
		$cls_definition['add_status'] = $method;
		$method = $pyjs__bind_method2('add_risks', function(risks) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				risks = arguments[1];
			}

			$p['getattr'](self, 'report_data')['__setitem__']('risks', risks);
			return null;
		}
	, 1, [null,null,['self'],['risks']]);
		$cls_definition['add_risks'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Report_Model', $p['tuple']($bases), $data);
	})();
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
		$m['pyjd']['setup']('form.html');
		$m['view'] = $m['Input_Form']();
		$m['view']['onModuleLoad']();
		$m['model'] = null;
		$m['controller'] = $m['Form_Controller']();
		$m['controller']['register']($m['model'], $m['view']);
		$m['view']['register']($m['controller']);
		$m['pyjd']['run']();
	}
	return this;
}; /* end form */


/* end module: form */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.TextArea.TextArea', 'pyjamas.ui.TextArea', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.FormPanel.FormPanel', 'pyjamas.ui.FormPanel', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.Window', 'pyjamas.ui.HasAlignment', 'pyjamas.JSONService.JSONProxy', 'pyjamas.JSONService', 'pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest', 'json', 'common.Abstract_View', 'common', 'common.Report_Date_Field', 'common.Data_Service']
*/
