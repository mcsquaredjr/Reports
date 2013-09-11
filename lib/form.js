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
	$m['Data_Service'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'form';
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
	$m['Operations_Fields'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'form';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['VerticalPanel']['__init__'](self);
			self['budget_area'] = $pyjs_kwargs_call(null, $m['Text_Area_Row'], null, null, [{'help':'status of budget'}, 'Budget']);
			self['hr_area'] = $pyjs_kwargs_call(null, $m['Text_Area_Row'], null, null, [{'help':'status of HR-REORG'}, 'HR/Reorg']);
			self['planview_area'] = $pyjs_kwargs_call(null, $m['Text_Area_Row'], null, null, [{'help':'status of PlanView'}, 'PlanView']);
			self['site_area'] = $pyjs_kwargs_call(null, $m['Text_Area_Row'], null, null, [{'help':'status of the site updates'}, 'Site']);
			self['recr_area'] = $pyjs_kwargs_call(null, $m['Text_Area_Row'], null, null, [{'help':'status of recruiting'}, 'Recruiting']);
			self['finance_area'] = $pyjs_kwargs_call(null, $m['Text_Area_Row'], null, null, [{'help':'status of finance'}, 'Finance']);
			self['qbr_area'] = $pyjs_kwargs_call(null, $m['Text_Area_Row'], null, null, [{'help':'status of QBR'}, 'QBR']);
			self['add'](self['budget_area']['panel']());
			self['add'](self['hr_area']['panel']());
			self['add'](self['planview_area']['panel']());
			self['add'](self['site_area']['panel']());
			self['add'](self['recr_area']['panel']());
			self['add'](self['finance_area']['panel']());
			self['add'](self['qbr_area']['panel']());
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
			data['__setitem__']('project', 'Operations');
			data['__setitem__']('Budget', self['budget_area']['widget']()['getText']());
			data['__setitem__']('HR/Reorg', self['hr_area']['widget']()['getText']());
			data['__setitem__']('PlanView', self['planview_area']['widget']()['getText']());
			data['__setitem__']('Site', self['site_area']['widget']()['getText']());
			data['__setitem__']('Recruiting', self['recr_area']['widget']()['getText']());
			data['__setitem__']('Finance', self['finance_area']['widget']()['getText']());
			data['__setitem__']('QBR', self['qbr_area']['widget']()['getText']());
			return data;
		}
	, 1, [null,null,['self']]);
		$cls_definition['prep_data'] = $method;
		var $bases = new Array($m['VerticalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Operations_Fields', $p['tuple']($bases), $data);
	})();
	$m['Eng_Services_Fields'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'form';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['VerticalPanel']['__init__'](self);
			self['process_area'] = $pyjs_kwargs_call(null, $m['Text_Area_Row'], null, null, [{'help':'status of process automation'}, 'Process Automation']);
			self['tools_area'] = $pyjs_kwargs_call(null, $m['Text_Area_Row'], null, null, [{'help':'status of tools'}, 'Tools']);
			self['reporting_area'] = $pyjs_kwargs_call(null, $m['Text_Area_Row'], null, null, [{'help':'status of reporting/dashboards'}, 'Reporting/Dashboards']);
			self['infr_area'] = $pyjs_kwargs_call(null, $m['Text_Area_Row'], null, null, [{'help':'status of infrastructure'}, 'Infrastructure']);
			self['neo_area'] = $pyjs_kwargs_call(null, $m['Text_Area_Row'], null, null, [{'help':'status of Neo release'}, 'Neo release']);
			self['add'](self['process_area']['panel']());
			self['add'](self['tools_area']['panel']());
			self['add'](self['reporting_area']['panel']());
			self['add'](self['infr_area']['panel']());
			self['add'](self['neo_area']['panel']());
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
			data['__setitem__']('project', 'Engineering Services');
			data['__setitem__']('Automation', self['process_area']['widget']()['getText']());
			data['__setitem__']('Tools', self['tools_area']['widget']()['getText']());
			data['__setitem__']('Reporting/Dashboards', self['process_area']['widget']()['getText']());
			data['__setitem__']('Infrastructure', self['infr_area']['widget']()['getText']());
			data['__setitem__']('Neo', self['neo_area']['widget']()['getText']());
			return data;
		}
	, 1, [null,null,['self']]);
		$cls_definition['prep_data'] = $method;
		var $bases = new Array($m['VerticalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Eng_Services_Fields', $p['tuple']($bases), $data);
	})();
	$m['Input_Form'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'form';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var proj_list,submit_btn;
			self['remote'] = $m['Data_Service']();
			self['cur_project_panel'] = null;
			self['panel'] = $m['VerticalPanel']();
			self['panel']['setSpacing'](10);
			proj_list = $m['ListBox']();
			proj_list['addItem']('Operations');
			proj_list['addItem']('Engineering Services');
			proj_list['setVisibleItemCount'](0);
			proj_list['addChangeListener']($p['getattr'](self, 'on_project_changed'));
			proj_list['setStyleName']('form-control input-lg');
			self['proj_row'] = $pyjs_kwargs_call(null, $m['Form_Row'], null, null, [{'help':'project, status of which you want to report'}, 'Select project', proj_list]);
			self['project_panel'] = $m['VerticalPanel']();
			submit_btn = $m['Button']('Submit report', $p['getattr'](self, 'send_data'));
			submit_btn['setStyleName']('btn btn-primary btn-lg');
			self['panel']['add'](self['proj_row']['panel']());
			self['panel']['add']($p['getattr'](self, 'project_panel'));
			self['panel']['add'](submit_btn);
			self['root'] = $m['RootPanel']('report');
			self['root']['add']($p['getattr'](self, 'panel'));
			self['_load_project']('Operations');
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
			var eng_services_fields,operations_fiedls;
			if ($p['bool']($p['op_eq'](project, 'Operations'))) {
				if ($p['bool'](($p['getattr'](self, 'cur_project_panel') !== null))) {
					self['project_panel']['remove']($p['getattr'](self, 'cur_project_panel'));
				}
				operations_fiedls = $m['Operations_Fields']();
				self['project_panel']['add'](operations_fiedls);
				self['cur_project_panel'] = operations_fiedls;
			}
			else if ($p['bool']($p['op_eq'](project, 'Engineering Services'))) {
				if ($p['bool'](($p['getattr'](self, 'cur_project_panel') !== null))) {
					self['project_panel']['remove']($p['getattr'](self, 'cur_project_panel'));
				}
				eng_services_fields = $m['Eng_Services_Fields']();
				self['project_panel']['add'](eng_services_fields);
				self['cur_project_panel'] = eng_services_fields;
			}
			return null;
		}
	, 1, [null,null,['self'],['project']]);
		$cls_definition['_load_project'] = $method;
		$method = $pyjs__bind_method2('onRemoteResponse', function(response, request_info) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
				request_info = arguments[2];
			}

			$pyjs_kwargs_call($m['HTTPRequest'](), 'asyncGet', null, null, [{'content_type':'text/html'}, '/success/', self]);
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
			self['root']['remove']($p['getattr'](self, 'panel'));
			html = $m['HTML']();
			html['setHTML'](response);
			self['root']['add'](html);
			return null;
		}
	, 1, [null,null,['self'],['response']]);
		$cls_definition['onCompletion'] = $method;
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
		$method = $pyjs__bind_method2('send_data', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var data;
			data = self['cur_project_panel']['prep_data']();
			self['remote']['sendRequest']('send_data', $p['dict']([['message', $m['json']['dumps'](data)]]), self);
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
			self['_load_project'](project);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['on_project_changed'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Input_Form', $p['tuple']($bases), $data);
	})();
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
		$m['pyjd']['setup']('form.html');
		$m['app'] = $m['Input_Form']();
		$m['app']['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end form */


/* end module: form */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.TextArea.TextArea', 'pyjamas.ui.TextArea', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.FormPanel.FormPanel', 'pyjamas.ui.FormPanel', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.Window', 'pyjamas.ui.HasAlignment', 'pyjamas.JSONService.JSONProxy', 'pyjamas.JSONService', 'pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest', 'json']
*/
