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
	$m['Form_Row'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'projects';
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
		$cls_definition['__module__'] = 'projects';
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
	$m['Projects_Editor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'projects';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var proj_list;
			self['remote'] = $m['Data_Service']();
			self['panel'] = $m['VerticalPanel']();
			self['panel']['setSpacing'](10);
			proj_list = $m['ListBox']();
			proj_list['addItem']('Operations');
			proj_list['addItem']('Engineering Services');
			proj_list['setVisibleItemCount'](0);
			proj_list['setStyleName']('form-control input-lg');
			self['panel']['add'](proj_list);
			self['root'] = $m['RootPanel']('projects_');
			self['root']['add']($p['getattr'](self, 'panel'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Projects_Editor', $p['tuple']($bases), $data);
	})();
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
		$m['pyjd']['setup']('projects.html');
		$m['app'] = $m['Projects_Editor']();
		$m['app']['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end projects */


/* end module: projects */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.TextArea.TextArea', 'pyjamas.ui.TextArea', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.FormPanel.FormPanel', 'pyjamas.ui.FormPanel', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.Window', 'pyjamas.ui.HasAlignment', 'pyjamas.JSONService.JSONProxy', 'pyjamas.JSONService', 'pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest', 'json']
*/
