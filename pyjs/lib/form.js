/* start module: form */
$pyjs['loaded_modules']['form'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['form']['__was_initialized__']) return $pyjs['loaded_modules']['form'];
	var $m = $pyjs['loaded_modules']['form'];
	$m['__repr__'] = function() { return '<module: form>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'form';
	$m['__name__'] = __mod_name__;


	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
	$m['TextArea'] = $p['___import___']('pyjamas.ui.TextArea.TextArea', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['HTMLPanel'] = $p['___import___']('pyjamas.ui.HTMLPanel.HTMLPanel', null, null, false);
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
	$m['Abstract_View'] = $p['___import___']('common.Abstract_View', null, null, false);
	$m['Report_Date_Field'] = $p['___import___']('common.Report_Date_Field', null, null, false);
	$m['Data_Service'] = $p['___import___']('common.Data_Service', null, null, false);
	$m['DATE_MATCHER'] = $p['___import___']('consts.DATE_MATCHER', null, null, false);
	$m['MODAL_PNL'] = $p['___import___']('consts.MODAL_PNL', null, null, false);
	$m['datetime'] = $p['___import___']('datetime', null);
	$m['time'] = $p['___import___']('time', null);
	$m['SEND_DATA_MSG'] = 'send-data-msg';
	$m['GET_REPORT_MSG'] = 'get-report-msg';
	$m['PROJ_CHANGED_MSG'] = 'proj-changed-msg';
	$m['GET_PRJ_MSG'] = 'get-prj-msg';
	$m['ADD_MLS_MSG'] = 'add-mls-msg';
	$m['CANT_DEL_IMP_MSG'] = 'cant-del-imp-msg';
	$m['create_error_message'] = function(error) {
		var $add2,$add3,$add1,$add4;
		return $p['__op_add']($add3=$p['__op_add']($add1='\n        <div class="alert alert-danger fade in">\n            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n            <strong>Error:</strong> ',$add2=error),$add4='\n        </div>\n        ');
	};
	$m['create_error_message']['__name__'] = 'create_error_message';

	$m['create_error_message']['__bind_type__'] = 0;
	$m['create_error_message']['__args__'] = [null,null,['error']];
	$m['create_warning_message'] = function(warning) {
		var $add8,$add6,$add7,$add5;
		return $p['__op_add']($add7=$p['__op_add']($add5='\n        <div class="alert alert-warning fade in">\n            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n            <strong>Warning:</strong> ',$add6=warning),$add8='\n        </div>\n        ');
	};
	$m['create_warning_message']['__name__'] = 'create_warning_message';

	$m['create_warning_message']['__bind_type__'] = 0;
	$m['create_warning_message']['__args__'] = [null,null,['warning']];
	$m['Form_Row'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'form';
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
	$m['Milestones_Row'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'form';
		$method = $pyjs__bind_method2('__init__', function(milestone_names, milestone_dates) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				milestone_names = arguments[1];
				milestone_dates = arguments[2];
			}
			var $iter1_nextval,$iter1_type,m,$iter1_iter,$iter1_array,$iter1_idx;
			$m['SimplePanel']['__init__'](self);
			self['milestone_dates'] = milestone_dates;
			self['hpanel'] = $m['HorizontalPanel']();
			self['hpanel']['setVerticalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_TOP'));
			self['$$name'] = $pyjs_kwargs_call(null, $m['ListBox'], null, null, [{'Height':'34px', 'Width':'208px'}]);
			self['$$name']['setStyleName']('form-control input-lg');
			self['$$name']['addChangeListener']($p['getattr'](self, 'on_milestone_changed'));
			$iter1_iter = milestone_names;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				m = $iter1_nextval['$nextval'];
				self['$$name']['addItem'](m);
			}
			if ($p['bool'](($p['cmp']($p['len']($p['getattr'](self, 'milestone_dates')), 0) == 1))) {
				self['planned_completion'] = $m['Label']($p['getattr'](self, 'milestone_dates')['__getitem__'](0));
			}
			else {
				self['planned_completion'] = $m['Label']('Undefined');
			}
			self['planned_completion']['setStyleName']('form-control text-normal');
			self['expected_completion'] = $pyjs_kwargs_call(null, $m['Report_Date_Field'], null, null, [{'cal_ID':'end'}]);
			self['expected_completion']['getTextBox']()['setStyleName']('form-control');
			self['expected_completion']['setRegex']($m['DATE_MATCHER']);
			self['expected_completion']['appendValidListener']($p['getattr'](self, '_display_ok'));
			self['expected_completion']['appendInvalidListener']($p['getattr'](self, '_display_error'));
			self['expected_completion']['validate'](null);
			self['hpanel']['add']($p['getattr'](self, '$$name'));
			self['hpanel']['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{'Width':'10px'}]));
			self['hpanel']['add']($p['getattr'](self, 'planned_completion'));
			self['hpanel']['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{'Width':'10px'}]));
			self['hpanel']['add']($p['getattr'](self, 'expected_completion'));
			return null;
		}
	, 1, [null,null,['self'],['milestone_names'],['milestone_dates']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_name_txt', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['$$name']['getText']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_name_txt'] = $method;
		$method = $pyjs__bind_method2('get_milestone_data', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var name,expected_completion,planned_completion;
			name = self['$$name']['getItemText'](self['$$name']['getSelectedIndex']());
			planned_completion = self['planned_completion']['getText']();
			expected_completion = self['expected_completion']['getTextBox']()['getText']();
			return $p['tuple']([name, planned_completion, expected_completion]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_milestone_data'] = $method;
		$method = $pyjs__bind_method2('_display_ok', function(obj) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}

			obj['setStyleName']('form-input');
			return null;
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['_display_ok'] = $method;
		$method = $pyjs__bind_method2('_display_error', function(obj) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}

			if ($p['bool'](($p['cmp']($p['len'](obj['getTextBox']()['getText']()), 0) == 1))) {
				obj['setStyleName']('form-group has-error');
			}
			return null;
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['_display_error'] = $method;
		$method = $pyjs__bind_method2('on_milestone_changed', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var ind;
			ind = self['$$name']['getSelectedIndex']();
			self['planned_completion']['setText']($p['getattr'](self, 'milestone_dates')['__getitem__'](ind));
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['on_milestone_changed'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Milestones_Row', $p['tuple']($bases), $data);
	})();
	$m['Impediments'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'form';
		$method = $pyjs__bind_method2('__init__', function(start_date, can_delete) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				start_date = arguments[1];
				can_delete = arguments[2];
			}
			if (typeof can_delete == 'undefined') can_delete=arguments['callee']['__args__'][4][1];
			var desc_panel,status_panel,desc_lbl,hpanel;
			$m['SimplePanel']['__init__'](self);
			self['vpanel'] = $m['VerticalPanel']();
			desc_panel = $m['VerticalPanel']();
			self['desc_box'] = $m['TextBox']();
			self['desc_box']['setVisibleLength'](44);
			self['desc_box']['setStyleName']('form-control');
			desc_lbl = $m['Label']('impediment description');
			desc_lbl['setStyleName']('text-muted');
			desc_panel['add']($p['getattr'](self, 'desc_box'));
			desc_panel['add'](desc_lbl);
			self['can_delete'] = can_delete;
			status_panel = $m['VerticalPanel']();
			self['status_lst'] = $pyjs_kwargs_call(null, $m['ListBox'], null, null, [{'Height':'34px'}]);
			self['status_lst']['setStyleName']('form-control input-lg');
			self['status_lst']['addItem']('Open');
			self['status_lst']['addItem']('Closed');
			self['status_lbl'] = $m['Label']('');
			self['set_start_date'](start_date);
			self['status_lbl']['setStyleName']('text-muted');
			status_panel = $m['VerticalPanel']();
			status_panel['add']($p['getattr'](self, 'status_lst'));
			status_panel['add']($p['getattr'](self, 'status_lbl'));
			self['$$comment'] = (typeof Text_Area_Row == "undefined"?$m['Text_Area_Row']:Text_Area_Row)('', 'why it exists or is being closed');
			hpanel = $m['HorizontalPanel']();
			hpanel['add'](desc_panel);
			hpanel['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{'Width':'10px'}]));
			hpanel['add'](status_panel);
			self['vpanel']['add'](hpanel);
			self['vpanel']['add'](self['$$comment']['panel']());
			return null;
		}
	, 1, [null,null,['self'],['start_date'],['can_delete', true]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('set_start_date', function(start_date) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				start_date = arguments[1];
			}
			var date_str,$add9,$add10;
			date_str = $p['__op_add']($add9='added on: ',$add10=start_date);
			self['status_lbl']['setText'](date_str);
			return null;
		}
	, 1, [null,null,['self'],['start_date']]);
		$cls_definition['set_start_date'] = $method;
		$method = $pyjs__bind_method2('get_impediment_data', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $$comment,end_date,lbl_text,state,$add11,$add12,ind,start_date,desc;
			desc = self['desc_box']['getText']();
			$$comment = self['$$comment']['widget']()['getText']();
			state = self['status_lst']['getItemText'](self['status_lst']['getSelectedIndex']());
			lbl_text = self['status_lbl']['getText']();
			ind = $p['__op_add']($add11=lbl_text['find'](':'),$add12=1);
			start_date = $p['__getslice'](lbl_text, ind, null)['strip']();
			if ($p['bool']($p['op_eq'](state, 'Open'))) {
				end_date = null;
			}
			else {
				end_date = $m['datetime']['date']['today']()['strftime']('%d/%m/%Y');
			}
			return $p['tuple']([desc, $$comment, start_date, end_date, state]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_impediment_data'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Impediments', $p['tuple']($bases), $data);
	})();
	$m['Text_Area_Row'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'form';
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
	$m['Dev_Fields'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'form';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var hp_impd,milestone_panel,hp_mlst,impediment_panel;
			$m['VerticalPanel']['__init__'](self);
			$m['Abstract_View']['__init__'](self);
			self['milestone_names'] = $p['list']([]);
			self['milestone_dates'] = $p['list']([]);
			self['milestones'] = $p['list']([]);
			self['impediments'] = $p['list']([]);
			self['status_area'] = $pyjs_kwargs_call(null, $m['Text_Area_Row'], null, null, [{'help':'status of the project'}, 'Status']);
			self['main_mlst_panel'] = $m['VerticalPanel']();
			hp_mlst = $m['HorizontalPanel']();
			self['add_milestone_btn'] = $m['Button']('Add', $p['getattr'](self, 'on_add_milestone_btn_click'));
			self['add_milestone_btn']['setStyleName']('btn btn-info');
			self['remove_milestone_btn'] = $m['Button']('Remove', $p['getattr'](self, 'remove_milestone'));
			self['remove_milestone_btn']['setStyleName']('btn btn-danger');
			milestone_panel = $m['VerticalPanel']();
			self['milestone_row'] = $pyjs_kwargs_call(null, $m['Form_Row'], null, null, [{'help':'add milestone and provide expected completion date'}, 'Milestones', milestone_panel]);
			hp_mlst['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{'Width':'330px'}]));
			hp_mlst['add']($p['getattr'](self, 'add_milestone_btn'));
			hp_mlst['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{'Width':'10px'}]));
			hp_mlst['add']($p['getattr'](self, 'remove_milestone_btn'));
			self['main_mlst_panel']['add'](self['milestone_row']['panel']());
			self['main_mlst_panel']['add'](hp_mlst);
			self['risks_area'] = $pyjs_kwargs_call(null, $m['Text_Area_Row'], null, null, [{'help':'short / long term risks'}, 'Risks']);
			self['main_impd_panel'] = $m['VerticalPanel']();
			hp_impd = $m['HorizontalPanel']();
			self['add_impediment_btn'] = $m['Button']('Add', $p['getattr'](self, 'add_impediment'));
			self['add_impediment_btn']['setStyleName']('btn btn-info');
			self['remove_impediment_btn'] = $m['Button']('Remove', $p['getattr'](self, 'remove_impediment'));
			self['remove_impediment_btn']['setStyleName']('btn btn-danger');
			impediment_panel = $m['VerticalPanel']();
			self['impediment_row'] = $pyjs_kwargs_call(null, $m['Form_Row'], null, null, [{'help':'add impediments, one per section, please'}, 'Impediments', impediment_panel]);
			hp_impd['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{'Width':'330px'}]));
			hp_impd['add']($p['getattr'](self, 'add_impediment_btn'));
			hp_impd['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{'Width':'10px'}]));
			hp_impd['add']($p['getattr'](self, 'remove_impediment_btn'));
			self['main_impd_panel']['add'](self['impediment_row']['panel']());
			self['main_impd_panel']['add'](hp_impd);
			self['add'](self['status_area']['panel']());
			self['add'](self['risks_area']['panel']());
			self['add']($p['getattr'](self, 'main_mlst_panel'));
			self['add']($p['getattr'](self, 'main_impd_panel'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('on_add_milestone_btn_click', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['controller']['process_msg']($m['ADD_MLS_MSG']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['on_add_milestone_btn_click'] = $method;
		$method = $pyjs__bind_method2('add_milestone', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var milestone;
			milestone = $m['Milestones_Row']($p['getattr'](self, 'milestone_names'), $p['getattr'](self, 'milestone_dates'));
			self['milestone_row']['widget']()['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{'Height':'5px'}]));
			self['milestone_row']['widget']()['add']($p['getattr'](milestone, 'hpanel'));
			self['milestones']['append'](milestone);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['add_milestone'] = $method;
		$method = $pyjs__bind_method2('remove_milestone', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $pyjs_try_err;
			try {
				$p['getattr'](self, 'milestones')['__getitem__']((typeof ($usub1=1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)))['hpanel']['removeFromParent']();
				self['milestones']['remove']($p['getattr'](self, 'milestones')['__getitem__']((typeof ($usub2=1)=='number'?
					-$usub2:
					$p['op_usub']($usub2))));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['remove_milestone'] = $method;
		$method = $pyjs__bind_method2('add_impediment', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var today_date,impediment;
			today_date = $m['datetime']['date']['today']()['strftime']('%d/%m/%Y');
			impediment = $m['Impediments'](today_date);
			self['impediment_row']['widget']()['add']($p['getattr'](impediment, 'vpanel'));
			self['impediments']['append'](impediment);
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['add_impediment'] = $method;
		$method = $pyjs__bind_method2('remove_impediment', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $pyjs_try_err;
			try {
				if ($p['bool']($p['op_eq']($p['getattr']($p['getattr'](self, 'impediments')['__getitem__']((typeof ($usub3=1)=='number'?
					-$usub3:
					$p['op_usub']($usub3))), 'can_delete'), true))) {
					$p['getattr'](self, 'impediments')['__getitem__']((typeof ($usub4=1)=='number'?
						-$usub4:
						$p['op_usub']($usub4)))['vpanel']['removeFromParent']();
					self['impediments']['remove']($p['getattr'](self, 'impediments')['__getitem__']((typeof ($usub5=1)=='number'?
						-$usub5:
						$p['op_usub']($usub5))));
				}
				else {
					self['controller']['process_msg']($m['CANT_DEL_IMP_MSG']);
				}
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['remove_impediment'] = $method;
		var $bases = new Array($m['VerticalPanel'],$m['Abstract_View']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Dev_Fields', $p['tuple']($bases), $data);
	})();
	$m['Input_Form'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'form';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Abstract_View']['__init__'](self);
			self['dev_fields'] = $m['Dev_Fields']();
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
			self['dev_fields']['register'](controller);
			return null;
		}
	, 1, [null,null,['self'],['controller']]);
		$cls_definition['register'] = $method;
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var help_btn,proj_list,btn_holder;
			self['panel'] = $m['VerticalPanel']();
			self['panel']['setSpacing'](10);
			proj_list = $pyjs_kwargs_call(null, $m['ListBox'], null, null, [{'Height':'34px'}]);
			proj_list['addItem']('');
			proj_list['setVisibleItemCount'](0);
			proj_list['addChangeListener']($p['getattr'](self, 'on_project_changed'));
			proj_list['setStyleName']('form-control input-lg');
			self['proj_row'] = $pyjs_kwargs_call(null, $m['Form_Row'], null, null, [{'help':'project, status of which you want to report'}, 'Select project', proj_list]);
			self['project_panel'] = $m['VerticalPanel']();
			self['submit_btn'] = $m['Button']('Submit report', $p['getattr'](self, 'send_data'));
			self['submit_btn']['setStyleName']('btn btn-primary btn-lg');
			self['submit_btn']['setEnabled'](false);
			self['msg_lbl'] = $pyjs_kwargs_call(null, $m['HTMLPanel'], null, null, [{'Width':'475px'}, '']);
			self['panel']['add'](self['proj_row']['panel']());
			self['panel']['add']($p['getattr'](self, 'project_panel'));
			self['panel']['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{'Height':'20px'}]));
			self['panel']['add']($p['getattr'](self, 'msg_lbl'));
			btn_holder = $m['HorizontalPanel']();
			btn_holder['add']($p['getattr'](self, 'submit_btn'));
			help_btn = $m['HTMLPanel']('');
			help_btn['setHTML']($m['MODAL_PNL']);
			btn_holder['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{'Width':'10px'}]));
			btn_holder['add'](help_btn);
			self['panel']['add'](btn_holder);
			self['root'] = $m['RootPanel']('report');
			self['root']['add']($p['getattr'](self, 'panel'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('_load_project', function(project) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				project = arguments[1];
			}

			if ($p['bool'](($p['getattr'](self, 'dev_fields') !== null))) {
				self['project_panel']['remove']($p['getattr'](self, 'dev_fields'));
			}
			self['dev_fields'] = $m['Dev_Fields']();
			self['project_panel']['add']($p['getattr'](self, 'dev_fields'));
			return null;
		}
	, 1, [null,null,['self'],['project']]);
		$cls_definition['_load_project'] = $method;
		$method = $pyjs__bind_method2('send_data', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['controller']['process_msg']($m['SEND_DATA_MSG']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['send_data'] = $method;
		$method = $pyjs__bind_method2('on_project_changed', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var project,proj_list;
			proj_list = self['proj_row']['widget']();
			project = proj_list['getItemText'](proj_list['getSelectedIndex']());
			if ($p['bool'](!$p['op_eq'](project, ''))) {
				self['controller']['process_msg']($m['PROJ_CHANGED_MSG'], project);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['on_project_changed'] = $method;
		var $bases = new Array($m['Abstract_View']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Input_Form', $p['tuple']($bases), $data);
	})();
	$m['Form_Controller'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'form';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['model'] = null;
			self['view'] = null;
			self['remote'] = $m['Data_Service']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('register', function(model, view) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				model = arguments[1];
				view = arguments[2];
			}

			self['model'] = model;
			self['view'] = view;
			self['process_msg']($m['GET_PRJ_MSG']);
			return null;
		}
	, 1, [null,null,['self'],['model'],['view']]);
		$cls_definition['register'] = $method;
		$method = $pyjs__bind_method2('validate', function(model) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				model = arguments[1];
			}
			var $iter3_type,im,$or1,$iter3_idx,$iter2_iter,$iter3_iter,$or5,$or4,$or7,$or6,$iter2_type,$or3,$or2,$or8,$iter2_idx,$iter3_array,$iter2_nextval,m,$iter3_nextval,$iter2_array;
			if ($p['bool']($p['op_eq']($p['getattr'](model, 'report_data')['__getitem__']('status'), ''))) {
				return 'Status is empty';
			}
			$iter2_iter = $p['getattr'](model, 'report_data')['__getitem__']('milestones');
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				m = $iter2_nextval['$nextval'];
				if ($p['bool'](($p['bool']($or1=$p['op_eq'](m['__getitem__']('name'), ''))?$or1:($p['bool']($or2=$p['op_eq'](m['__getitem__']('end_date'), ''))?$or2:$p['op_eq'](m['__getitem__']('expected_completion'), ''))))) {
					return 'Invalid milestone';
				}
			}
			$iter3_iter = $p['getattr'](model, 'report_data')['__getitem__']('impediments');
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				im = $iter3_nextval['$nextval'];
				if ($p['bool'](($p['bool']($or4=$p['op_eq'](im['__getitem__']('description'), ''))?$or4:($p['bool']($or5=$p['op_eq'](im['__getitem__']('comment'), ''))?$or5:($p['bool']($or6=$p['op_eq'](im['__getitem__']('start_date'), ''))?$or6:($p['bool']($or7=$p['op_eq'](im['__getitem__']('end_date'), ''))?$or7:$p['op_eq'](im['__getitem__']('state'), ''))))))) {
					return 'Invalid impediment';
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['model']]);
		$cls_definition['validate'] = $method;
		$method = $pyjs__bind_method2('process_msg', function(msg) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			} else {
				var self = arguments[0];
				msg = arguments[1];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']));

			}
			var status,$iter4_idx,error,$iter5_idx,imp,$iter4_nextval,m,project,$iter4_array,$iter5_nextval,$iter5_iter,risks,$iter4_type,$iter5_array,$iter5_type,$iter4_iter,proj_list;
			if ($p['bool']($p['op_eq'](msg, $m['SEND_DATA_MSG']))) {
				status = self['view']['dev_fields']['status_area']['widget']()['getText']();
				risks = self['view']['dev_fields']['risks_area']['widget']()['getText']();
				self['model']['add_status'](status);
				self['model']['add_risks'](risks);
				proj_list = self['view']['proj_row']['widget']();
				project = proj_list['getItemText'](proj_list['getSelectedIndex']());
				self['model']['add_project'](project);
				$iter4_iter = $p['getattr']($p['getattr']($p['getattr'](self, 'view'), 'dev_fields'), 'impediments');
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					imp = $iter4_nextval['$nextval'];
					$pyjs_kwargs_call(self['model'], 'add_impediment', imp['get_impediment_data'](), null, [{}]);
				}
				$iter5_iter = $p['getattr']($p['getattr']($p['getattr'](self, 'view'), 'dev_fields'), 'milestones');
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					m = $iter5_nextval['$nextval'];
					$pyjs_kwargs_call(self['model'], 'add_milestone', m['get_milestone_data'](), null, [{}]);
				}
				error = self['validate']($p['getattr'](self, 'model'));
				if ($p['bool']((error !== null))) {
					self['view']['msg_lbl']['setHTML']($m['create_error_message'](error));
					self['model'] = (typeof Report_Model == "undefined"?$m['Report_Model']:Report_Model)();
				}
				else {
					self['remote']['sendRequest']('send_data', $p['dict']([['message', $m['json']['dumps']($p['getattr']($p['getattr'](self, 'model'), 'report_data'))]]), self);
				}
			}
			if ($p['bool']($p['op_eq'](msg, $m['PROJ_CHANGED_MSG']))) {
				project = args['__getitem__'](0);
				self['view']['_load_project'](project);
				self['view']['dev_fields']['register'](self);
				self['view']['submit_btn']['setEnabled'](true);
				self['remote']['sendRequest']('get_active_milestones', $p['dict']([['message', $m['json']['dumps'](project)]]), self);
				self['remote']['sendRequest']('get_report_for_project', $p['dict']([['message', $m['json']['dumps'](project)]]), self);
			}
			if ($p['bool']($p['op_eq'](msg, $m['GET_PRJ_MSG']))) {
				self['remote']['sendRequest']('get_active_projects', $p['dict']([['message', $m['json']['dumps'](null)]]), self);
			}
			if ($p['bool']($p['op_eq'](msg, $m['ADD_MLS_MSG']))) {
				self['view']['dev_fields']['add_milestone']();
			}
			if ($p['bool']($p['op_eq'](msg, $m['CANT_DEL_IMP_MSG']))) {
				msg = $m['create_warning_message']('You cannot remove previously reported open impediment.');
				self['view']['msg_lbl']['setHTML'](msg);
			}
			return null;
		}
	, 1, ['args',null,['self'],['msg']]);
		$cls_definition['process_msg'] = $method;
		$method = $pyjs__bind_method2('onRemoteError', function(code, errobj, request_info) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				code = arguments[1];
				errobj = arguments[2];
				request_info = arguments[3];
			}
			var msg;
			msg = $m['create_error_message']('Oh, snap. Check your data and resubmit.');
			self['view']['msg_lbl']['setHTML'](msg);
			return null;
		}
	, 1, [null,null,['self'],['code'],['errobj'],['request_info']]);
		$cls_definition['onRemoteError'] = $method;
		$method = $pyjs__bind_method2('onRemoteResponse', function(response, request_info) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
				request_info = arguments[2];
			}
			var $iter6_type,$iter8_iter,$iter6_iter,proj_list,row,all_milestones,msg,$iter7_type,$iter8_idx,$iter6_idx,$iter7_iter,$iter8_type,milestone_names,$iter6_array,$iter8_nextval,$iter7_idx,data,$iter6_nextval,$iter7_nextval,$iter7_array,$iter8_array,milestone_dates;
			msg = response['__getitem__']('msg');
			if ($p['bool']($p['op_eq'](msg, 'send_data'))) {
				$pyjs_kwargs_call($m['HTTPRequest'](), 'asyncGet', null, null, [{'content_type':'text/html'}, '/success/', self]);
			}
			if ($p['bool']($p['op_eq'](msg, 'get_active_projects'))) {
				data = $m['json']['loads'](response['__getitem__']('data'));
				proj_list = self['view']['proj_row']['widget']();
				$iter6_iter = data;
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					row = $iter6_nextval['$nextval'];
					proj_list['addItem'](row['__getitem__'](1));
				}
			}
			if ($p['bool']($p['op_eq'](msg, 'get_active_milestones'))) {
				data = $m['json']['loads'](response['__getitem__']('data'));
				milestone_names = $p['list']([]);
				milestone_dates = $p['list']([]);
				$iter7_iter = data;
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					row = $iter7_nextval['$nextval'];
					milestone_names['append'](row['__getitem__'](1));
					milestone_dates['append'](row['__getitem__'](4));
				}
				$p['getattr']($p['getattr'](self, 'view'), 'dev_fields')['milestone_names'] = milestone_names;
				$p['getattr']($p['getattr'](self, 'view'), 'dev_fields')['milestone_dates'] = milestone_dates;
			}
			if ($p['bool']($p['op_eq'](msg, 'get_report_for_project'))) {
				data = $m['json']['loads'](response['__getitem__']('data'));
				all_milestones = data['__getitem__']('all_milestones');
				milestone_names = $p['list']([]);
				milestone_dates = $p['list']([]);
				$iter8_iter = all_milestones;
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					row = $iter8_nextval['$nextval'];
					milestone_names['append'](row['__getitem__'](1));
					milestone_dates['append'](row['__getitem__'](4));
				}
				$p['getattr']($p['getattr'](self, 'view'), 'dev_fields')['milestone_names'] = milestone_names;
				$p['getattr']($p['getattr'](self, 'view'), 'dev_fields')['milestone_dates'] = milestone_dates;
				if ($p['bool']((data !== null))) {
					self['_populate_fields'](data);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['response'],['request_info']]);
		$cls_definition['onRemoteResponse'] = $method;
		$method = $pyjs__bind_method2('onCompletion', function(response) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
			}
			var html;
			self['view']['root']['remove']($p['getattr']($p['getattr'](self, 'view'), 'panel'));
			html = $m['HTML']();
			html['setHTML'](response);
			self['view']['root']['add'](html);
			return null;
		}
	, 1, [null,null,['self'],['response']]);
		$cls_definition['onCompletion'] = $method;
		$method = $pyjs__bind_method2('_populate_fields', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			var impediments,milestones,$iter9_iter,i,m,$iter10_idx,$iter9_nextval,$iter9_idx,$iter10_array,$iter9_array,$iter10_type,$iter10_nextval,msg,$iter10_iter,$iter9_type;
			self['view']['dev_fields']['status_area']['widget']()['setText'](data['__getitem__']('status'));
			self['view']['dev_fields']['risks_area']['widget']()['setText'](data['__getitem__']('risks'));
			milestones = data['__getitem__']('milestones');
			$iter9_iter = milestones;
			$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
			while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
				m = $iter9_nextval['$nextval'];
				if ($p['bool']($p['getattr']($p['getattr']($p['getattr'](self, 'view'), 'dev_fields'), 'milestone_names')['__contains__'](m['__getitem__']('name')))) {
					self['view']['dev_fields']['add_milestone']();
					$p['getattr']($p['getattr']($p['getattr'](self, 'view'), 'dev_fields'), 'milestones')['__getitem__']((typeof ($usub6=1)=='number'?
						-$usub6:
						$p['op_usub']($usub6)))['$$name']['selectItem'](m['__getitem__']('name'));
					$p['getattr']($p['getattr']($p['getattr'](self, 'view'), 'dev_fields'), 'milestones')['__getitem__']((typeof ($usub7=1)=='number'?
						-$usub7:
						$p['op_usub']($usub7)))['$$name']['setEnabled'](false);
					$p['getattr']($p['getattr']($p['getattr'](self, 'view'), 'dev_fields'), 'milestones')['__getitem__']((typeof ($usub8=1)=='number'?
						-$usub8:
						$p['op_usub']($usub8)))['planned_completion']['setText'](m['__getitem__']('end_date'));
					$p['getattr']($p['getattr']($p['getattr'](self, 'view'), 'dev_fields'), 'milestones')['__getitem__']((typeof ($usub9=1)=='number'?
						-$usub9:
						$p['op_usub']($usub9)))['expected_completion']['getTextBox']()['setText'](m['__getitem__']('expected_completion'));
				}
				else {
					msg = $m['create_warning_message']('One of the previously reported milestones became inactive and cannot be loaded.');
					self['view']['msg_lbl']['setHTML'](msg);
				}
			}
			impediments = data['__getitem__']('impediments');
			$iter10_iter = impediments;
			$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
			while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
				i = $iter10_nextval['$nextval'];
				if ($p['bool']($p['op_eq'](i['__getitem__']('state'), 'Open'))) {
					self['view']['dev_fields']['add_impediment']();
					$p['getattr']($p['getattr']($p['getattr'](self, 'view'), 'dev_fields'), 'impediments')['__getitem__']((typeof ($usub10=1)=='number'?
						-$usub10:
						$p['op_usub']($usub10)))['status_lst']['selectItem'](i['__getitem__']('state'));
					$p['getattr']($p['getattr']($p['getattr'](self, 'view'), 'dev_fields'), 'impediments')['__getitem__']((typeof ($usub11=1)=='number'?
						-$usub11:
						$p['op_usub']($usub11)))['desc_box']['setText'](i['__getitem__']('description'));
					$p['getattr']($p['getattr']($p['getattr'](self, 'view'), 'dev_fields'), 'impediments')['__getitem__']((typeof ($usub12=1)=='number'?
						-$usub12:
						$p['op_usub']($usub12)))['desc_box']['setEnabled'](false);
					$p['getattr']($p['getattr']($p['getattr'](self, 'view'), 'dev_fields'), 'impediments')['__getitem__']((typeof ($usub13=1)=='number'?
						-$usub13:
						$p['op_usub']($usub13)))['$$comment']['widget']()['setText'](i['__getitem__']('comment'));
					$p['getattr']($p['getattr']($p['getattr'](self, 'view'), 'dev_fields'), 'impediments')['__getitem__']((typeof ($usub14=1)=='number'?
						-$usub14:
						$p['op_usub']($usub14)))['set_start_date'](i['__getitem__']('start_date'));
					$p['getattr']($p['getattr']($p['getattr'](self, 'view'), 'dev_fields'), 'impediments')['__getitem__']((typeof ($usub15=1)=='number'?
						-$usub15:
						$p['op_usub']($usub15)))['can_delete'] = false;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['_populate_fields'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Form_Controller', $p['tuple']($bases), $data);
	})();
	$m['Report_Model'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'form';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['report_data'] = $p['dict']();
			$p['getattr'](self, 'report_data')['__setitem__']('status', '');
			$p['getattr'](self, 'report_data')['__setitem__']('risks', '');
			$p['getattr'](self, 'report_data')['__setitem__']('milestones', $p['list']([]));
			$p['getattr'](self, 'report_data')['__setitem__']('impediments', $p['list']([]));
			$p['getattr'](self, 'report_data')['__setitem__']('project', '');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_impediments_count', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['len']($p['getattr'](self, 'report_data')['__getitem__']('impediments'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_impediments_count'] = $method;
		$method = $pyjs__bind_method2('get_milestones_count', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['len']($p['getattr'](self, 'report_data')['__getitem__']('milestones'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_milestones_count'] = $method;
		$method = $pyjs__bind_method2('add_milestone', function(name, end_date, expected_completion) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				end_date = arguments[2];
				expected_completion = arguments[3];
			}
			var milestone_data;
			milestone_data = $p['dict']();
			milestone_data['__setitem__']('name', name);
			milestone_data['__setitem__']('end_date', end_date);
			milestone_data['__setitem__']('expected_completion', expected_completion);
			$p['getattr'](self, 'report_data')['__getitem__']('milestones')['append'](milestone_data);
			return null;
		}
	, 1, [null,null,['self'],['name'],['end_date'],['expected_completion']]);
		$cls_definition['add_milestone'] = $method;
		$method = $pyjs__bind_method2('add_impediment', function(description, $$comment, start_date, end_date, state) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				description = arguments[1];
				$$comment = arguments[2];
				start_date = arguments[3];
				end_date = arguments[4];
				state = arguments[5];
			}
			var $$comment,impediment_data;
			impediment_data = $p['dict']();
			impediment_data['__setitem__']('description', description);
			impediment_data['__setitem__']('comment', $$comment);
			impediment_data['__setitem__']('start_date', start_date);
			impediment_data['__setitem__']('end_date', end_date);
			impediment_data['__setitem__']('state', state);
			$p['getattr'](self, 'report_data')['__getitem__']('impediments')['append'](impediment_data);
			return null;
		}
	, 1, [null,null,['self'],['description'],['$$comment'],['start_date'],['end_date'],['state']]);
		$cls_definition['add_impediment'] = $method;
		$method = $pyjs__bind_method2('add_status', function(status) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				status = arguments[1];
			}

			$p['getattr'](self, 'report_data')['__setitem__']('status', status);
			return null;
		}
	, 1, [null,null,['self'],['status']]);
		$cls_definition['add_status'] = $method;
		$method = $pyjs__bind_method2('add_risks', function(risks) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				risks = arguments[1];
			}

			$p['getattr'](self, 'report_data')['__setitem__']('risks', risks);
			return null;
		}
	, 1, [null,null,['self'],['risks']]);
		$cls_definition['add_risks'] = $method;
		$method = $pyjs__bind_method2('add_project', function(project) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				project = arguments[1];
			}

			$p['getattr'](self, 'report_data')['__setitem__']('project', project);
			return null;
		}
	, 1, [null,null,['self'],['project']]);
		$cls_definition['add_project'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Report_Model', $p['tuple']($bases), $data);
	})();
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
		$m['pyjd']['setup']('form.html');
		$m['view'] = $m['Input_Form']();
		$m['view']['onModuleLoad']();
		$m['model'] = $m['Report_Model']();
		$m['controller'] = $m['Form_Controller']();
		$m['controller']['register']($m['model'], $m['view']);
		$m['view']['register']($m['controller']);
		$m['pyjd']['run']();
	}
	return this;
}; /* end form */


/* end module: form */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.TextArea.TextArea', 'pyjamas.ui.TextArea', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.HTMLPanel.HTMLPanel', 'pyjamas.ui.HTMLPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.FormPanel.FormPanel', 'pyjamas.ui.FormPanel', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.Window', 'pyjamas.ui.HasAlignment', 'pyjamas.JSONService.JSONProxy', 'pyjamas.JSONService', 'pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest', 'json', 'common.Abstract_View', 'common', 'common.Report_Date_Field', 'common.Data_Service', 'consts.DATE_MATCHER', 'consts', 'consts.MODAL_PNL', 'datetime', 'time']
*/
