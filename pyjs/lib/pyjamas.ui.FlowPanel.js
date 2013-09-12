/* start module: pyjamas.ui.FlowPanel */
$pyjs['loaded_modules']['pyjamas.ui.FlowPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.FlowPanel']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.FlowPanel'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.FlowPanel'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.FlowPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.FlowPanel';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['FlowPanel'] = $pyjs['loaded_modules']['pyjamas.ui.FlowPanel'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['ComplexPanel'] = $p['___import___']('pyjamas.ui.ComplexPanel.ComplexPanel', 'pyjamas.ui', null, false);
	$m['FlowPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.FlowPanel';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var element;
			element = null;
			if ($p['bool'](kwargs['has_key']('Element'))) {
				element = kwargs['pop']('Element');
			}
			if ($p['bool']((element === null))) {
				element = $m['DOM']['createDiv']();
			}
			self['setElement'](element);
			$pyjs_kwargs_call($m['ComplexPanel'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add', function(w) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w = arguments[1];
			}

			$m['ComplexPanel']['add'](self, w, self['getElement']());
			return null;
		}
	, 1, [null,null,['self'],['w']]);
		$cls_definition['add'] = $method;
		var $bases = new Array($m['ComplexPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FlowPanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.FlowPanel', 'FlowPanel', $m['FlowPanel']);
	return this;
}; /* end pyjamas.ui.FlowPanel */


/* end module: pyjamas.ui.FlowPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.ComplexPanel.ComplexPanel', 'pyjamas.ui', 'pyjamas.ui.ComplexPanel']
*/
