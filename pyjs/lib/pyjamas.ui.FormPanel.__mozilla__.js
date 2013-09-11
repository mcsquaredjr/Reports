/* start module: pyjamas.ui.FormPanel */
$pyjs['loaded_modules']['pyjamas.ui.FormPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.FormPanel']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.FormPanel'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.FormPanel'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.FormPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.FormPanel';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['FormPanel'] = $pyjs['loaded_modules']['pyjamas.ui.FormPanel'];


	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas.ui');
	if ($p['bool']($p['getattr']($m['pyjd'], 'is_desktop'))) {
	}
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['EventObject'] = $p['___import___']('pyjamas.ui.EventObject.EventObject', 'pyjamas.ui', null, false);
	$m['FormSubmitEvent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.FormPanel';
		$method = $pyjs__bind_method2('__init__', function(source) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				source = arguments[1];
			}

			$m['EventObject']['__init__'](self, source);
			self['cancel'] = false;
			return null;
		}
	, 1, [null,null,['self'],['source']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('isCancelled', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'cancel');
		}
	, 1, [null,null,['self']]);
		$cls_definition['isCancelled'] = $method;
		$method = $pyjs__bind_method2('setCancelled', function(cancel) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cancel = arguments[1];
			}

			self['cancel'] = cancel;
			return null;
		}
	, 1, [null,null,['self'],['cancel']]);
		$cls_definition['setCancelled'] = $method;
		var $bases = new Array($m['EventObject']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FormSubmitEvent', $p['tuple']($bases), $data);
	})();
	$m['FormSubmitCompleteEvent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.FormPanel';
		$method = $pyjs__bind_method2('__init__', function(source, results) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				source = arguments[1];
				results = arguments[2];
			}

			$m['EventObject']['__init__'](self, source);
			self['results'] = results;
			return null;
		}
	, 1, [null,null,['self'],['source'],['results']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getResults', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'results');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getResults'] = $method;
		var $bases = new Array($m['EventObject']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FormSubmitCompleteEvent', $p['tuple']($bases), $data);
	})();
	$m['FormPanel_formId'] = 0;
	$m['FormPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.FormPanel';
		$cls_definition['ENCODING_MULTIPART'] = 'multipart/form-data';
		$cls_definition['ENCODING_URLENCODED'] = 'application/x-www-form-urlencoded';
		$cls_definition['METHOD_GET'] = 'get';
		$cls_definition['METHOD_POST'] = 'post';
		$method = $pyjs__bind_method2('__init__', function(target) {
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
				target = arguments[1];
				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof target != 'undefined') {
					if (target !== null && typeof target['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = target;
						target = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof target == 'undefined') target=arguments['callee']['__args__'][3][1];
			var $pyjs_try_err,element,$add2,$add3,$add1,$add4,formName;
			if ($p['bool']($p['hasattr'](target, 'getName'))) {
				target = target['getName']();
			}
			if ($p['bool'](kwargs['has_key']('Element'))) {
				element = kwargs['pop']('Element');
			}
			else {
				element = $m['DOM']['createForm']();
			}
			self['formHandlers'] = $p['list']([]);
			self['iframe'] = null;
			self['__formAction'] = null;
			$m['FormPanel_formId'] = $p['__op_add']($add1=$m['FormPanel_formId'],$add2=1);
			formName = $p['__op_add']($add3='FormPanel_',$add4=$p['str']($m['FormPanel_formId']));
			$m['DOM']['setAttribute'](element, 'target', formName);
			$m['DOM']['setInnerHTML'](element, $p['sprintf']('<iframe name=\'%s\' src="javascript:\'\'">', formName));
			self['iframe'] = $m['DOM']['getFirstChild'](element);
			$m['DOM']['setIntStyleAttribute']($p['getattr'](self, 'iframe'), 'width', 0);
			$m['DOM']['setIntStyleAttribute']($p['getattr'](self, 'iframe'), 'height', 0);
			$m['DOM']['setIntStyleAttribute']($p['getattr'](self, 'iframe'), 'border', 0);
			if ($p['bool']((target !== null))) {
				kwargs['__setitem__']('Target', target);
			}
			$pyjs_kwargs_call($m['SimplePanel'], '__init__', null, kwargs, [{}, self, element]);
			try {
				self['sinkEvents']($p['getattr']($m['Event'], 'ONLOAD'));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
				}
			}
			return null;
		}
	, 1, [null,['kwargs'],['self'],['target', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addFormHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			self['formHandlers']['append'](handler);
			return null;
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addFormHandler'] = $method;
		$method = $pyjs__bind_method2('getAction', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute'](self['getElement'](), 'action');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAction'] = $method;
		$method = $pyjs__bind_method2('getEncoding', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var elem;
			elem = self['getElement']();
			if ($p['bool']($p['hasattr'](elem, 'enctype'))) {
				return $p['getattr'](elem, 'enctype');
			}
			return $p['getattr'](elem, 'encoding');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getEncoding'] = $method;
		$method = $pyjs__bind_method2('getMethod', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute'](self['getElement'](), 'method');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMethod'] = $method;
		$method = $pyjs__bind_method2('getTarget', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute'](self['getElement'](), 'target');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTarget'] = $method;
		$method = $pyjs__bind_method2('getTextContents', function(iframe) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				iframe = arguments[1];
			}


        try {
            if (!iframe['contentWindow']['document'])
                return null;

            return iframe['contentWindow']['document']['body']['innerHTML'];
        } catch (e) {
            return null;
        }
        
		}
	, 1, [null,null,['self'],['iframe']]);
		$cls_definition['getTextContents'] = $method;
		$method = $pyjs__bind_method2('_onload', function(form, event, something) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				form = arguments[1];
				event = arguments[2];
				something = arguments[3];
			}

			$p['printFunc']([form, event, something], 1);
			if ($p['bool'](!$p['bool']($p['getattr'](self, '__formAction')))) {
				return null;
			}
			self['_listener']['onFrameLoad']();
			return null;
		}
	, 1, [null,null,['self'],['form'],['event'],['something']]);
		$cls_definition['_onload'] = $method;
		$method = $pyjs__bind_method2('_onsubmit', function(form, event, something) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				form = arguments[1];
				event = arguments[2];
				something = arguments[3];
			}
			var $pyjs_try_err;
			$p['printFunc']([form, event, something], 1);
			try {
				event = $m['get_main_frame']()['gobject_wrap'](event);
				form = $m['get_main_frame']()['gobject_wrap'](form);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
				}
			}
			if ($p['bool'](($p['getattr'](self, 'iframe') !== null))) {
				self['__formAction'] = $p['getattr'](form, 'action');
			}
			return self['_listener']['onFormSubmit']();
		}
	, 1, [null,null,['self'],['form'],['event'],['something']]);
		$cls_definition['_onsubmit'] = $method;
		$method = $pyjs__bind_method2('hookEvents', function(iframe, form, listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				iframe = arguments[1];
				form = arguments[2];
				listener = arguments[3];
			}


        if (iframe) {
            iframe['onload'] = function() {
                if (!iframe['__formAction'])
                    return;

                listener['onFrameLoad']();
            };
        }

        form['onsubmit'] = function() {
            if (iframe)
                iframe['__formAction'] = form['action'];
            return listener['onFormSubmit']();
        };
        
		}
	, 1, [null,null,['self'],['iframe'],['form'],['listener']]);
		$cls_definition['hookEvents'] = $method;
		$method = $pyjs__bind_method2('onFormSubmit', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_nextval,$iter1_type,$iter1_iter,handler,$iter1_array,event,$iter1_idx;
			event = $m['FormSubmitEvent'](self);
			$iter1_iter = $p['getattr'](self, 'formHandlers');
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				handler = $iter1_nextval['$nextval'];
				handler['onSubmit'](event);
			}
			return !$p['bool'](event['isCancelled']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['onFormSubmit'] = $method;
		$method = $pyjs__bind_method2('onFrameLoad', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,handler,event,$iter2_array;
			event = $m['FormSubmitCompleteEvent'](self, self['getTextContents']($p['getattr'](self, 'iframe')));
			$iter2_iter = $p['getattr'](self, 'formHandlers');
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				handler = $iter2_nextval['$nextval'];
				handler['onSubmitComplete'](event);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onFrameLoad'] = $method;
		$method = $pyjs__bind_method2('removeFormHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			self['formHandlers']['remove'](handler);
			return null;
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['removeFormHandler'] = $method;
		$method = $pyjs__bind_method2('setAction', function(url) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
			}

			$m['DOM']['setAttribute'](self['getElement'](), 'action', url);
			return null;
		}
	, 1, [null,null,['self'],['url']]);
		$cls_definition['setAction'] = $method;
		$method = $pyjs__bind_method2('setEncoding', function(encodingType) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				encodingType = arguments[1];
			}
			var form;
			form = self['getElement']();
			if ($p['bool']($p['hasattr'](form, 'enctype'))) {
				form['enctype'] = encodingType;
			}
			form['encoding'] = encodingType;
			return null;
		}
	, 1, [null,null,['self'],['encodingType']]);
		$cls_definition['setEncoding'] = $method;
		$method = $pyjs__bind_method2('setMethod', function(method) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				method = arguments[1];
			}

			$m['DOM']['setAttribute'](self['getElement'](), 'method', method);
			return null;
		}
	, 1, [null,null,['self'],['method']]);
		$cls_definition['setMethod'] = $method;
		$method = $pyjs__bind_method2('submit', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $iter3_idx,$iter3_array,event,handler,$iter3_iter,$iter3_type,$iter3_nextval;
			event = $m['FormSubmitEvent'](self);
			$iter3_iter = $p['getattr'](self, 'formHandlers');
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				handler = $iter3_nextval['$nextval'];
				handler['onSubmit'](event);
			}
			if ($p['bool'](event['isCancelled']())) {
				return null;
			}
			self['submitImpl'](self['getElement'](), $p['getattr'](self, 'iframe'));
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['submit'] = $method;
		$method = $pyjs__bind_method2('submitImpl', function(form, iframe) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				form = arguments[1];
				iframe = arguments[2];
			}


        if (iframe)
            iframe['__formAction'] = form['action'];
        form['submit']();
        
		}
	, 1, [null,null,['self'],['form'],['iframe']]);
		$cls_definition['submitImpl'] = $method;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['SimplePanel']['onAttach'](self);
			self['hookEvents']($p['getattr'](self, 'iframe'), self['getElement'](), self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['SimplePanel']['onDetach'](self);
			self['unhookEvents']($p['getattr'](self, 'iframe'), self['getElement']());
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$method = $pyjs__bind_method2('setTarget', function(target) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				target = arguments[1];
			}

			$m['DOM']['setAttribute'](self['getElement'](), 'target', target);
			return null;
		}
	, 1, [null,null,['self'],['target']]);
		$cls_definition['setTarget'] = $method;
		$method = $pyjs__bind_method2('unhookEvents', function(iframe, form) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				iframe = arguments[1];
				form = arguments[2];
			}


        if (iframe)
            iframe['onload'] = null;
        form['onsubmit'] = null;
        
		}
	, 1, [null,null,['self'],['iframe'],['form']]);
		$cls_definition['unhookEvents'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FormPanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.FormPanel', 'FormPanel', $m['FormPanel']);
	return this;
}; /* end pyjamas.ui.FormPanel */


/* end module: pyjamas.ui.FormPanel */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'pyjd', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.Event', 'pyjamas.ui.EventObject.EventObject', 'pyjamas.ui.EventObject']
*/
