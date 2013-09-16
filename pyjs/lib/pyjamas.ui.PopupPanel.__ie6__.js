/* start module: pyjamas.ui.PopupPanel */
$pyjs['loaded_modules']['pyjamas.ui.PopupPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.PopupPanel']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.PopupPanel'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.PopupPanel'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.PopupPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.PopupPanel';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['PopupPanel'] = $pyjs['loaded_modules']['pyjamas.ui.PopupPanel'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui', null, false);
	$m['MouseListener'] = $p['___import___']('pyjamas.ui.MouseListener', 'pyjamas.ui', null, false);
	$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', 'pyjamas.ui', null, false);
	$m['PopupPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.PopupPanel';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['modal', 'Modal', 'Modal', null])]);
		$method = $pyjs__bind_method2('__init__', function(autoHide, modal, rootpanel, glass) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				autoHide = arguments[1];
				modal = arguments[2];
				rootpanel = arguments[3];
				glass = arguments[4];
				var kwargs = arguments['length'] >= 6 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof glass != 'undefined') {
					if (glass !== null && typeof glass['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = glass;
						glass = arguments[5];
					}
				} else 				if (typeof rootpanel != 'undefined') {
					if (rootpanel !== null && typeof rootpanel['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = rootpanel;
						rootpanel = arguments[5];
					}
				} else 				if (typeof modal != 'undefined') {
					if (modal !== null && typeof modal['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = modal;
						modal = arguments[5];
					}
				} else 				if (typeof autoHide != 'undefined') {
					if (autoHide !== null && typeof autoHide['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = autoHide;
						autoHide = arguments[5];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[5];
					}
				} else {
				}
			}
			if (typeof autoHide == 'undefined') autoHide=arguments['callee']['__args__'][3][1];
			if (typeof modal == 'undefined') modal=arguments['callee']['__args__'][4][1];
			if (typeof rootpanel == 'undefined') rootpanel=arguments['callee']['__args__'][5][1];
			if (typeof glass == 'undefined') glass=arguments['callee']['__args__'][6][1];
			var element;
			self['popupListeners'] = $p['list']([]);
			self['showing'] = false;
			self['autoHide'] = autoHide;
			kwargs['__setitem__']('Modal', kwargs['get']('Modal', modal));
			if ($p['bool']((rootpanel === null))) {
				rootpanel = $m['RootPanel']();
			}
			self['rootpanel'] = rootpanel;
			self['glass'] = glass;
			if ($p['bool']($p['getattr'](self, 'glass'))) {
				self['glass'] = $m['DOM']['createDiv']();
				if ($p['bool'](!$p['bool'](kwargs['__contains__']('GlassStyleName')))) {
					kwargs['__setitem__']('GlassStyleName', 'gwt-PopupPanelGlass');
				}
			}
			if ($p['bool'](kwargs['has_key']('Element'))) {
				element = kwargs['pop']('Element');
			}
			else {
				element = self['createElement']();
			}
			$m['DOM']['setStyleAttribute'](element, 'position', 'absolute');
			$pyjs_kwargs_call($m['SimplePanel'], '__init__', null, kwargs, [{}, self, element]);
			if ($p['bool'](glass)) {
				self['setGlassEnabled'](true);
				if ($p['bool'](kwargs['__contains__']('GlassStyleName'))) {
					self['setGlassStyleName'](kwargs['pop']('GlassStyleName'));
				}
			}
			return null;
		}
	, 1, [null,['kwargs'],['self'],['autoHide', false],['modal', true],['rootpanel', null],['glass', false]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this['prototype'];
			var $add2,$add1;
			return $p['__op_add']($add1=$m['SimplePanel']['_getProps'](),$add2=$p['getattr'](self, '_props'));
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('addPopupListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['popupListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addPopupListener'] = $method;
		$method = $pyjs__bind_method2('getPopupLeft', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getIntAttribute'](self['getElement'](), 'offsetLeft');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getPopupLeft'] = $method;
		$method = $pyjs__bind_method2('getPopupTop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getIntAttribute'](self['getElement'](), 'offsetTop');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getPopupTop'] = $method;
		$method = $pyjs__bind_method2('createElement', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['createDiv']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['createElement'] = $method;
		$method = $pyjs__bind_method2('hide', function(autoClosed) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				autoClosed = arguments[1];
			}
			if (typeof autoClosed == 'undefined') autoClosed=arguments['callee']['__args__'][3][1];
			var $iter1_nextval,$iter1_type,$iter1_iter,listener,$iter1_array,$iter1_idx;
			if ($p['bool'](!$p['bool']($p['getattr'](self, 'showing')))) {
				return null;
			}
			self['showing'] = false;
			if ($p['bool']($p['getattr'](self, 'glass'))) {
				self['hideGlass']();
			}
			$m['DOM']['removeEventPreview'](self);
			self['rootpanel']['remove'](self);
			self['onHideImpl'](self['getElement']());
			$iter1_iter = $p['getattr'](self, 'popupListeners');
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				listener = $iter1_nextval['$nextval'];
				if ($p['bool']($p['hasattr'](listener, 'onPopupClosed'))) {
					listener['onPopupClosed'](self, autoClosed);
				}
				else {
					listener(self, autoClosed);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['autoClosed', false]]);
		$cls_definition['hide'] = $method;
		$method = $pyjs__bind_method2('setModal', function(modal) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				modal = arguments[1];
			}

			self['modal'] = modal;
			return null;
		}
	, 1, [null,null,['self'],['modal']]);
		$cls_definition['setModal'] = $method;
		$method = $pyjs__bind_method2('getModal', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['isModal']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getModal'] = $method;
		$method = $pyjs__bind_method2('isModal', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'modal');
		}
	, 1, [null,null,['self']]);
		$cls_definition['isModal'] = $method;
		$method = $pyjs__bind_method2('_event_targets_popup', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $and1,$and2,target;
			target = $m['DOM']['eventGetTarget'](event);
			return ($p['bool']($and1=target)?$m['DOM']['isOrHasChild'](self['getElement'](), target):$and1);
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['_event_targets_popup'] = $method;
		$method = $pyjs__bind_method2('onEventPreview', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $or5,$and9,$or8,etype,$and8,$or4,$or7,$or6,$or1,$or3,$or2,$and4,$and3,$or9,$and5,$and6,$and7,$and10,$or14,$or11,$or10,$or13,$or12;
			etype = $m['DOM']['eventGetType'](event);
			if ($p['bool']($p['op_eq'](etype, 'keydown'))) {
				return ($p['bool']($and3=self['onKeyDownPreview']($m['DOM']['eventGetKeyCode'](event), $m['KeyboardListener']['getKeyboardModifiers'](event)))?($p['bool']($or1=!$p['bool']($p['getattr'](self, 'modal')))?$or1:self['_event_targets_popup'](event)):$and3);
			}
			else if ($p['bool']($p['op_eq'](etype, 'keyup'))) {
				return ($p['bool']($and5=self['onKeyUpPreview']($m['DOM']['eventGetKeyCode'](event), $m['KeyboardListener']['getKeyboardModifiers'](event)))?($p['bool']($or3=!$p['bool']($p['getattr'](self, 'modal')))?$or3:self['_event_targets_popup'](event)):$and5);
			}
			else if ($p['bool']($p['op_eq'](etype, 'keypress'))) {
				return ($p['bool']($and7=self['onKeyPressPreview']($m['DOM']['eventGetKeyCode'](event), $m['KeyboardListener']['getKeyboardModifiers'](event)))?($p['bool']($or5=!$p['bool']($p['getattr'](self, 'modal')))?$or5:self['_event_targets_popup'](event)):$and7);
			}
			else if ($p['bool'](($p['bool']($or7=$p['op_eq'](etype, 'mousedown'))?$or7:$p['op_eq'](etype, 'blur')))) {
				if ($p['bool'](($m['DOM']['getCaptureElement']() !== null))) {
					return true;
				}
				if ($p['bool'](($p['bool']($and9=$p['getattr'](self, 'autoHide'))?!$p['bool'](self['_event_targets_popup'](event)):$and9))) {
					self['hide'](true);
					return true;
				}
			}
			else if ($p['bool'](($p['bool']($or9=$p['op_eq'](etype, 'mouseup'))?$or9:($p['bool']($or10=$p['op_eq'](etype, 'click'))?$or10:($p['bool']($or11=$p['op_eq'](etype, 'mousemove'))?$or11:$p['op_eq']($p['type'], 'dblclick')))))) {
				if ($p['bool'](($m['DOM']['getCaptureElement']() !== null))) {
					return true;
				}
			}
			return ($p['bool']($or13=!$p['bool']($p['getattr'](self, 'modal')))?$or13:self['_event_targets_popup'](event));
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onEventPreview'] = $method;
		$method = $pyjs__bind_method2('onKeyDownPreview', function(key, modifiers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				modifiers = arguments[2];
			}

			return true;
		}
	, 1, [null,null,['self'],['key'],['modifiers']]);
		$cls_definition['onKeyDownPreview'] = $method;
		$method = $pyjs__bind_method2('onKeyPressPreview', function(key, modifiers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				modifiers = arguments[2];
			}

			return true;
		}
	, 1, [null,null,['self'],['key'],['modifiers']]);
		$cls_definition['onKeyPressPreview'] = $method;
		$method = $pyjs__bind_method2('onKeyUpPreview', function(key, modifiers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				modifiers = arguments[2];
			}

			return true;
		}
	, 1, [null,null,['self'],['key'],['modifiers']]);
		$cls_definition['onKeyUpPreview'] = $method;
		$method = $pyjs__bind_method2('onHideImpl', function(popup) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				popup = arguments[1];
			}


        var frame = popup['__frame'];
        frame['parentElement']['removeChild'](frame);
        popup['__frame'] = null;
        frame['__popup'] = null;
        
		}
	, 1, [null,null,['self'],['popup']]);
		$cls_definition['onHideImpl'] = $method;
		$method = $pyjs__bind_method2('onShowImpl', function(popup) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				popup = arguments[1];
			}


        var frame = $doc['createElement']('iframe');
        frame['scrolling'] = 'no';
        frame['frameBorder'] = 0;
        frame['style']['position'] = 'absolute';
        frame['src'] = "javascript:''";

        popup['__frame'] = frame;
        frame['__popup'] = popup;
        frame['style']['setExpression']('left', "this['__popup']['offsetLeft']");
        frame['style']['setExpression']('top', "this['__popup']['offsetTop']");
        frame['style']['setExpression']('width', "this['__popup']['offsetWidth']");
        frame['style']['setExpression']('height', "this['__popup']['offsetHeight']");
        popup['parentElement']['insertBefore'](frame, popup);
        
		}
	, 1, [null,null,['self'],['popup']]);
		$cls_definition['onShowImpl'] = $method;
		$method = $pyjs__bind_method2('removePopupListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['popupListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removePopupListener'] = $method;
		$method = $pyjs__bind_method2('setPopupPosition', function(left, top) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				left = arguments[1];
				top = arguments[2];
			}
			var $mul4,$sub4,element,$sub3,$div4,$sub2,$div2,$div3,$sub1,$div1,$mul3,$mul2,$mul1;
			if ($p['bool']($p['isinstance'](left, $p['basestring']))) {
				if ($p['bool'](left['endswith']('%'))) {
					left = $p['float_int']($p['__getslice'](left, 0, (typeof ($usub1=1)=='number'?
						-$usub1:
						$p['op_usub']($usub1))));
					left = $p['float_int']((typeof ($div1=(typeof ($mul1=left)==typeof ($mul2=$m['Window']['getClientWidth']()) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2)))==typeof ($div2=100) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2)));
				}
				else if ($p['bool'](left['lower']()['endswith']('px'))) {
					left = $p['float_int']($p['__getslice'](left, 0, (typeof ($usub2=2)=='number'?
						-$usub2:
						$p['op_usub']($usub2))));
				}
			}
			if ($p['bool']($p['isinstance'](top, $p['basestring']))) {
				if ($p['bool'](top['lower']()['endswith']('%'))) {
					top = $p['float_int']($p['__getslice'](top, 0, (typeof ($usub3=1)=='number'?
						-$usub3:
						$p['op_usub']($usub3))));
					top = $p['float_int']((typeof ($div3=(typeof ($mul3=top)==typeof ($mul4=$m['Window']['getClientHeight']()) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4)))==typeof ($div4=100) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4)));
				}
				else if ($p['bool'](top['endswith']('px'))) {
					top = $p['float_int']($p['__getslice'](top, 0, (typeof ($usub4=2)=='number'?
						-$usub4:
						$p['op_usub']($usub4))));
				}
			}
			left = $p['max'](left, 0);
			top = $p['max'](top, 0);
			left = $p['__op_sub']($sub1=left,$sub2=$m['DOM']['getBodyOffsetLeft']());
			top = $p['__op_sub']($sub3=top,$sub4=$m['DOM']['getBodyOffsetTop']());
			element = self['getElement']();
			$m['DOM']['setStyleAttribute'](element, 'left', $p['sprintf']('%dpx', left));
			$m['DOM']['setStyleAttribute'](element, 'top', $p['sprintf']('%dpx', top));
			return null;
		}
	, 1, [null,null,['self'],['left'],['top']]);
		$cls_definition['setPopupPosition'] = $method;
		$method = $pyjs__bind_method2('isGlassEnabled', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return ($p['getattr'](self, 'glass') !== null);
		}
	, 1, [null,null,['self']]);
		$cls_definition['isGlassEnabled'] = $method;
		$method = $pyjs__bind_method2('setGlassEnabled', function(enabled) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				enabled = arguments[1];
			}

			if ($p['bool'](enabled)) {
				if ($p['bool'](($p['getattr'](self, 'glass') === null))) {
					self['glass'] = $m['DOM']['createDiv']();
					self['setGlassStyleName']();
				}
			}
			else if ($p['bool'](($p['getattr'](self, 'glass') !== null))) {
				self['hideGlass']();
			}
			return null;
		}
	, 1, [null,null,['self'],['enabled']]);
		$cls_definition['setGlassEnabled'] = $method;
		$method = $pyjs__bind_method2('getGlassElement', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'glass');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getGlassElement'] = $method;
		$method = $pyjs__bind_method2('setGlassStyleName', function(style) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				style = arguments[1];
			}
			if (typeof style == 'undefined') style=arguments['callee']['__args__'][3][1];

			if ($p['bool']($p['getattr'](self, 'glass'))) {
				$m['DOM']['setAttribute']($p['getattr'](self, 'glass'), 'className', style);
			}
			return null;
		}
	, 1, [null,null,['self'],['style', 'gwt-PopupPanelGlass']]);
		$cls_definition['setGlassStyleName'] = $method;
		$method = $pyjs__bind_method2('getGlassStyleName', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['getattr'](self, 'glass'))) {
				return $m['DOM']['setAttribute']($p['getattr'](self, 'glass'), 'className');
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getGlassStyleName'] = $method;
		$method = $pyjs__bind_method2('setGlassPosition', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add3,height,width,$add6,$add4,$add5,top,left;
			top = $m['Window']['getScrollTop']();
			left = $m['Window']['getScrollLeft']();
			height = $m['Window']['getClientHeight']();
			width = $m['Window']['getClientWidth']();
			$m['DOM']['setStyleAttribute']($p['getattr'](self, 'glass'), 'position', 'absolute');
			$m['DOM']['setStyleAttribute']($p['getattr'](self, 'glass'), 'left', ($p['bool']($p['op_eq'](left, 0))? ($p['sprintf']('%s', left)) : ($p['sprintf']('%spx', left))));
			$m['DOM']['setStyleAttribute']($p['getattr'](self, 'glass'), 'top', ($p['bool']($p['op_eq'](top, 0))? ($p['sprintf']('%s', top)) : ($p['sprintf']('%spx', top))));
			$m['DOM']['setStyleAttribute']($p['getattr'](self, 'glass'), 'height', $p['sprintf']('%spx', $p['__op_add']($add3=top,$add4=height)));
			$m['DOM']['setStyleAttribute']($p['getattr'](self, 'glass'), 'width', $p['sprintf']('%spx', $p['__op_add']($add5=left,$add6=width)));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['setGlassPosition'] = $method;
		$method = $pyjs__bind_method2('showGlass', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Window']['enableScrolling'](false);
			self['setGlassPosition']();
			$doc['body']['appendChild']($p['getattr'](self, 'glass'));
			$m['Window']['addWindowResizeListener'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['showGlass'] = $method;
		$method = $pyjs__bind_method2('hideGlass', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Window']['removeWindowResizeListener'](self);
			$doc['body']['removeChild']($p['getattr'](self, 'glass'));
			$m['Window']['enableScrolling'](true);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['hideGlass'] = $method;
		$method = $pyjs__bind_method2('onWindowResized', function(width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}

			self['setGlassPosition']();
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['onWindowResized'] = $method;
		$method = $pyjs__bind_method2('centerBox', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $div12,self_top,self_left,width,$sub8,$sub6,self_height,$div10,$div8,$div9,height,$sub7,self_width,center_x,center_y,$div11,$div6,$div7,$sub5,$div5;
			self_width = self['getOffsetWidth']();
			self_height = self['getOffsetHeight']();
			height = $m['Window']['getClientHeight']();
			width = $m['Window']['getClientWidth']();
			center_x = (typeof ($div5=$p['float_int'](width))==typeof ($div6=2) && typeof $div5=='number' && $div6 !== 0?
				$div5/$div6:
				$p['op_div']($div5,$div6));
			center_y = (typeof ($div7=$p['float_int'](height))==typeof ($div8=2) && typeof $div7=='number' && $div8 !== 0?
				$div7/$div8:
				$p['op_div']($div7,$div8));
			self_top = $p['__op_sub']($sub5=center_y,$sub6=(typeof ($div9=$p['float_int'](self_height))==typeof ($div10=2) && typeof $div9=='number' && $div10 !== 0?
				$div9/$div10:
				$p['op_div']($div9,$div10)));
			self_left = $p['__op_sub']($sub7=center_x,$sub8=(typeof ($div11=$p['float_int'](self_width))==typeof ($div12=2) && typeof $div11=='number' && $div12 !== 0?
				$div11/$div12:
				$p['op_div']($div11,$div12)));
			self['setPopupPosition'](self_left, self_top);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['centerBox'] = $method;
		$method = $pyjs__bind_method2('center', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['centerBox']();
			self['show']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['center'] = $method;
		$method = $pyjs__bind_method2('add', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			self['setWidget'](widget);
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('show', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['getattr'](self, 'showing'))) {
				return null;
			}
			self['showing'] = true;
			if ($p['bool']($p['getattr'](self, 'glass'))) {
				self['showGlass']();
			}
			$m['DOM']['addEventPreview'](self);
			self['rootpanel']['add'](self);
			self['onShowImpl'](self['getElement']());
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['show'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PopupPanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.PopupPanel', 'PopupPanel', $m['PopupPanel']);
	return this;
}; /* end pyjamas.ui.PopupPanel */


/* end module: pyjamas.ui.PopupPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Window', 'pyjamas.Factory', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.MouseListener', 'pyjamas.ui.KeyboardListener']
*/
