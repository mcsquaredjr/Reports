/* start module: common */
$pyjs['loaded_modules']['common'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['common']['__was_initialized__']) return $pyjs['loaded_modules']['common'];
	var $m = $pyjs['loaded_modules']['common'];
	$m['__repr__'] = function() { return '<module: common>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'common';
	$m['__name__'] = __mod_name__;


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
	$m['DateField'] = $p['___import___']('pyjamas.ui.Calendar.DateField', null, null, false);
	$m['Calendar'] = $p['___import___']('pyjamas.ui.Calendar.Calendar', null, null, false);
	$m['CalendarPopup'] = $p['___import___']('pyjamas.ui.Calendar.CalendarPopup', null, null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', null, null, false);
	$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
	$m['HyperlinkImage'] = $p['___import___']('pyjamas.ui.HyperlinkImage.HyperlinkImage', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
	$m['JSONProxy'] = $p['___import___']('pyjamas.JSONService.JSONProxy', null, null, false);
	$m['HTTPRequest'] = $p['___import___']('pyjamas.HTTPRequest.HTTPRequest', null, null, false);
	$m['json'] = $p['___import___']('json', null);
	$m['re'] = $p['___import___']('re', null);
	$m['time'] = $p['___import___']('time', null);
	$m['RegexTextBox'] = $p['___import___']('regextextbox.RegexTextBox', null, null, false);
	$m['SEL_ROW_MSG'] = 'sel-row-msg';
	$m['DESEL_ROW_MSG'] = 'desel-row-msg';
	$m['CAL_DATE_MSG'] = 'cal-date-msg';
	$m['Data_Service'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'common';
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
	$m['Abstract_View'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'common';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['controller'] = null;
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
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Abstract_View', $p['tuple']($bases), $data);
	})();
	$m['Reports_Grid'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'common';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Grid']['__init__'](self);
			$m['Abstract_View']['__init__'](self);
			self['selected_row'] = 0;
			self['setStyleName']('table');
			self['controller'] = null;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('create_grid', function(rows, cols, headers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rows = arguments[1];
				cols = arguments[2];
				headers = arguments[3];
			}
			var $iter1_nextval,$iter1_type,header,i,html_header,$iter1_iter,$iter1_array,$iter1_idx;
			self['resize'](rows, cols);
			self['addTableListener'](self);
			$iter1_iter = $p['enumerate'](headers);
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
				i = $tupleassign1[0];
				header = $tupleassign1[1];
				html_header = '<h4>{0}</h4>'['format'](header);
				self['setHTML'](0, i, html_header);
			}
			return null;
		}
	, 1, [null,null,['self'],['rows'],['cols'],['headers']]);
		$cls_definition['create_grid'] = $method;
		$method = $pyjs__bind_method2('load_data', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			var el,$iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,$iter2_array;
			$iter2_iter = data;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				el = $iter2_nextval['$nextval'];
				self['add_row'](el);
			}
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['load_data'] = $method;
		$method = $pyjs__bind_method2('add_row', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			var $iter3_idx,i,$iter3_array,$add2,num_cols,$add1,$iter3_iter,$iter3_type,$iter3_nextval,row;
			num_cols = self['getColumnCount']();
			self['addRows'](self['getBodyElement'](), 1, num_cols);
			row = self['getRowCount']();
			$iter3_iter = $p['range'](0, num_cols);
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				i = $iter3_nextval['$nextval'];
				self['setText'](self['getRowCount'](), i, data['__getitem__'](i));
			}
			self['numRows'] = $p['__op_add']($add1=$p['getattr'](self, 'numRows'),$add2=1);
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['add_row'] = $method;
		$method = $pyjs__bind_method2('change_row', function(row, data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				data = arguments[2];
			}
			var i,$iter4_nextval,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter;
			$iter4_iter = $p['range'](0, self['getColumnCount']());
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				i = $iter4_nextval['$nextval'];
				self['setText'](row, i, data['__getitem__'](i));
			}
			return null;
		}
	, 1, [null,null,['self'],['row'],['data']]);
		$cls_definition['change_row'] = $method;
		$method = $pyjs__bind_method2('remove_row', function(row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}

			self['removeRow'](row);
			return null;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['remove_row'] = $method;
		$method = $pyjs__bind_method2('onCellClicked', function(sender, row, col) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				row = arguments[2];
				col = arguments[3];
			}

			self['select_row'](row);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['row'],['col']]);
		$cls_definition['onCellClicked'] = $method;
		$method = $pyjs__bind_method2('select_row', function(row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}

			self['style_row']($p['getattr'](self, 'selected_row'), false);
			self['style_row'](row, true);
			self['selected_row'] = row;
			if ($p['bool'](($p['getattr'](self, 'controller') !== null))) {
				if ($p['bool'](($p['cmp'](row, 0) == 1))) {
					self['controller']['process_msg']($m['SEL_ROW_MSG'], row);
				}
				else {
					self['controller']['process_msg']($m['DESEL_ROW_MSG']);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['select_row'] = $method;
		$method = $pyjs__bind_method2('style_row', function(row, selected) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				selected = arguments[2];
			}
			var $and1,$and2;
			if ($p['bool'](($p['bool']($and1=($p['cmp'](row, 0) == 1))?($p['cmp'](row, self['getRowCount']()) == -1):$and1))) {
				if ($p['bool'](selected)) {
					self['getRowFormatter']()['addStyleName'](row, 'user-SelectedRow');
				}
				else {
					self['getRowFormatter']()['removeStyleName'](row, 'user-SelectedRow');
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['row'],['selected']]);
		$cls_definition['style_row'] = $method;
		var $bases = new Array($m['Grid'],$m['Abstract_View']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Reports_Grid', $p['tuple']($bases), $data);
	})();
	$m['Report_Date_Field'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'common';
		$cls_definition['img_base'] = '';
		$cls_definition['icon_img'] = '/static/img/kalendar.png';
		$method = $pyjs__bind_method2('__init__', function(cal_ID) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cal_ID = arguments[1];
			}
			if (typeof cal_ID == 'undefined') cal_ID=arguments['callee']['__args__'][3][1];

			$pyjs_kwargs_call($m['DateField'], '__init__', null, null, [{'format':'%d/%m/%Y'}, self]);
			$m['Abstract_View']['__init__'](self);
			self['_blurListeners'] = $p['list']([]);
			self['_invalidListeners'] = $p['list']([]);
			self['_validListeners'] = $p['list']([]);
			self['_regex'] = null;
			self['cal_ID'] = cal_ID;
			self['getTextBox']()['onBrowserEvent'] = $p['getattr'](self, 'onBrowserEvent');
			self['valid'] = null;
			return null;
		}
	, 1, [null,null,['self'],['cal_ID', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setRegex', function(regex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				regex = arguments[1];
			}

			self['_regex'] = regex;
			self['_blurListeners']['append']($p['getattr'](self, 'validate'));
			return null;
		}
	, 1, [null,null,['self'],['regex']]);
		$cls_definition['setRegex'] = $method;
		$method = $pyjs__bind_method2('validate', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter5_nextval,_listener,$iter5_array,_listeners,$iter5_iter,$iter5_idx,$iter5_type;
			if ($p['bool'](($p['getattr'](self, '_regex') === null))) {
				return null;
			}
			if ($p['bool']($m['re']['match']($p['getattr'](self, '_regex'), self['getTextBox']()['getText']()))) {
				_listeners = $p['getattr'](self, '_validListeners');
				self['valid'] = true;
			}
			else {
				_listeners = $p['getattr'](self, '_invalidListeners');
				self['valid'] = false;
			}
			$iter5_iter = _listeners;
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				_listener = $iter5_nextval['$nextval'];
				_listener(self);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['validate'] = $method;
		$method = $pyjs__bind_method2('appendInvalidListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_invalidListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['appendInvalidListener'] = $method;
		$method = $pyjs__bind_method2('appendValidListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_validListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['appendValidListener'] = $method;
		$method = $pyjs__bind_method2('onBlur', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['validate']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onBlur'] = $method;
		$method = $pyjs__bind_method2('onDateSelected', function(yyyy, mm, dd) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				yyyy = arguments[1];
				mm = arguments[2];
				dd = arguments[3];
			}
			var d,secs;
			secs = $m['time']['mktime']($p['tuple']([$p['float_int'](yyyy), $p['float_int'](mm), $p['float_int'](dd), 0, 0, 0, 0, 0, (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))]));
			d = $m['time']['strftime']($p['getattr'](self, 'format'), $m['time']['localtime'](secs));
			self['tbox']['setFocus'](true);
			self['tbox']['setText'](d);
			self['tbox']['setFocus'](false);
			return null;
		}
	, 1, [null,null,['self'],['yyyy'],['mm'],['dd']]);
		$cls_definition['onDateSelected'] = $method;
		$method = $pyjs__bind_method2('onTodayClicked', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var today;
			today = $m['time']['strftime']($p['getattr'](self, 'format'));
			self['tbox']['setFocus'](true);
			self['tbox']['setText'](today);
			self['tbox']['setFocus'](false);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onTodayClicked'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var _listener,$iter6_idx,$iter6_type,$iter6_array,$iter6_iter,type,$iter6_nextval;
			$m['TextBox']['onBrowserEvent'](self, event);
			type = $m['DOM']['eventGetType'](event);
			if ($p['bool']($p['op_eq'](type, 'blur'))) {
				$iter6_iter = $p['getattr'](self, '_blurListeners');
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					_listener = $iter6_nextval['$nextval'];
					if ($p['bool']($p['hasattr'](_listener, 'onBlur'))) {
						_listener['onBlur'](self);
					}
					else {
						_listener(self);
						if ($p['bool'](($p['getattr'](self, 'controller') !== null))) {
							self['controller']['process_msg']($m['CAL_DATE_MSG'], $p['getattr'](self, 'cal_ID'));
						}
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		var $bases = new Array($m['DateField'],$m['Abstract_View']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Report_Date_Field', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end common */


/* end module: common */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.ScrollPanel.ScrollPanel', 'pyjamas.ui.ScrollPanel', 'pyjamas.ui.TextArea.TextArea', 'pyjamas.ui.TextArea', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.HTMLTable.HTMLTable', 'pyjamas.ui.HTMLTable', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.FormPanel.FormPanel', 'pyjamas.ui.FormPanel', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.Calendar.DateField', 'pyjamas.ui.Calendar', 'pyjamas.ui.Calendar.Calendar', 'pyjamas.ui.Calendar.CalendarPopup', 'pyjamas.ui.Event', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.HyperlinkImage.HyperlinkImage', 'pyjamas.ui.HyperlinkImage', 'pyjamas.Window', 'pyjamas.DOM', 'pyjamas.ui.HasAlignment', 'pyjamas.JSONService.JSONProxy', 'pyjamas.JSONService', 'pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest', 'json', 're', 'time', 'regextextbox.RegexTextBox', 'regextextbox']
*/
