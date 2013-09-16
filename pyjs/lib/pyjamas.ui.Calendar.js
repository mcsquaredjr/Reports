/* start module: pyjamas.ui.Calendar */
$pyjs['loaded_modules']['pyjamas.ui.Calendar'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.Calendar']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.Calendar'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.Calendar'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.Calendar>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Calendar';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['Calendar'] = $pyjs['loaded_modules']['pyjamas.ui.Calendar'];


	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui', null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui', null, false);
	$m['PopupPanel'] = $p['___import___']('pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui', null, false);
	$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', 'pyjamas.ui', null, false);
	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', 'pyjamas.ui', null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'pyjamas.ui', null, false);
	$m['Hyperlink'] = $p['___import___']('pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui', null, false);
	$m['HyperlinkImage'] = $p['___import___']('pyjamas.ui.HyperlinkImage.HyperlinkImage', 'pyjamas.ui', null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', 'pyjamas.ui', null, false);
	$m['FocusPanel'] = $p['___import___']('pyjamas.ui.FocusPanel.FocusPanel', 'pyjamas.ui', null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', 'pyjamas.ui', null, false);
	$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', 'pyjamas.ui', null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', 'pyjamas.ui', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['pygwt'] = $p['___import___']('pygwt', 'pyjamas.ui');
	$m['time'] = $p['___import___']('time', 'pyjamas.ui');
	$m['datetime'] = $p['___import___']('datetime.datetime', 'pyjamas.ui', null, false);
	$m['date'] = $p['___import___']('datetime.date', 'pyjamas.ui', null, false);
	$m['DateSelectedHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.Calendar';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['selectedDateListeners'] = $p['list']([]);
			self['selectedDObjListeners'] = $p['list']([]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addSelectedDateListener', function(listener, dobj) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
				dobj = arguments[2];
			}
			if (typeof dobj == 'undefined') dobj=arguments['callee']['__args__'][4][1];

			if ($p['bool'](dobj)) {
				self['selectedDObjListeners']['append'](listener);
			}
			else {
				self['selectedDateListeners']['append'](listener);
			}
			return null;
		}
	, 1, [null,null,['self'],['listener'],['dobj', false]]);
		$cls_definition['addSelectedDateListener'] = $method;
		$method = $pyjs__bind_method2('removeSelectedDateListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}
			var $pyjs_try_err;
			try {
				self['selectedDateListeners']['remove'](listener);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
					self['selectedDObjListeners']['remove'](listener);
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeSelectedDateListener'] = $method;
		$method = $pyjs__bind_method2('fireDateSelectedEvent', function(dateobj) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				dateobj = arguments[1];
			}
			var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$iter1_iter,listener,$iter2_idx,$iter1_array,$iter2_type,$iter2_array,$iter1_idx;
			$iter1_iter = $p['getattr'](self, 'selectedDateListeners');
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				listener = $iter1_nextval['$nextval'];
				$p['getattr'](listener, 'onDateSelected', listener)($p['getattr'](dateobj, 'year'), $p['getattr'](dateobj, 'month'), $p['getattr'](dateobj, 'day'));
			}
			$iter2_iter = $p['getattr'](self, 'selectedDObjListeners');
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				listener = $iter2_nextval['$nextval'];
				$p['getattr'](listener, 'onDateSelected', listener)(dateobj);
			}
			return null;
		}
	, 1, [null,null,['self'],['dateobj']]);
		$cls_definition['fireDateSelectedEvent'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DateSelectedHandler', $p['tuple']($bases), $data);
	})();
	$m['Calendar'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.Calendar';
		$cls_definition['monthsOfYear'] = $p['list'](['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
		$cls_definition['daysOfWeek'] = $p['list'](['S', 'M', 'T', 'W', 'T', 'F', 'S']);
		$cls_definition['today'] = 'Today';
		$cls_definition['tomorrow'] = 'Tomorrow';
		$cls_definition['yesterday'] = 'Yesterday';
		$cls_definition['cancel'] = 'Cancel';
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
			var yr,mth,day;
			$pyjs_kwargs_call($m['FocusPanel'], '__init__', null, kwargs, [{}, self]);
			$m['DateSelectedHandler']['__init__'](self);
			var $tupleassign1 = $p['__ass_unpack']($m['time']['strftime']('%Y-%m-%d')['$$split']('-'), 3, null);
			yr = $tupleassign1[0];
			mth = $tupleassign1[1];
			day = $tupleassign1[2];
			self['todayYear'] = $p['float_int'](yr);
			self['todayMonth'] = $p['float_int'](mth);
			self['todayDay'] = $p['float_int'](day);
			self['currentMonth'] = $p['getattr'](self, 'todayMonth');
			self['currentYear'] = $p['getattr'](self, 'todayYear');
			self['currentDay'] = $p['getattr'](self, 'todayDay');
			self['defaultGrid'] = null;
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setDate', function(_date) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_date = arguments[1];
			}

			self['currentMonth'] = $p['getattr'](_date, 'month');
			self['currentYear'] = $p['getattr'](_date, 'year');
			self['currentDay'] = $p['getattr'](_date, 'day');
			return null;
		}
	, 1, [null,null,['self'],['_date']]);
		$cls_definition['setDate'] = $method;
		$method = $pyjs__bind_method2('getMonthsOfYear', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'monthsOfYear');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMonthsOfYear'] = $method;
		$method = $pyjs__bind_method2('getDaysOfWeek', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'daysOfWeek');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDaysOfWeek'] = $method;
		$method = $pyjs__bind_method2('isLeapYear', function(year) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				year = arguments[1];
			}
			var $or1,$or2,$and1,$mod5,$mod4,$mod6,$mod1,$mod3,$mod2,$and2;
			if ($p['bool'](($p['bool']($or1=($p['bool']($and1=$p['op_eq']((typeof ($mod1=year)==typeof ($mod2=4) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2)), 0))?!$p['op_eq']((typeof ($mod3=year)==typeof ($mod4=100) && typeof $mod3=='number'?
				(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
				$p['op_mod']($mod3,$mod4)), 0):$and1))?$or1:$p['op_eq']((typeof ($mod5=year)==typeof ($mod6=400) && typeof $mod5=='number'?
				(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
				$p['op_mod']($mod5,$mod6)), 0)))) {
				return true;
			}
			else {
				return false;
			}
			return null;
		}
	, 1, [null,null,['self'],['year']]);
		$cls_definition['isLeapYear'] = $method;
		$method = $pyjs__bind_method2('getDaysInMonth', function(mth, year) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mth = arguments[1];
				year = arguments[2];
			}
			var $and3,$and4,days;
			days = 0;
			if ($p['bool']($p['list']([1, 3, 5, 7, 8, 10, 12])['__contains__'](mth))) {
				days = 31;
			}
			else if ($p['bool']($p['list']([4, 6, 9, 11])['__contains__'](mth))) {
				days = 30;
			}
			else if ($p['bool'](($p['bool']($and3=$p['op_eq'](mth, 2))?self['isLeapYear'](year):$and3))) {
				days = 29;
			}
			else {
				days = 28;
			}
			return days;
		}
	, 1, [null,null,['self'],['mth'],['year']]);
		$cls_definition['getDaysInMonth'] = $method;
		$method = $pyjs__bind_method2('setPosition', function(left, top) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				left = arguments[1];
				top = arguments[2];
			}
			var element;
			element = self['getElement']();
			$m['DOM']['setStyleAttribute'](element, 'left', $p['sprintf']('%dpx', left));
			$m['DOM']['setStyleAttribute'](element, 'top', $p['sprintf']('%dpx', top));
			return null;
		}
	, 1, [null,null,['self'],['left'],['top']]);
		$cls_definition['setPosition'] = $method;
		$method = $pyjs__bind_method2('show', function(left, top) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				left = arguments[1];
				top = arguments[2];
			}

			if ($p['bool'](($p['cmp'](left, 0) == -1))) {
				left = 0;
			}
			if ($p['bool'](($p['cmp'](top, 0) == -1))) {
				top = 0;
			}
			self['setPosition'](left, top);
			self['drawCurrent']();
			self['setVisible'](true);
			return null;
		}
	, 1, [null,null,['self'],['left'],['top']]);
		$cls_definition['show'] = $method;
		$method = $pyjs__bind_method2('drawCurrent', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var yr,mth,day;
			var $tupleassign2 = $p['__ass_unpack']($p['tuple']([$p['getattr'](self, 'currentYear'), $p['getattr'](self, 'currentMonth'), $p['getattr'](self, 'currentDay')]), 3, null);
			yr = $tupleassign2[0];
			mth = $tupleassign2[1];
			day = $tupleassign2[2];
			self['draw']($p['float_int'](mth), $p['float_int'](yr));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['drawCurrent'] = $method;
		$method = $pyjs__bind_method2('draw', function(month, year) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				month = arguments[1];
				year = arguments[2];
			}
			var hasChangeMonth,txt,$sub2,$sub1,tod,$or4,$or3,$and5,$and6,$and7,yy,g,mm,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8;
			tod = $m['time']['localtime']();
			mm = $p['getattr'](tod, 'tm_mon');
			yy = $p['getattr'](tod, 'tm_year');
			hasChangeMonth = false;
			if ($p['bool'](($p['bool']($or3=!$p['op_eq'](yy, $p['getattr'](self, 'todayYear')))?$or3:!$p['op_eq'](mm, $p['getattr'](self, 'todayMonth'))))) {
				hasChangeMonth = true;
				self['todayYear'] = yy;
				self['todayMonth'] = mm;
			}
			if ($p['bool'](($p['getattr'](self, 'defaultGrid') === null))) {
				self['drawFull'](month, year);
			}
			else {
				if ($p['bool'](($p['bool']($and5=!$p['bool'](hasChangeMonth))?($p['bool']($and6=$p['op_eq'](month, $p['getattr'](self, 'todayMonth')))?$p['op_eq'](year, $p['getattr'](self, 'todayYear')):$and6):$and5))) {
					self['middlePanel']['setWidget']($p['getattr'](self, 'defaultGrid'));
					self['currentMonth'] = $p['getattr'](self, 'todayMonth');
					self['currentYear'] = $p['getattr'](self, 'todayYear');
				}
				else {
					g = self['drawGrid'](month, year);
					if ($p['bool'](hasChangeMonth)) {
						self['defaultGrid'] = (typeof grid == "undefined"?$m['grid']:grid);
					}
				}
				txt = '<b>';
				txt = $p['__op_add']($add5=txt,$add6=$p['__op_add']($add3=$p['__op_add']($add1=self['getMonthsOfYear']()['__getitem__']($p['__op_sub']($sub1=month,$sub2=1)),$add2=' '),$add4=$p['str'](year)));
				txt = $p['__op_add']($add7=txt,$add8='</b>');
				self['titlePanel']['setWidget']($m['HTML'](txt));
				self['setVisible'](true);
			}
			return null;
		}
	, 1, [null,null,['self'],['month'],['year']]);
		$cls_definition['draw'] = $method;
		$method = $pyjs__bind_method2('drawFull', function(month, year) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				month = arguments[1];
				year = arguments[2];
			}
			var h2,h1,tvp,h4,h5,txt,yr,tp,$sub3,$sub4,$add14,$add15,$add16,$add10,$add11,$add12,$add13,mth,grid,$add9;
			self['vp'] = $m['VerticalPanel']();
			self['vp']['setSpacing'](2);
			self['vp']['addStyleName']('calendarbox calendar-module calendar');
			self['setWidget']($p['getattr'](self, 'vp'));
			self['setVisible'](false);
			mth = $p['float_int'](month);
			yr = $p['float_int'](year);
			tp = $m['HorizontalPanel']();
			tp['addStyleName']('calendar-top-panel');
			tp['setSpacing'](5);
			h1 = $m['Hyperlink']('<<');
			h1['addClickListener']($p['getattr'](self, 'onPreviousYear'));
			h2 = $m['Hyperlink']('<');
			h2['addClickListener']($p['getattr'](self, 'onPreviousMonth'));
			h4 = $m['Hyperlink']('>');
			h4['addClickListener']($p['getattr'](self, 'onNextMonth'));
			h5 = $m['Hyperlink']('>>');
			h5['addClickListener']($p['getattr'](self, 'onNextYear'));
			tp['add'](h1);
			tp['add'](h2);
			txt = '<b>';
			txt = $p['__op_add']($add13=txt,$add14=$p['__op_add']($add11=$p['__op_add']($add9=self['getMonthsOfYear']()['__getitem__']($p['__op_sub']($sub3=mth,$sub4=1)),$add10=' '),$add12=$p['str'](yr)));
			txt = $p['__op_add']($add15=txt,$add16='</b>');
			self['titlePanel'] = $m['SimplePanel']();
			self['titlePanel']['setWidget']($m['HTML'](txt));
			self['titlePanel']['setStyleName']('calendar-center');
			tp['add']($p['getattr'](self, 'titlePanel'));
			tp['add'](h4);
			tp['add'](h5);
			tvp = $m['VerticalPanel']();
			tvp['setSpacing'](10);
			tvp['add'](tp);
			self['vp']['add'](tvp);
			self['middlePanel'] = $m['SimplePanel']();
			grid = self['drawGrid'](mth, yr);
			self['middlePanel']['setWidget'](grid);
			self['vp']['add']($p['getattr'](self, 'middlePanel'));
			self['defaultGrid'] = grid;
			self['_gridShortcutsLinks']();
			self['_gridCancelLink']();
			self['setVisible'](true);
			return null;
		}
	, 1, [null,null,['self'],['month'],['year']]);
		$cls_definition['drawFull'] = $method;
		$method = $pyjs__bind_method2('_gridShortcutsLinks', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var bh1,bh2,b,bh3;
			bh1 = $m['Hyperlink']($p['getattr'](self, 'yesterday'));
			bh1['addClickListener']($p['getattr'](self, 'onYesterday'));
			bh2 = $m['Hyperlink']($p['getattr'](self, 'today'));
			bh2['addClickListener']($p['getattr'](self, 'onToday'));
			bh3 = $m['Hyperlink']($p['getattr'](self, 'tomorrow'));
			bh3['addClickListener']($p['getattr'](self, 'onTomorrow'));
			b = $m['HorizontalPanel']();
			b['add'](bh1);
			b['add'](bh2);
			b['add'](bh3);
			b['addStyleName']('calendar-shortcuts');
			self['vp']['add'](b);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_gridShortcutsLinks'] = $method;
		$method = $pyjs__bind_method2('_gridCancelLink', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var bh4,b2;
			bh4 = $m['Hyperlink']($p['getattr'](self, 'cancel'));
			bh4['addClickListener']($p['getattr'](self, 'onCancel'));
			b2 = $m['SimplePanel']();
			b2['add'](bh4);
			b2['addStyleName']('calendar-cancel');
			self['vp']['add'](b2);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_gridCancelLink'] = $method;
		$method = $pyjs__bind_method2('drawGrid', function(month, year) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				month = arguments[1];
				year = arguments[2];
			}
			var $iter3_array,pos,$add35,$mod7,daysInMonth,slots,$add26,$mod9,startPos,row,$add29,$add28,rows,struct,$add21,$add20,$add22,$add25,$add24,$add27,$mod8,$iter3_iter,$sub6,$sub5,$and8,$and9,$mod11,$mod10,$mod12,$iter3_idx,$and12,day,$and10,$add17,grid,$iter3_type,$div2,$div1,$add18,$add19,$iter3_nextval,i,$add33,$add30,$add31,$add36,$add34,col,$add32,secs,$and11,$add23;
			daysInMonth = self['getDaysInMonth'](month, year);
			secs = $m['time']['mktime']($p['tuple']([year, month, 1, 0, 0, 0, 0, 0, (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))]));
			struct = $m['time']['localtime'](secs);
			startPos = (typeof ($mod7=$p['__op_add']($add17=$p['getattr'](struct, 'tm_wday'),$add18=1))==typeof ($mod8=7) && typeof $mod7=='number'?
				(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
				$p['op_mod']($mod7,$mod8));
			slots = $p['__op_sub']($sub5=$p['__op_add']($add19=startPos,$add20=daysInMonth),$sub6=1);
			rows = $p['__op_add']($add21=$p['float_int']((typeof ($div1=slots)==typeof ($div2=7) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2))),$add22=1);
			grid = $m['Grid']($p['__op_add']($add23=rows,$add24=1), 7);
			grid['setWidth']('100%');
			grid['addTableListener'](self);
			self['middlePanel']['setWidget'](grid);
			$iter3_iter = $p['range'](7);
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				i = $iter3_nextval['$nextval'];
				grid['setText'](0, i, self['getDaysOfWeek']()['__getitem__'](i));
				grid['cellFormatter']['addStyleName'](0, i, 'calendar-header');
			}
			day = 0;
			pos = 0;
			while ($p['bool'](($p['cmp'](pos, startPos) == -1))) {
				grid['setText'](1, pos, ' ');
				grid['cellFormatter']['setStyleAttr'](1, pos, 'background', '#f3f3f3');
				grid['cellFormatter']['addStyleName'](1, pos, 'calendar-blank-cell');
				pos = $p['__op_add']($add25=pos,$add26=1);
			}
			row = 1;
			day = 1;
			col = startPos;
			while ($p['bool'](($p['cmp'](day, daysInMonth) < 1))) {
				if ($p['bool'](($p['bool']($and8=$p['op_eq']((typeof ($mod9=pos)==typeof ($mod10=7) && typeof $mod9=='number'?
					(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
					$p['op_mod']($mod9,$mod10)), 0))?!$p['op_eq'](day, 1):$and8))) {
					row = $p['__op_add']($add27=row,$add28=1);
				}
				col = (typeof ($mod11=pos)==typeof ($mod12=7) && typeof $mod11=='number'?
					(($mod11=$mod11%$mod12)<0&&$mod12>0?$mod11+$mod12:$mod11):
					$p['op_mod']($mod11,$mod12));
				grid['setText'](row, col, $p['str'](day));
				if ($p['bool'](($p['bool']($and10=$p['op_eq']($p['getattr'](self, 'currentYear'), $p['getattr'](self, 'todayYear')))?($p['bool']($and11=$p['op_eq']($p['getattr'](self, 'currentMonth'), $p['getattr'](self, 'todayMonth')))?$p['op_eq'](day, $p['getattr'](self, 'todayDay')):$and11):$and10))) {
					grid['cellFormatter']['addStyleName'](row, col, 'calendar-cell-today');
				}
				else {
					grid['cellFormatter']['addStyleName'](row, col, 'calendar-day-cell');
				}
				day = $p['__op_add']($add29=day,$add30=1);
				pos = $p['__op_add']($add31=pos,$add32=1);
			}
			col = $p['__op_add']($add33=col,$add34=1);
			while ($p['bool'](($p['cmp'](col, 7) == -1))) {
				grid['setText'](row, col, ' ');
				grid['cellFormatter']['setStyleAttr'](row, col, 'background', '#f3f3f3');
				grid['cellFormatter']['addStyleName'](row, col, 'calendar-blank-cell');
				col = $p['__op_add']($add35=col,$add36=1);
			}
			return grid;
		}
	, 1, [null,null,['self'],['month'],['year']]);
		$cls_definition['drawGrid'] = $method;
		$method = $pyjs__bind_method2('onCellClicked', function(grid, row, col) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				grid = arguments[1];
				row = arguments[2];
				col = arguments[3];
			}
			var selectedDay,e,text,$pyjs_try_err;
			if ($p['bool']($p['op_eq'](row, 0))) {
				return null;
			}
			text = grid['getText'](row, col)['strip']();
			if ($p['bool']($p['op_eq'](text, ''))) {
				return null;
			}
			try {
				selectedDay = $p['float_int'](text);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
					e = $pyjs_try_err;
					return null;
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			self['fireDateSelectedEvent']($m['date']($p['getattr'](self, 'currentYear'), $p['getattr'](self, 'currentMonth'), selectedDay));
			self['setVisible'](false);
			return null;
		}
	, 1, [null,null,['self'],['grid'],['row'],['col']]);
		$cls_definition['onCellClicked'] = $method;
		$method = $pyjs__bind_method2('onPreviousYear', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['drawPreviousYear']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onPreviousYear'] = $method;
		$method = $pyjs__bind_method2('onPreviousMonth', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['drawPreviousMonth']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onPreviousMonth'] = $method;
		$method = $pyjs__bind_method2('onNextMonth', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['drawNextMonth']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onNextMonth'] = $method;
		$method = $pyjs__bind_method2('onNextYear', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['drawNextYear']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onNextYear'] = $method;
		$method = $pyjs__bind_method2('onDate', function(event, yy, mm, dd) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
				yy = arguments[2];
				mm = arguments[3];
				dd = arguments[4];
			}

			self['fireDateSelectedEvent']($m['date'](yy, mm, dd));
			self['setVisible'](false);
			return null;
		}
	, 1, [null,null,['self'],['event'],['yy'],['mm'],['dd']]);
		$cls_definition['onDate'] = $method;
		$method = $pyjs__bind_method2('onYesterday', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var mm,yesterday,$mul2,yy,$sub8,dd,$sub7,$mul1;
			yesterday = $m['time']['localtime']($p['__op_sub']($sub7=$m['time']['time'](),$sub8=(typeof ($mul1=3600)==typeof ($mul2=24) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2))));
			mm = $p['getattr'](yesterday, 'tm_mon');
			dd = $p['getattr'](yesterday, 'tm_mday');
			yy = $p['getattr'](yesterday, 'tm_year');
			self['onDate'](event, yy, mm, dd);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onYesterday'] = $method;
		$method = $pyjs__bind_method2('onToday', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var mm,yy,dd,tod;
			tod = $m['time']['localtime']();
			mm = $p['getattr'](tod, 'tm_mon');
			dd = $p['getattr'](tod, 'tm_mday');
			yy = $p['getattr'](tod, 'tm_year');
			self['onDate'](event, yy, mm, dd);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onToday'] = $method;
		$method = $pyjs__bind_method2('onTomorrow', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $add38,mm,$add37,yy,dd,tom,$mul4,$mul3;
			tom = $m['time']['localtime']($p['__op_add']($add37=$m['time']['time'](),$add38=(typeof ($mul3=3600)==typeof ($mul4=24) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4))));
			mm = $p['getattr'](tom, 'tm_mon');
			dd = $p['getattr'](tom, 'tm_mday');
			yy = $p['getattr'](tom, 'tm_year');
			self['onDate'](event, yy, mm, dd);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onTomorrow'] = $method;
		$method = $pyjs__bind_method2('onCancel', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['setVisible'](false);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onCancel'] = $method;
		$method = $pyjs__bind_method2('drawDate', function(month, year) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				month = arguments[1];
				year = arguments[2];
			}

			self['currentMonth'] = month;
			self['currentYear'] = year;
			self['draw']($p['getattr'](self, 'currentMonth'), $p['getattr'](self, 'currentYear'));
			return null;
		}
	, 1, [null,null,['self'],['month'],['year']]);
		$cls_definition['drawDate'] = $method;
		$method = $pyjs__bind_method2('drawPreviousMonth', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub11,$sub12,$sub10,$sub9;
			if ($p['bool']($p['op_eq']($p['float_int']($p['getattr'](self, 'currentMonth')), 1))) {
				self['currentMonth'] = 12;
				self['currentYear'] = $p['__op_sub']($sub9=$p['float_int']($p['getattr'](self, 'currentYear')),$sub10=1);
			}
			else {
				self['currentMonth'] = $p['__op_sub']($sub11=$p['float_int']($p['getattr'](self, 'currentMonth')),$sub12=1);
			}
			self['draw']($p['getattr'](self, 'currentMonth'), $p['getattr'](self, 'currentYear'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['drawPreviousMonth'] = $method;
		$method = $pyjs__bind_method2('drawNextMonth', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add39,$add42,$add41,$add40;
			if ($p['bool']($p['op_eq']($p['float_int']($p['getattr'](self, 'currentMonth')), 12))) {
				self['currentMonth'] = 1;
				self['currentYear'] = $p['__op_add']($add39=$p['float_int']($p['getattr'](self, 'currentYear')),$add40=1);
			}
			else {
				self['currentMonth'] = $p['__op_add']($add41=$p['float_int']($p['getattr'](self, 'currentMonth')),$add42=1);
			}
			self['draw']($p['getattr'](self, 'currentMonth'), $p['getattr'](self, 'currentYear'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['drawNextMonth'] = $method;
		$method = $pyjs__bind_method2('drawPreviousYear', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub13,$sub14;
			self['currentYear'] = $p['__op_sub']($sub13=$p['float_int']($p['getattr'](self, 'currentYear')),$sub14=1);
			self['draw']($p['getattr'](self, 'currentMonth'), $p['getattr'](self, 'currentYear'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['drawPreviousYear'] = $method;
		$method = $pyjs__bind_method2('drawNextYear', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add44,$add43;
			self['currentYear'] = $p['__op_add']($add43=$p['float_int']($p['getattr'](self, 'currentYear')),$add44=1);
			self['draw']($p['getattr'](self, 'currentMonth'), $p['getattr'](self, 'currentYear'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['drawNextYear'] = $method;
		var $bases = new Array($m['FocusPanel'],$m['DateSelectedHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Calendar', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.Calendar', 'Calendar', $m['Calendar']);
	$m['DateField'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.Calendar';
		$cls_definition['img_base'] = null;
		$cls_definition['icon_img'] = null;
		$cls_definition['icon_style'] = 'calendar-img';
		$cls_definition['today_text'] = 'Today';
		$cls_definition['today_style'] = 'calendar-today-link';
		$method = $pyjs__bind_method2('__init__', function(format) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				format = arguments[1];
			}
			if (typeof format == 'undefined') format=arguments['callee']['__args__'][3][1];
			var $add46,vp,$add45,hp;
			$m['DateSelectedHandler']['__init__'](self);
			if ($p['bool'](($p['getattr'](self, 'img_base') === null))) {
				self['img_base'] = $m['pygwt']['getImageBaseURL'](true);
			}
			if ($p['bool'](($p['getattr'](self, 'icon_img') === null))) {
				self['icon_img'] = $p['__op_add']($add45=$p['getattr'](self, 'img_base'),$add46='icon_calendar.gif');
			}
			self['format'] = format;
			self['tbox'] = $m['TextBox']();
			self['tbox']['setVisibleLength'](10);
			if ($p['bool'](((($p['cmp'](format['find']('-'), 0))|1) == 1))) {
				self['sep'] = '-';
			}
			else if ($p['bool'](((($p['cmp'](format['find']('/'), 0))|1) == 1))) {
				self['sep'] = '/';
			}
			else if ($p['bool'](((($p['cmp'](format['find']('.'), 0))|1) == 1))) {
				self['sep'] = '.';
			}
			else {
				self['sep'] = '';
			}
			self['calendar'] = $m['Calendar']();
			self['img'] = $m['Image']($p['getattr'](self, 'icon_img'));
			self['img']['addStyleName']($p['getattr'](self, 'icon_style'));
			self['calendarLink'] = $m['HyperlinkImage']($p['getattr'](self, 'img'));
			self['todayLink'] = $m['Hyperlink']($p['getattr'](self, 'today_text'));
			self['todayLink']['addStyleName']($p['getattr'](self, 'today_style'));
			hp = $m['HorizontalPanel']();
			hp['setSpacing'](2);
			vp = $m['VerticalPanel']();
			hp['add']($p['getattr'](self, 'tbox'));
			vp['add']($p['getattr'](self, 'calendarLink'));
			vp['add']($p['getattr'](self, 'todayLink'));
			hp['add'](vp);
			$m['Composite']['__init__'](self);
			self['initWidget'](hp);
			self['tbox']['addFocusListener'](self);
			self['calendar']['addSelectedDateListener']($p['getattr'](self, 'onDateSelected'));
			self['todayLink']['addClickListener']($p['getattr'](self, 'onTodayClicked'));
			self['calendarLink']['addClickListener']($p['getattr'](self, 'onShowCalendar'));
			self['tbox']['addChangeListener']($p['getattr'](self, 'onFieldChanged'));
			self['tbox']['addInputListener']($p['getattr'](self, 'onFieldChanged'));
			self['_last_date'] = null;
			return null;
		}
	, 1, [null,null,['self'],['format', '%d-%m-%Y']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('emitSelectedDate', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var _d;
			_d = self['getDate']();
			if ($p['bool']($p['op_eq'](_d, $p['getattr'](self, '_last_date')))) {
				return null;
			}
			self['_last_date'] = _d;
			self['fireDateSelectedEvent'](_d);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['emitSelectedDate'] = $method;
		$method = $pyjs__bind_method2('onFieldChanged', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['emitSelectedDate']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onFieldChanged'] = $method;
		$method = $pyjs__bind_method2('getTextBox', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'tbox');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTextBox'] = $method;
		$method = $pyjs__bind_method2('getCalendar', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'calendar');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCalendar'] = $method;
		$method = $pyjs__bind_method2('getDate', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err,_sdate;
			_sdate = self['tbox']['getText']();
			try {
				return $m['datetime']['strptime'](_sdate, $p['getattr'](self, 'format'))['date']();
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
					return null;
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDate'] = $method;
		$method = $pyjs__bind_method2('setID', function(id) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				id = arguments[1];
			}

			self['tbox']['setID'](id);
			return null;
		}
	, 1, [null,null,['self'],['id']]);
		$cls_definition['setID'] = $method;
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
			secs = $m['time']['mktime']($p['tuple']([$p['float_int'](yyyy), $p['float_int'](mm), $p['float_int'](dd), 0, 0, 0, 0, 0, (typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))]));
			d = $m['time']['strftime']($p['getattr'](self, 'format'), $m['time']['localtime'](secs));
			self['tbox']['setText'](d);
			self['emitSelectedDate']();
			return null;
		}
	, 1, [null,null,['self'],['yyyy'],['mm'],['dd']]);
		$cls_definition['onDateSelected'] = $method;
		$method = $pyjs__bind_method2('onLostFocus', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $add50,$add51,$add52,$add53,$add54,$add49,$add48,$add47,text,$and13,$and14,txt;
			text = self['tbox']['getText']()['strip']();
			if ($p['bool'](($p['bool']($and13=text)?$p['op_eq']($p['len'](text), 8):$and13))) {
				txt = $p['__op_add']($add53=$p['__op_add']($add51=$p['__op_add']($add49=$p['__op_add']($add47=$p['__getslice'](text, 0, 2),$add48=$p['getattr'](self, 'sep')),$add50=$p['__getslice'](text, 2, 4)),$add52=$p['getattr'](self, 'sep')),$add54=$p['__getslice'](text, 4, 8));
				self['tbox']['setText'](txt);
			}
			self['emitSelectedDate']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onLostFocus'] = $method;
		$method = $pyjs__bind_method2('onFocus', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onFocus'] = $method;
		$method = $pyjs__bind_method2('onTodayClicked', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var today;
			today = $m['time']['strftime']($p['getattr'](self, 'format'));
			self['tbox']['setText'](today);
			self['emitSelectedDate']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onTodayClicked'] = $method;
		$method = $pyjs__bind_method2('onShowCalendar', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var txt,$add56,$add57,$add58,p,$pyjs_try_err,y,x,_d,$add55;
			txt = self['tbox']['getText']()['strip']();
			try {
				if ($p['bool'](txt)) {
					_d = $m['datetime']['strptime'](txt, $p['getattr'](self, 'format'))['date']();
					self['calendar']['setDate'](_d);
				}
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			p = (typeof CalendarPopup == "undefined"?$m['CalendarPopup']:CalendarPopup)($p['getattr'](self, 'calendar'));
			x = $p['__op_add']($add55=self['tbox']['getAbsoluteLeft'](),$add56=10);
			y = $p['__op_add']($add57=self['tbox']['getAbsoluteTop'](),$add58=10);
			p['setPopupPosition'](x, y);
			p['show']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onShowCalendar'] = $method;
		var $bases = new Array($m['Composite'],$m['DateSelectedHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DateField', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.Calendar', 'DateField', $m['DateField']);
	$m['CalendarPopup'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.Calendar';
		$method = $pyjs__bind_method2('__init__', function(c) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				c = arguments[1];
			}
			var p;
			$m['PopupPanel']['__init__'](self, true);
			p = $m['SimplePanel']();
			p['add'](c);
			c['show'](10, 10);
			p['setWidth']('100%');
			self['setWidget'](p);
			return null;
		}
	, 1, [null,null,['self'],['c']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['PopupPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('CalendarPopup', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.Calendar', 'CalendarPopup', $m['CalendarPopup']);
	return this;
}; /* end pyjamas.ui.Calendar */


/* end module: pyjamas.ui.Calendar */


/*
PYJS_DEPS: ['pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.SimplePanel', 'pyjamas.Factory', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui.PopupPanel', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui.Composite', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui.Hyperlink', 'pyjamas.ui.HyperlinkImage.HyperlinkImage', 'pyjamas.ui.HyperlinkImage', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.FocusPanel.FocusPanel', 'pyjamas.ui.FocusPanel', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.HasAlignment', 'pyjamas.DOM', 'pygwt', 'time', 'datetime.datetime', 'datetime', 'datetime.date']
*/
