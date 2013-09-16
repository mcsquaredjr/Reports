/* start module: pyjamas.ui.HyperlinkImage */
$pyjs['loaded_modules']['pyjamas.ui.HyperlinkImage'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.HyperlinkImage']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.HyperlinkImage'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.HyperlinkImage'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.HyperlinkImage>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.HyperlinkImage';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['HyperlinkImage'] = $pyjs['loaded_modules']['pyjamas.ui.HyperlinkImage'];


	$m['Hyperlink'] = $p['___import___']('pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', 'pyjamas.ui', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['MouseListener'] = $p['___import___']('pyjamas.ui.MouseListener', 'pyjamas.ui', null, false);
	$m['HyperlinkImage'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.HyperlinkImage';
		$method = $pyjs__bind_method2('__init__', function(img) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				img = arguments[1];
				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof img != 'undefined') {
					if (img !== null && typeof img['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = img;
						img = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			self['mouseListeners'] = $p['list']([]);
			if ($p['bool'](!$p['bool'](kwargs['has_key']('StyleName')))) {
				kwargs['__setitem__']('StyleName', 'gwt-HyperlinkImage');
			}
			$pyjs_kwargs_call($m['Hyperlink'], '__init__', null, kwargs, [{}, self]);
			$m['DOM']['appendChild']($m['DOM']['getFirstChild'](self['getElement']()), img['getElement']());
			img['unsinkEvents'](($p['getattr']($m['Event'], 'ONCLICK'))|($p['getattr']($m['Event'], 'MOUSEEVENTS')));
			self['sinkEvents'](($p['getattr']($m['Event'], 'ONCLICK'))|($p['getattr']($m['Event'], 'MOUSEEVENTS')));
			return null;
		}
	, 1, [null,['kwargs'],['self'],['img']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addMouseListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['mouseListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addMouseListener'] = $method;
		$method = $pyjs__bind_method2('removeMouseListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['mouseListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeMouseListener'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $or5,$or4,$or1,$or3,$or2,type;
			type = $m['DOM']['eventGetType'](event);
			if ($p['bool'](($p['bool']($or1=$p['op_eq'](type, 'mousedown'))?$or1:($p['bool']($or2=$p['op_eq'](type, 'mouseup'))?$or2:($p['bool']($or3=$p['op_eq'](type, 'mousemove'))?$or3:($p['bool']($or4=$p['op_eq'](type, 'mouseover'))?$or4:$p['op_eq'](type, 'mouseout'))))))) {
				$m['MouseListener']['fireMouseEvent']($p['getattr'](self, 'mouseListeners'), self, event);
				$m['DOM']['eventPreventDefault'](event);
			}
			else {
				$m['Hyperlink']['onBrowserEvent'](self, event);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		var $bases = new Array($m['Hyperlink']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('HyperlinkImage', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.HyperlinkImage', 'HyperlinkImage', $m['HyperlinkImage']);
	return this;
}; /* end pyjamas.ui.HyperlinkImage */


/* end module: pyjamas.ui.HyperlinkImage */


/*
PYJS_DEPS: ['pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Hyperlink', 'pyjamas.Factory', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.DOM', 'pyjamas.ui.Event', 'pyjamas.ui.MouseListener']
*/
