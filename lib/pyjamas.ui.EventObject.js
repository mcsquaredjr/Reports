/* start module: pyjamas.ui.EventObject */
$pyjs['loaded_modules']['pyjamas.ui.EventObject'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.EventObject']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.EventObject'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.EventObject'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.EventObject>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.EventObject';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['EventObject'] = $pyjs['loaded_modules']['pyjamas.ui.EventObject'];


	$m['EventObject'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.EventObject';
		$method = $pyjs__bind_method2('__init__', function(source) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				source = arguments[1];
			}

			self['source'] = source;
			return null;
		}
	, 1, [null,null,['self'],['source']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getSource', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'source');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSource'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('EventObject', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui.EventObject */


/* end module: pyjamas.ui.EventObject */


