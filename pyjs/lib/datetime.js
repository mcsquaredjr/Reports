/* start module: datetime */
$pyjs['loaded_modules']['datetime'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['datetime']['__was_initialized__']) return $pyjs['loaded_modules']['datetime'];
	var $m = $pyjs['loaded_modules']['datetime'];
	$m['__repr__'] = function() { return '<module: datetime>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'datetime';
	$m['__name__'] = __mod_name__;


	$m['__c__days'] = $p['___import___']('time.__c__days', null, null, false);
	$m['__c__months'] = $p['___import___']('time.__c__months', null, null, false);
	$m['strftime'] = $p['___import___']('time.strftime', null, null, false);
	$m['localtime'] = $p['___import___']('time.localtime', null, null, false);
	$m['gmtime'] = $p['___import___']('time.gmtime', null, null, false);
	$m['_strptime'] = $p['___import___']('time._strptime', null, null, false);
	$m['MINYEAR'] = 1;
	$m['MAXYEAR'] = 1000000;
	$m['__Jan_01_0001'] = (new Date((new Date('Jan 1 1971'))['getTime']() - 62167132800000))['getTime']();
	$m['date'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'datetime';
		$method = $pyjs__bind_method2('__init__', function(year, month, day, d) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				year = arguments[1];
				month = arguments[2];
				day = arguments[3];
				d = arguments[4];
			}
			if (typeof d == 'undefined') d=arguments['callee']['__args__'][6][1];
			var $add2,$add1;
			if ($p['bool']((d === null))) {
				d = new Date(year, month - 1, day, 0, 0, 0, 0);
			}
			self['_d'] = d;
			self['year'] = d['getFullYear']();
			self['month'] = $p['__op_add']($add1=d['getMonth'](),$add2=1.0);
			self['day'] = d['getDate']();
			return null;
		}
	, 1, [null,null,['self'],['year'],['month'],['day'],['d', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('today', function() {
    var self = this['prototype'];

			return $pyjs_kwargs_call(null, $m['date'], null, null, [{'d':new Date()}]);
		}
	, 2, [null,null,['self']]);
		$cls_definition['today'] = $method;
		$method = $pyjs__bind_method2('fromtimestamp', function(timestamp) {
    var self = this['prototype'];
			var d,$mul1,$mul2;
			d = new Date();
			d['setTime']((typeof ($mul1=timestamp)==typeof ($mul2=1000.0) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)));
			return $pyjs_kwargs_call(null, $m['date'], null, null, [{'d':d}, 0, 0, 0]);
		}
	, 2, [null,null,['self'],['timestamp']]);
		$cls_definition['fromtimestamp'] = $method;
		$method = $pyjs__bind_method2('fromordinal', function(ordinal) {
    var self = this['prototype'];
			var d,$add3,t,$add4,$sub2,$sub1,$mul4,$mul3;
			t = $p['__op_add']($add3=$m['__Jan_01_0001'],$add4=(typeof ($mul3=$p['__op_sub']($sub1=ordinal,$sub2=1))==typeof ($mul4=86400000.0) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)));
			d = new Date(t);
			return $pyjs_kwargs_call(null, $m['date'], null, null, [{'d':d}, 0, 0, 0]);
		}
	, 2, [null,null,['self'],['ordinal']]);
		$cls_definition['fromordinal'] = $method;
		$method = $pyjs__bind_method2('ctime', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['sprintf']('%s %s %2d %02d:%02d:%02d %04d', $p['tuple']([$p['__getslice']($m['__c__days']['__getitem__'](self['_d']['getDay']()), 0, 3), $p['__getslice']($m['__c__months']['__getitem__'](self['_d']['getMonth']()), 0, 3), self['_d']['getDate'](), self['_d']['getHours'](), self['_d']['getMinutes'](), self['_d']['getSeconds'](), self['_d']['getFullYear']()]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['ctime'] = $method;
		$method = $pyjs__bind_method2('isocalendar', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var isoweeknr,isoyear,isoweekday,$assign1,_d;
			$assign1 = null;
			isoyear = $assign1;
			isoweeknr = $assign1;
			isoweekday = $assign1;
			_d = $p['getattr'](self, '_d');

            var gregdaynumber = function(year, month, day) {
                var y = year;
                var m = month;
                if (month < 3) {
                    y--;
                    m += 12;
                }
                return Math['floor'](365.25 * y) - Math['floor'](y / 100) + Math['floor'](y / 400) + Math['floor'](30.6 * (m + 1)) + day - 62;
            };

            var year = _d['getFullYear']();
            var month = _d['getMonth']();
            var day = _d['getDate']();
            var wday = _d['getDay']();

            isoweekday = ((wday + 6) % 7) + 1;
            isoyear = year;

            var d0 = gregdaynumber(year, 1, 0);
            var weekday0 = ((d0 + 4) % 7) + 1;

            var d = gregdaynumber(year, month + 1, day);
            isoweeknr = Math['floor']((d - d0 + weekday0 + 6) / 7) - Math['floor']((weekday0 + 3) / 7);

            if ((month == 11) && ((day - isoweekday) > 27)) {
                isoweeknr = 1;
                isoyear = isoyear + 1;
            }

            if ((month == 0) && ((isoweekday - day) > 3)) {
                d0 = gregdaynumber(year - 1, 1, 0);
                weekday0 = ((d0 + 4) % 7) + 1;
                isoweeknr = Math['floor']((d - d0 + weekday0 + 6) / 7) - Math['floor']((weekday0 + 3) / 7);
                isoyear--;
            }
        
			return $p['tuple']([isoyear, isoweeknr, isoweekday]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['isocalendar'] = $method;
		$method = $pyjs__bind_method2('isoformat', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['sprintf']('%04d-%02d-%02d', $p['tuple']([$p['getattr'](self, 'year'), $p['getattr'](self, 'month'), $p['getattr'](self, 'day')]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['isoformat'] = $method;
		$method = $pyjs__bind_method2('isoweekday', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add5,$mod1,$add7,$mod2,$add6,$add8;
			return $p['__op_add']($add7=(typeof ($mod1=$p['__op_add']($add5=self['_d']['getDay'](),$add6=6))==typeof ($mod2=7) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2)),$add8=1);
		}
	, 1, [null,null,['self']]);
		$cls_definition['isoweekday'] = $method;
		$method = $pyjs__bind_method2('$$replace', function(year, month, day) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				year = arguments[1];
				month = arguments[2];
				day = arguments[3];
			}
			if (typeof year == 'undefined') year=arguments['callee']['__args__'][3][1];
			if (typeof month == 'undefined') month=arguments['callee']['__args__'][4][1];
			if (typeof day == 'undefined') day=arguments['callee']['__args__'][5][1];

			if ($p['bool']((year === null))) {
				year = $p['getattr'](self, 'year');
			}
			if ($p['bool']((month === null))) {
				month = $p['getattr'](self, 'month');
			}
			if ($p['bool']((day === null))) {
				day = $p['getattr'](self, 'day');
			}
			return $m['date'](year, month, day);
		}
	, 1, [null,null,['self'],['year', null],['month', null],['day', null]]);
		$cls_definition['$$replace'] = $method;
		$method = $pyjs__bind_method2('strftime', function(format) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				format = arguments[1];
			}

			return $m['strftime'](format, self['timetuple']());
		}
	, 1, [null,null,['self'],['format']]);
		$cls_definition['strftime'] = $method;
		$method = $pyjs__bind_method2('timetuple', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $div2,tm,$div1,$assign2;
			tm = $m['localtime']($p['float_int']((typeof ($div1=self['_d']['getTime']())==typeof ($div2=1000.0) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2))));
			$assign2 = 0;
			tm['tm_hour'] = $assign2;
			tm['tm_min'] = $assign2;
			tm['tm_sec'] = $assign2;
			return tm;
		}
	, 1, [null,null,['self']]);
		$cls_definition['timetuple'] = $method;
		$method = $pyjs__bind_method2('toordinal', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add10,$sub3,$div3,$add9,$div4,$sub4;
			return $p['__op_add']($add9=1,$add10=$p['float_int']((typeof ($div3=$p['__op_sub']($sub3=self['_d']['getTime'](),$sub4=$m['__Jan_01_0001']))==typeof ($div4=86400000.0) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4))));
		}
	, 1, [null,null,['self']]);
		$cls_definition['toordinal'] = $method;
		$method = $pyjs__bind_method2('weekday', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $mod4,$mod3,$add11,$add12;
			return (typeof ($mod3=$p['__op_add']($add11=self['_d']['getDay'](),$add12=6))==typeof ($mod4=7) && typeof $mod3=='number'?
				(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
				$p['op_mod']($mod3,$mod4));
		}
	, 1, [null,null,['self']]);
		$cls_definition['weekday'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['isoformat']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var a,b,$or1,$or2;
			if ($p['bool'](($p['bool']($or1=$p['isinstance'](other, $m['date']))?$or1:$p['isinstance'](other, (typeof datetime == "undefined"?$m['datetime']:datetime))))) {
				a = self['_d']['getTime']();
				b = other['_d']['getTime']();
				if ($p['bool'](($p['cmp'](a, b) == -1))) {
					return (typeof ($usub1=1)=='number'?
						-$usub1:
						$p['op_usub']($usub1));
				}
				else if ($p['bool']($p['op_eq'](a, b))) {
					return 0;
				}
			}
			else {
				throw ($p['TypeError']('expected date or datetime object'));
			}
			return 1;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__add__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $add14,$add13;
			if ($p['bool']($p['isinstance'](other, (typeof timedelta == "undefined"?$m['timedelta']:timedelta)))) {
				return $m['date']($p['getattr'](self, 'year'), $p['getattr'](self, 'month'), $p['__op_add']($add13=$p['getattr'](self, 'day'),$add14=$p['getattr'](other, 'days')));
			}
			else {
				throw ($p['TypeError']('expected timedelta object'));
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__add__'] = $method;
		$method = $pyjs__bind_method2('__sub__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $mod8,$or4,$or3,$sub8,$sub7,$mod7,$div7,$mod5,$div8,$mod6,diff,$div6,$sub6,$sub5,$div5;
			if ($p['bool'](($p['bool']($or3=$p['isinstance'](other, $m['date']))?$or3:$p['isinstance'](other, (typeof datetime == "undefined"?$m['datetime']:datetime))))) {
				diff = $p['__op_sub']($sub5=self['_d']['getTime'](),$sub6=other['_d']['getTime']());
				return $pyjs_kwargs_call(null, (typeof timedelta == "undefined"?$m['timedelta']:timedelta), null, null, [{'milliseconds':(typeof ($mod7=diff)==typeof ($mod8=86400000) && typeof $mod7=='number'?
					(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
					$p['op_mod']($mod7,$mod8))}, $p['float_int']((typeof ($div5=diff)==typeof ($div6=86400000.0) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6))), (typeof ($mod5=$p['float_int']((typeof ($div7=diff)==typeof ($div8=1000.0) && typeof $div7=='number' && $div8 !== 0?
					$div7/$div8:
					$p['op_div']($div7,$div8))))==typeof ($mod6=86400) && typeof $mod5=='number'?
					(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
					$p['op_mod']($mod5,$mod6))]);
			}
			else if ($p['bool']($p['isinstance'](other, (typeof timedelta == "undefined"?$m['timedelta']:timedelta)))) {
				return $m['date']($p['getattr'](self, 'year'), $p['getattr'](self, 'month'), $p['__op_sub']($sub7=$p['getattr'](self, 'day'),$sub8=$p['getattr'](other, 'days')));
			}
			else {
				throw ($p['TypeError']('expected date or datetime object'));
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__sub__'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('date', $p['tuple']($bases), $data);
	})();
	$m['time'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'datetime';
		$method = $pyjs__bind_method2('__init__', function(hour, minute, second, microsecond, tzinfo, d) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				hour = arguments[1];
				minute = arguments[2];
				second = arguments[3];
				microsecond = arguments[4];
				tzinfo = arguments[5];
				d = arguments[6];
			}
			if (typeof minute == 'undefined') minute=arguments['callee']['__args__'][4][1];
			if (typeof second == 'undefined') second=arguments['callee']['__args__'][5][1];
			if (typeof microsecond == 'undefined') microsecond=arguments['callee']['__args__'][6][1];
			if (typeof tzinfo == 'undefined') tzinfo=arguments['callee']['__args__'][7][1];
			if (typeof d == 'undefined') d=arguments['callee']['__args__'][8][1];
			var $mul6,$mul5;
			if ($p['bool'](!$p['op_eq'](tzinfo, null))) {
				throw ($p['NotImplementedError']('tzinfo'));
			}
			if ($p['bool']((d === null))) {
				d = new Date(1970, 1, 1, hour, minute, second, 0.5 + microsecond / 1000.0);
			}
			self['_d'] = d;
			self['hour'] = d['getHours']();
			self['minute'] = d['getMinutes']();
			self['second'] = d['getSeconds']();
			self['microsecond'] = (typeof ($mul5=d['getMilliseconds']())==typeof ($mul6=1000.0) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6));
			self['tzinfo'] = null;
			return null;
		}
	, 1, [null,null,['self'],['hour'],['minute', 0],['second', 0],['microsecond', 0],['tzinfo', null],['d', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('dst', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($p['NotImplementedError']('dst'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['dst'] = $method;
		$method = $pyjs__bind_method2('isoformat', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add16,$add15,t;
			t = $p['sprintf']('%02d:%02d:%02d', $p['tuple']([$p['getattr'](self, 'hour'), $p['getattr'](self, 'minute'), $p['getattr'](self, 'second')]));
			if ($p['bool']($p['getattr'](self, 'microsecond'))) {
				t = $p['__op_add']($add15=t,$add16=$p['sprintf']('.%06d', $p['getattr'](self, 'microsecond')));
			}
			return t;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isoformat'] = $method;
		$method = $pyjs__bind_method2('$$replace', function(hour, minute, second, microsecond, tzinfo) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				hour = arguments[1];
				minute = arguments[2];
				second = arguments[3];
				microsecond = arguments[4];
				tzinfo = arguments[5];
			}
			if (typeof hour == 'undefined') hour=arguments['callee']['__args__'][3][1];
			if (typeof minute == 'undefined') minute=arguments['callee']['__args__'][4][1];
			if (typeof second == 'undefined') second=arguments['callee']['__args__'][5][1];
			if (typeof microsecond == 'undefined') microsecond=arguments['callee']['__args__'][6][1];
			if (typeof tzinfo == 'undefined') tzinfo=arguments['callee']['__args__'][7][1];

			if ($p['bool'](!$p['op_eq'](tzinfo, null))) {
				throw ($p['NotImplementedError']('tzinfo'));
			}
			if ($p['bool']((hour === null))) {
				hour = $p['getattr'](self, 'hour');
			}
			if ($p['bool']((minute === null))) {
				minute = $p['getattr'](self, 'minute');
			}
			if ($p['bool']((second === null))) {
				second = $p['getattr'](self, 'second');
			}
			if ($p['bool']((microsecond === null))) {
				microsecond = $p['getattr'](self, 'microsecond');
			}
			return $m['time'](hour, minute, second, microsecond);
		}
	, 1, [null,null,['self'],['hour', null],['minute', null],['second', null],['microsecond', null],['tzinfo', null]]);
		$cls_definition['$$replace'] = $method;
		$method = $pyjs__bind_method2('strftime', function(format) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				format = arguments[1];
			}
			var $div9,$div10;
			return $m['strftime'](format, $m['localtime']($p['float_int']((typeof ($div9=self['_d']['getTime']())==typeof ($div10=1000.0) && typeof $div9=='number' && $div10 !== 0?
				$div9/$div10:
				$p['op_div']($div9,$div10)))));
		}
	, 1, [null,null,['self'],['format']]);
		$cls_definition['strftime'] = $method;
		$method = $pyjs__bind_method2('tzname', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['tzname'] = $method;
		$method = $pyjs__bind_method2('utcoffset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['utcoffset'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['isoformat']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('time', $p['tuple']($bases), $data);
	})();
	$m['datetime'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'datetime';
		$method = $pyjs__bind_method2('__init__', function(year, month, day, hour, minute, second, microsecond, tzinfo, d) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				year = arguments[1];
				month = arguments[2];
				day = arguments[3];
				hour = arguments[4];
				minute = arguments[5];
				second = arguments[6];
				microsecond = arguments[7];
				tzinfo = arguments[8];
				d = arguments[9];
			}
			if (typeof hour == 'undefined') hour=arguments['callee']['__args__'][6][1];
			if (typeof minute == 'undefined') minute=arguments['callee']['__args__'][7][1];
			if (typeof second == 'undefined') second=arguments['callee']['__args__'][8][1];
			if (typeof microsecond == 'undefined') microsecond=arguments['callee']['__args__'][9][1];
			if (typeof tzinfo == 'undefined') tzinfo=arguments['callee']['__args__'][10][1];
			if (typeof d == 'undefined') d=arguments['callee']['__args__'][11][1];

			if ($p['bool']((d === null))) {
				d = new Date(year, month - 1, day, hour, minute, second, 0.5 + microsecond / 1000.0);
			}
			$pyjs_kwargs_call($m['date'], '__init__', null, null, [{'d':d}, self, 0, 0, 0]);
			$pyjs_kwargs_call($m['time'], '__init__', null, null, [{'d':d}, self, 0]);
			return null;
		}
	, 1, [null,null,['self'],['year'],['month'],['day'],['hour', 0],['minute', 0],['second', 0],['microsecond', 0],['tzinfo', null],['d', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('combine', function(date, time) {
    var self = this['prototype'];

			return $m['datetime']($p['getattr'](date, 'year'), $p['getattr'](date, 'month'), $p['getattr'](date, 'day'), $p['getattr'](time, 'hour'), $p['getattr'](time, 'minute'), $p['getattr'](time, 'second'), $p['getattr'](time, 'microsecond'));
		}
	, 2, [null,null,['self'],['date'],['time']]);
		$cls_definition['combine'] = $method;
		$method = $pyjs__bind_method2('fromtimestamp', function(timestamp, tz) {
    var self = this['prototype'];
			if (typeof tz == 'undefined') tz=arguments['callee']['__args__'][4][1];
			var d,$mul8,$mul7;
			if ($p['bool'](!$p['op_eq'](tz, null))) {
				throw ($p['NotImplementedError']('tz'));
			}
			d = new Date();
			d['setTime']((typeof ($mul7=timestamp)==typeof ($mul8=1000.0) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8)));
			return $pyjs_kwargs_call(null, $m['datetime'], null, null, [{'d':d}, 0, 0, 0]);
		}
	, 2, [null,null,['self'],['timestamp'],['tz', null]]);
		$cls_definition['fromtimestamp'] = $method;
		$method = $pyjs__bind_method2('fromordinal', function(ordinal) {
    var self = this['prototype'];
			var d,$mul10,$sub10,$sub9,$mul9;
			d = new Date();
			d['setTime']((typeof ($mul9=$p['__op_sub']($sub9=ordinal,$sub10=719163.0))==typeof ($mul10=86400000.0) && typeof $mul9=='number'?
				$mul9*$mul10:
				$p['op_mul']($mul9,$mul10)));
			return $pyjs_kwargs_call(null, $m['datetime'], null, null, [{'d':d}, 0, 0, 0]);
		}
	, 2, [null,null,['self'],['ordinal']]);
		$cls_definition['fromordinal'] = $method;
		$method = $pyjs__bind_method2('now', function(tz) {
    var self = this['prototype'];
			if (typeof tz == 'undefined') tz=arguments['callee']['__args__'][3][1];

			if ($p['bool'](!$p['op_eq'](tz, null))) {
				throw ($p['NotImplementedError']('tz'));
			}
			return $pyjs_kwargs_call(null, $m['datetime'], null, null, [{'d':new Date()}, 0, 0, 0]);
		}
	, 2, [null,null,['self'],['tz', null]]);
		$cls_definition['now'] = $method;
		$method = $pyjs__bind_method2('strptime', function(datestring, format) {
    var self = this['prototype'];

			return self['fromtimestamp']($m['_strptime'](datestring, format));
		}
	, 2, [null,null,['self'],['datestring'],['format']]);
		$cls_definition['strptime'] = $method;
		$method = $pyjs__bind_method2('utcfromtimestamp', function(timestamp) {
    var self = this['prototype'];
			var tm;
			tm = $m['gmtime'](timestamp);
			return $m['datetime']($p['getattr'](tm, 'tm_year'), $p['getattr'](tm, 'tm_mon'), $p['getattr'](tm, 'tm_mday'), $p['getattr'](tm, 'tm_hour'), $p['getattr'](tm, 'tm_min'), $p['getattr'](tm, 'tm_sec'));
		}
	, 2, [null,null,['self'],['timestamp']]);
		$cls_definition['utcfromtimestamp'] = $method;
		$method = $pyjs__bind_method2('utcnow', function() {
    var self = this['prototype'];
			var d,$div12,$div11;
			d = new Date();
			return $m['datetime']['utcfromtimestamp']($p['float_int']((typeof ($div11=d['getTime']())==typeof ($div12=1000.0) && typeof $div11=='number' && $div12 !== 0?
				$div11/$div12:
				$p['op_div']($div11,$div12))));
		}
	, 2, [null,null,['self']]);
		$cls_definition['utcnow'] = $method;
		$method = $pyjs__bind_method2('timetuple', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $div14,$div13;
			return $m['localtime']($p['float_int']((typeof ($div13=self['_d']['getTime']())==typeof ($div14=1000.0) && typeof $div13=='number' && $div14 !== 0?
				$div13/$div14:
				$p['op_div']($div13,$div14))));
		}
	, 1, [null,null,['self']]);
		$cls_definition['timetuple'] = $method;
		$method = $pyjs__bind_method2('astimezone', function(tz) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tz = arguments[1];
			}

			throw ($p['NotImplementedError']('astimezone'));
			return null;
		}
	, 1, [null,null,['self'],['tz']]);
		$cls_definition['astimezone'] = $method;
		$method = $pyjs__bind_method2('date', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['date']($p['getattr'](self, 'year'), $p['getattr'](self, 'month'), $p['getattr'](self, 'day'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['date'] = $method;
		$method = $pyjs__bind_method2('time', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['time']($p['getattr'](self, 'hour'), $p['getattr'](self, 'minute'), $p['getattr'](self, 'second'), $p['getattr'](self, 'microsecond'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['time'] = $method;
		$method = $pyjs__bind_method2('$$replace', function(year, month, day, hour, minute, second, microsecond, tzinfo) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				year = arguments[1];
				month = arguments[2];
				day = arguments[3];
				hour = arguments[4];
				minute = arguments[5];
				second = arguments[6];
				microsecond = arguments[7];
				tzinfo = arguments[8];
			}
			if (typeof year == 'undefined') year=arguments['callee']['__args__'][3][1];
			if (typeof month == 'undefined') month=arguments['callee']['__args__'][4][1];
			if (typeof day == 'undefined') day=arguments['callee']['__args__'][5][1];
			if (typeof hour == 'undefined') hour=arguments['callee']['__args__'][6][1];
			if (typeof minute == 'undefined') minute=arguments['callee']['__args__'][7][1];
			if (typeof second == 'undefined') second=arguments['callee']['__args__'][8][1];
			if (typeof microsecond == 'undefined') microsecond=arguments['callee']['__args__'][9][1];
			if (typeof tzinfo == 'undefined') tzinfo=arguments['callee']['__args__'][10][1];

			if ($p['bool'](!$p['op_eq'](tzinfo, null))) {
				throw ($p['NotImplementedError']('tzinfo'));
			}
			if ($p['bool']((year === null))) {
				year = $p['getattr'](self, 'year');
			}
			if ($p['bool']((month === null))) {
				month = $p['getattr'](self, 'month');
			}
			if ($p['bool']((day === null))) {
				day = $p['getattr'](self, 'day');
			}
			if ($p['bool']((hour === null))) {
				hour = $p['getattr'](self, 'hour');
			}
			if ($p['bool']((minute === null))) {
				minute = $p['getattr'](self, 'minute');
			}
			if ($p['bool']((second === null))) {
				second = $p['getattr'](self, 'second');
			}
			if ($p['bool']((microsecond === null))) {
				microsecond = $p['getattr'](self, 'microsecond');
			}
			return $m['datetime'](year, month, day, hour, minute, second, microsecond);
		}
	, 1, [null,null,['self'],['year', null],['month', null],['day', null],['hour', null],['minute', null],['second', null],['microsecond', null],['tzinfo', null]]);
		$cls_definition['$$replace'] = $method;
		$method = $pyjs__bind_method2('timetz', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($p['NotImplementedError']('timetz'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['timetz'] = $method;
		$method = $pyjs__bind_method2('utctimetuple', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $div15,$div16;
			return $m['gmtime']((typeof ($div15=self['_d']['getTime']())==typeof ($div16=1000.0) && typeof $div15=='number' && $div16 !== 0?
				$div15/$div16:
				$p['op_div']($div15,$div16)));
		}
	, 1, [null,null,['self']]);
		$cls_definition['utctimetuple'] = $method;
		$method = $pyjs__bind_method2('isoformat', function(sep) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sep = arguments[1];
			}
			if (typeof sep == 'undefined') sep=arguments['callee']['__args__'][3][1];
			var $add17,$add18,t;
			t = $p['sprintf']('%04d-%02d-%02d%s%02d:%02d:%02d', $p['tuple']([$p['getattr'](self, 'year'), $p['getattr'](self, 'month'), $p['getattr'](self, 'day'), sep, $p['getattr'](self, 'hour'), $p['getattr'](self, 'minute'), $p['getattr'](self, 'second')]));
			if ($p['bool']($p['getattr'](self, 'microsecond'))) {
				t = $p['__op_add']($add17=t,$add18=$p['sprintf']('.%06d', $p['getattr'](self, 'microsecond')));
			}
			return t;
		}
	, 1, [null,null,['self'],['sep', 'T']]);
		$cls_definition['isoformat'] = $method;
		$method = $pyjs__bind_method2('__add__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $div17,month,second,year,$add26,$mod9,$add28,$div18,$div19,$add21,$add20,$add22,$add25,$add24,$add27,day,$mod11,$mod10,$mod12,microsecond,$add19,minute,$div20,d,hour,$add23;
			if ($p['bool']($p['isinstance'](other, (typeof timedelta == "undefined"?$m['timedelta']:timedelta)))) {
				year = $p['getattr'](self, 'year');
				month = $p['getattr'](self, 'month');
				day = $p['__op_add']($add19=$p['getattr'](self, 'day'),$add20=$p['getattr'](other, 'days'));
				hour = $p['__op_add']($add21=$p['getattr'](self, 'hour'),$add22=(typeof ($div17=$p['getattr'](other, 'seconds'))==typeof ($div18=3600.0) && typeof $div17=='number' && $div18 !== 0?
					$div17/$div18:
					$p['op_div']($div17,$div18)));
				minute = $p['__op_add']($add23=$p['getattr'](self, 'minute'),$add24=(typeof ($mod9=(typeof ($div19=$p['getattr'](other, 'seconds'))==typeof ($div20=60.0) && typeof $div19=='number' && $div20 !== 0?
					$div19/$div20:
					$p['op_div']($div19,$div20)))==typeof ($mod10=60) && typeof $mod9=='number'?
					(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
					$p['op_mod']($mod9,$mod10)));
				second = $p['__op_add']($add25=$p['getattr'](self, 'second'),$add26=(typeof ($mod11=$p['getattr'](other, 'seconds'))==typeof ($mod12=60) && typeof $mod11=='number'?
					(($mod11=$mod11%$mod12)<0&&$mod12>0?$mod11+$mod12:$mod11):
					$p['op_mod']($mod11,$mod12)));
				microsecond = $p['__op_add']($add27=$p['getattr'](self, 'microsecond'),$add28=$p['getattr'](other, 'microseconds'));
				d = new Date(year, month, day, hour, minute, second, microsecond);
				return $pyjs_kwargs_call(null, $m['datetime'], null, null, [{'d':d}]);
			}
			else {
				throw ($p['TypeError']('expected timedelta object'));
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__add__'] = $method;
		$method = $pyjs__bind_method2('__sub__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $mod20,$mod15,$sub20,$sub21,$sub19,month,$div27,second,$mod16,$sub22,year,diff,$sub18,$mod19,$or5,$mod14,$mod17,$or6,$mod13,$sub13,$sub12,$sub11,$sub17,$sub16,$sub15,$sub14,microsecond,$mod18,day,minute,d,$div21,$div23,$div22,$div25,$div24,hour,$div26,$div28;
			if ($p['bool'](($p['bool']($or5=$p['isinstance'](other, $m['date']))?$or5:$p['isinstance'](other, $m['datetime'])))) {
				diff = $p['__op_sub']($sub11=self['_d']['getTime'](),$sub12=other['_d']['getTime']());
				return $pyjs_kwargs_call(null, (typeof timedelta == "undefined"?$m['timedelta']:timedelta), null, null, [{'milliseconds':(typeof ($mod15=diff)==typeof ($mod16=86400000) && typeof $mod15=='number'?
					(($mod15=$mod15%$mod16)<0&&$mod16>0?$mod15+$mod16:$mod15):
					$p['op_mod']($mod15,$mod16))}, $p['float_int']((typeof ($div21=diff)==typeof ($div22=86400000.0) && typeof $div21=='number' && $div22 !== 0?
					$div21/$div22:
					$p['op_div']($div21,$div22))), (typeof ($mod13=$p['float_int']((typeof ($div23=diff)==typeof ($div24=1000.0) && typeof $div23=='number' && $div24 !== 0?
					$div23/$div24:
					$p['op_div']($div23,$div24))))==typeof ($mod14=86400) && typeof $mod13=='number'?
					(($mod13=$mod13%$mod14)<0&&$mod14>0?$mod13+$mod14:$mod13):
					$p['op_mod']($mod13,$mod14))]);
			}
			else if ($p['bool']($p['isinstance'](other, (typeof timedelta == "undefined"?$m['timedelta']:timedelta)))) {
				year = $p['getattr'](self, 'year');
				month = $p['getattr'](self, 'month');
				day = $p['__op_sub']($sub13=$p['getattr'](self, 'day'),$sub14=$p['getattr'](other, 'days'));
				hour = $p['__op_sub']($sub15=$p['getattr'](self, 'hour'),$sub16=(typeof ($div25=$p['getattr'](other, 'seconds'))==typeof ($div26=3600.0) && typeof $div25=='number' && $div26 !== 0?
					$div25/$div26:
					$p['op_div']($div25,$div26)));
				minute = $p['__op_sub']($sub17=$p['getattr'](self, 'minute'),$sub18=(typeof ($mod17=(typeof ($div27=$p['getattr'](other, 'seconds'))==typeof ($div28=60.0) && typeof $div27=='number' && $div28 !== 0?
					$div27/$div28:
					$p['op_div']($div27,$div28)))==typeof ($mod18=60) && typeof $mod17=='number'?
					(($mod17=$mod17%$mod18)<0&&$mod18>0?$mod17+$mod18:$mod17):
					$p['op_mod']($mod17,$mod18)));
				second = $p['__op_sub']($sub19=$p['getattr'](self, 'second'),$sub20=(typeof ($mod19=$p['getattr'](other, 'seconds'))==typeof ($mod20=60) && typeof $mod19=='number'?
					(($mod19=$mod19%$mod20)<0&&$mod20>0?$mod19+$mod20:$mod19):
					$p['op_mod']($mod19,$mod20)));
				microsecond = $p['__op_sub']($sub21=$p['getattr'](self, 'microsecond'),$sub22=$p['getattr'](other, 'microseconds'));
				d = new Date(year, month, day, hour, minute, second, microsecond);
				return $pyjs_kwargs_call(null, $m['datetime'], null, null, [{'d':d}]);
			}
			else {
				throw ($p['TypeError']('expected date or datetime object'));
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__sub__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['isoformat'](' ');
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		var $bases = new Array($m['date'],$m['time']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('datetime', $p['tuple']($bases), $data);
	})();
	$m['timedelta'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'datetime';
		$method = $pyjs__bind_method2('__init__', function(days, seconds, microseconds, milliseconds, minutes, hours, weeks) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				days = arguments[1];
				seconds = arguments[2];
				microseconds = arguments[3];
				milliseconds = arguments[4];
				minutes = arguments[5];
				hours = arguments[6];
				weeks = arguments[7];
			}
			if (typeof days == 'undefined') days=arguments['callee']['__args__'][3][1];
			if (typeof seconds == 'undefined') seconds=arguments['callee']['__args__'][4][1];
			if (typeof microseconds == 'undefined') microseconds=arguments['callee']['__args__'][5][1];
			if (typeof milliseconds == 'undefined') milliseconds=arguments['callee']['__args__'][6][1];
			if (typeof minutes == 'undefined') minutes=arguments['callee']['__args__'][7][1];
			if (typeof hours == 'undefined') hours=arguments['callee']['__args__'][8][1];
			if (typeof weeks == 'undefined') weeks=arguments['callee']['__args__'][9][1];
			var $add35,$add29,$mul17,$mul16,$mul15,$mul14,$mul13,$mul12,$mul11,$add32,$add33,$add30,$add31,$add36,$add34,$mul18;
			self['days'] = $p['__op_add']($add29=(typeof ($mul11=weeks)==typeof ($mul12=7.0) && typeof $mul11=='number'?
				$mul11*$mul12:
				$p['op_mul']($mul11,$mul12)),$add30=days);
			self['seconds'] = $p['__op_add']($add33=$p['__op_add']($add31=(typeof ($mul13=hours)==typeof ($mul14=3600.0) && typeof $mul13=='number'?
				$mul13*$mul14:
				$p['op_mul']($mul13,$mul14)),$add32=(typeof ($mul15=minutes)==typeof ($mul16=60.0) && typeof $mul15=='number'?
				$mul15*$mul16:
				$p['op_mul']($mul15,$mul16))),$add34=seconds);
			self['microseconds'] = $p['__op_add']($add35=(typeof ($mul17=milliseconds)==typeof ($mul18=1000.0) && typeof $mul17=='number'?
				$mul17*$mul18:
				$p['op_mul']($mul17,$mul18)),$add36=microseconds);
			return null;
		}
	, 1, [null,null,['self'],['days', 0],['seconds', 0],['microseconds', 0],['milliseconds', 0],['minutes', 0],['hours', 0],['weeks', 0]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('timedelta', $p['tuple']($bases), $data);
	})();
	$m['tzinfo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'datetime';
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('tzinfo', $p['tuple']($bases), $data);
	})();
	$m['date']['min'] = $m['date'](1, 1, 1);
	$m['date']['max'] = $m['date'](9999, 12, 31);
	$m['date']['resolution'] = $m['timedelta'](1);
	$m['time']['min'] = $m['time'](0, 0);
	$m['time']['max'] = $m['time'](23, 59, 59, 999999);
	$m['time']['resolution'] = $m['timedelta'](0, 0, 1);
	$m['datetime']['min'] = $m['datetime'](1, 1, 1, 0, 0);
	$m['datetime']['max'] = $m['datetime'](9999, 12, 31, 23, 59, 59, 999999);
	$m['datetime']['resolution'] = $m['timedelta'](0, 0, 1);
	$m['timedelta']['min'] = $m['timedelta']((typeof ($usub2=999999999)=='number'?
		-$usub2:
		$p['op_usub']($usub2)));
	$m['timedelta']['max'] = $pyjs_kwargs_call(null, $m['timedelta'], null, null, [{'hours':23, 'minutes':59, 'seconds':59, 'microseconds':999999}, 999999999]);
	$m['timedelta']['resolution'] = $m['timedelta'](0, 0, 1);
	return this;
}; /* end datetime */


/* end module: datetime */


/*
PYJS_DEPS: ['time.__c__days', 'time', 'time.__c__months', 'time.strftime', 'time.localtime', 'time.gmtime', 'time._strptime']
*/
