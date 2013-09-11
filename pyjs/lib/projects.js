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
			self['hpanel'] = $m['HorizontalPanel']();
			self['hpanel']['setSpacing'](10);
			self['hpanel']['setVerticalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_BOTTOM'));
			self['hpanel']['setHorizontalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_RIGHT'));
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
			self['hpanel']['add'](lbl);
			self['hpanel']['add']($p['getattr'](self, 'add_btn'));
			self['hpanel']['setSpacing'](30);
			self['hpanel']['add']($p['getattr'](self, 'del_btn'));
			self['hpanel']['setCellWidth']($p['getattr'](self, '$$name'), '50%');
			self['hpanel']['setCellWidth']($p['getattr'](self, 'status'), '20%');
			self['hpanel']['setCellWidth'](lbl, '10%');
			self['hpanel']['setCellWidth']($p['getattr'](self, 'add_btn'), '10%');
			self['hpanel']['setCellWidth']($p['getattr'](self, 'del_btn'), '10%');
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
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Projects_Editor', $p['tuple']($bases), $data);
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
			var editor;
			self['remote'] = $m['Data_Service']();
			self['panel'] = $m['VerticalPanel']();
			self['panel']['setSpacing'](10);
			editor = $m['Projects_Editor']();
			self['root'] = $m['RootPanel']('projects_');
			self['root']['add'](editor['get_panel']());
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Projects_View', $p['tuple']($bases), $data);
	})();
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
		$m['pyjd']['setup']('projects.html');
		$m['app'] = $m['Projects_View']();
		$m['app']['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end projects */


/* end module: projects */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.TextArea.TextArea', 'pyjamas.ui.TextArea', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.FormPanel.FormPanel', 'pyjamas.ui.FormPanel', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.Window', 'pyjamas.ui.HasAlignment', 'pyjamas.JSONService.JSONProxy', 'pyjamas.JSONService', 'pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest', 'json']
*/
