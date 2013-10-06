/* start module: milestones */
$pyjs['loaded_modules']['milestones'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['milestones']['__was_initialized__']) return $pyjs['loaded_modules']['milestones'];
	var $m = $pyjs['loaded_modules']['milestones'];
	$m['__repr__'] = function() { return '<module: milestones>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'milestones';
	$m['__name__'] = __mod_name__;


	$m['__author__'] = 'Serge Boyko';
	$m['__date__'] = '13-Sept-2013';
	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
	$m['ScrollPanel'] = $p['___import___']('pyjamas.ui.ScrollPanel.ScrollPanel', null, null, false);
	$m['TextArea'] = $p['___import___']('pyjamas.ui.TextArea.TextArea', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['HTMLTable'] = $p['___import___']('pyjamas.ui.HTMLTable.HTMLTable', null, null, false);
	$m['HTMLPanel'] = $p['___import___']('pyjamas.ui.HTMLPanel.HTMLPanel', null, null, false);
	$m['DateField'] = $p['___import___']('pyjamas.ui.Calendar.DateField', null, null, false);
	$m['Calendar'] = $p['___import___']('pyjamas.ui.Calendar.Calendar', null, null, false);
	$m['CalendarPopup'] = $p['___import___']('pyjamas.ui.Calendar.CalendarPopup', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['ListBox'] = $p['___import___']('pyjamas.ui.ListBox.ListBox', null, null, false);
	$m['FormPanel'] = $p['___import___']('pyjamas.ui.FormPanel.FormPanel', null, null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
	$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', null, null, false);
	$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', null, null, false);
	$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
	$m['HyperlinkImage'] = $p['___import___']('pyjamas.ui.HyperlinkImage.HyperlinkImage', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
	$m['JSONProxy'] = $p['___import___']('pyjamas.JSONService.JSONProxy', null, null, false);
	$m['HTTPRequest'] = $p['___import___']('pyjamas.HTTPRequest.HTTPRequest', null, null, false);
	$m['json'] = $p['___import___']('json', null);
	$m['Abstract_View'] = $p['___import___']('common.Abstract_View', null, null, false);
	$m['Data_Service'] = $p['___import___']('common.Data_Service', null, null, false);
	$m['Reports_Grid'] = $p['___import___']('common.Reports_Grid', null, null, false);
	$m['Report_Date_Field'] = $p['___import___']('common.Report_Date_Field', null, null, false);
	$m['ADD_ROW_MSG'] = 'add-row-msg';
	$m['DEL_ROW_MSG'] = 'del-row-msg';
	$m['EDT_ROW_MSG'] = 'edt-row-msg';
	$m['SEL_ROW_MSG'] = 'sel-row-msg';
	$m['CNG_ROW_MSG'] = 'cng-row-msg';
	$m['DESEL_ROW_MSG'] = 'desel-row-msg';
	$m['CAL_DATE_MSG'] = 'cal-date-msg';
	$m['COMMIT_MLS_MSG'] = 'commit-mls-msg';
	$m['COMMIT_MLS_MSG'] = 'commit-mls-msg';
	$m['GET_MLS_MSG'] = 'get-mls-msg';
	$m['SUCC_MSG'] = '\n<div class="alert alert-success fade in">\n     <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n     <strong>Success!</strong> Data submitted.\n</div>\n';
	$m['ERR_MSG'] = '\n<div class="alert alert-danger fade in">\n     <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n     <strong>Oh, snap!</strong> Cannot do that. Try to use different project name.\n</div>\n';
	$m['DATE_MATCHER'] = '^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$';
	$m['Milestones_Editor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'milestones';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var spacer3,spacer2,spacer1;
			$m['SimplePanel']['__init__'](self);
			self['hpanel'] = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{'Width':'755px'}]);
			self['hpanel']['setVerticalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_TOP'));
			self['$$name'] = $m['TextBox']();
			self['$$name']['setStyleName']('form-control');
			self['start'] = $pyjs_kwargs_call(null, $m['Report_Date_Field'], null, null, [{'cal_ID':'start'}]);
			self['start']['getTextBox']()['setStyleName']('form-control');
			self['start']['setRegex']($m['DATE_MATCHER']);
			self['start']['appendValidListener']($p['getattr'](self, '_display_ok'));
			self['start']['appendInvalidListener']($p['getattr'](self, '_display_error'));
			self['start']['validate'](null);
			self['end'] = $pyjs_kwargs_call(null, $m['Report_Date_Field'], null, null, [{'cal_ID':'end'}]);
			self['end']['getTextBox']()['setStyleName']('form-control');
			self['end']['setRegex']($m['DATE_MATCHER']);
			self['end']['appendValidListener']($p['getattr'](self, '_display_ok'));
			self['end']['appendInvalidListener']($p['getattr'](self, '_display_error'));
			self['end']['validate'](null);
			self['status'] = $m['ListBox']();
			self['status']['addItem']('Active');
			self['status']['addItem']('Inactive');
			self['status']['setVisibleItemCount'](0);
			self['status']['setStyleName']('form-control input-lg');
			self['status']['setSize']('100px', '34px');
			spacer1 = $pyjs_kwargs_call(null, $m['Label'], null, null, [{'Width':'10px'}]);
			spacer2 = $pyjs_kwargs_call(null, $m['Label'], null, null, [{'Width':'10px'}]);
			spacer3 = $pyjs_kwargs_call(null, $m['Label'], null, null, [{'Width':'10px'}]);
			self['add_btn'] = $m['Button']('Add');
			self['add_btn']['setStyleName']('btn btn-primary');
			self['del_btn'] = $m['Button']('Delete');
			self['del_btn']['setStyleName']('btn btn-danger');
			self['hpanel']['add']($p['getattr'](self, '$$name'));
			self['hpanel']['add'](spacer1);
			self['hpanel']['add']($p['getattr'](self, 'status'));
			self['hpanel']['add'](spacer2);
			self['hpanel']['add']($p['getattr'](self, 'start'));
			self['hpanel']['add']($p['getattr'](self, 'end'));
			self['hpanel']['add']($p['getattr'](self, 'add_btn'));
			self['hpanel']['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{'Width':'10px'}]));
			self['hpanel']['add']($p['getattr'](self, 'del_btn'));
			return null;
		}
	, 1, [null,null,['self']]);
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
		$method = $pyjs__bind_method2('get_status', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['status']['getItemText'](self['status']['getSelectedIndex']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_status'] = $method;
		$method = $pyjs__bind_method2('get_milestone_data', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var end_txt,$and2,$and1,$and3,start_txt,valid,name_txt,data,status_txt;
			valid = false;
			name_txt = self['get_name_txt']();
			status_txt = self['get_status']();
			start_txt = self['start']['getTextBox']()['getText']();
			end_txt = self['end']['getTextBox']()['getText']();
			data = $p['list']([name_txt, status_txt, start_txt, end_txt]);
			if ($p['bool'](($p['bool']($and1=($p['cmp']($p['len'](name_txt['strip']()), 0) == 1))?($p['bool']($and2=$p['op_eq']($p['getattr']($p['getattr'](self, 'start'), 'valid'), true))?$p['op_eq']($p['getattr']($p['getattr'](self, 'end'), 'valid'), true):$and2):$and1))) {
				valid = true;
			}
			return $p['tuple']([valid, data]);
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
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Milestones_Editor', $p['tuple']($bases), $data);
	})();
	$m['Milestones_Model'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'milestones';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['data'] = $p['list']([]);
			self['data_deleted'] = $p['list']([]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add_row', function(new_data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				new_data = arguments[1];
			}
			var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,el,$iter1_iter,$iter2_idx,exist,$iter1_array,$iter2_type,milestone_name,$iter2_array,$iter1_idx;
			milestone_name = new_data['__getitem__'](0);
			exist = false;
			$iter1_iter = $p['getattr'](self, 'data');
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				el = $iter1_nextval['$nextval'];
				if ($p['bool']($p['op_eq'](el['__getitem__'](1), milestone_name))) {
					exist = true;
					break;
				}
			}
			if ($p['bool'](!$p['bool'](exist))) {
				$iter2_iter = $p['getattr'](self, 'data_deleted');
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					el = $iter2_nextval['$nextval'];
					if ($p['bool']($p['op_eq'](el['__getitem__'](1), milestone_name))) {
						exist = true;
						break;
					}
				}
			}
			if ($p['bool'](!$p['bool'](exist))) {
				self['data']['append']($p['list']([null, milestone_name, new_data['__getitem__'](1), new_data['__getitem__'](2), new_data['__getitem__'](3)]));
			}
			return !$p['bool'](exist);
		}
	, 1, [null,null,['self'],['new_data']]);
		$cls_definition['add_row'] = $method;
		$method = $pyjs__bind_method2('remove_row', function(row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}
			var $sub2,row_data,$sub1;
			row_data = $p['getattr'](self, 'data')['__getitem__']($p['__op_sub']($sub1=row,$sub2=1));
			self['data']['remove'](row_data);
			if ($p['bool']((row_data['__getitem__'](0) !== null))) {
				row_data['__setitem__'](2, 'Deleted');
				self['data_deleted']['append'](row_data);
			}
			return null;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['remove_row'] = $method;
		$method = $pyjs__bind_method2('edit_row', function(row, new_data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				new_data = arguments[2];
			}
			var $sub10,$sub9,$sub8,$sub3,$sub7,$sub6,$sub5,$sub4;
			$p['getattr'](self, 'data')['__getitem__']($p['__op_sub']($sub3=row,$sub4=1))['__setitem__'](1, new_data['__getitem__'](0));
			$p['getattr'](self, 'data')['__getitem__']($p['__op_sub']($sub5=row,$sub6=1))['__setitem__'](2, new_data['__getitem__'](1));
			$p['getattr'](self, 'data')['__getitem__']($p['__op_sub']($sub7=row,$sub8=1))['__setitem__'](3, new_data['__getitem__'](2));
			$p['getattr'](self, 'data')['__getitem__']($p['__op_sub']($sub9=row,$sub10=1))['__setitem__'](4, new_data['__getitem__'](3));
			return null;
		}
	, 1, [null,null,['self'],['row'],['new_data']]);
		$cls_definition['edit_row'] = $method;
		$method = $pyjs__bind_method2('get_row', function(row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}
			var $sub12,row_data,$sub11;
			row_data = $p['getattr'](self, 'data')['__getitem__']($p['__op_sub']($sub11=row,$sub12=1));
			return row_data;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['get_row'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Milestones_Model', $p['tuple']($bases), $data);
	})();
	$m['Milestones_Controller'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'milestones';
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
			self['process_msg']($m['GET_MLS_MSG']);
			return null;
		}
	, 1, [null,null,['self'],['model'],['view']]);
		$cls_definition['register'] = $method;
		$method = $pyjs__bind_method2('process_msg', function(msg) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			} else {
				var self = arguments[0];
				msg = arguments[1];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']));

			}
			var new_data,cal_id,$add2,row_data,grid,editor,$add1,data,row;
			grid = $p['getattr']($p['getattr'](self, 'view'), 'grid');
			editor = $p['getattr']($p['getattr'](self, 'view'), 'editor');
			if ($p['bool']($p['op_eq'](msg, $m['ADD_ROW_MSG']))) {
				data = args['__getitem__'](0);
				if ($p['bool'](self['model']['add_row'](data))) {
					grid['add_row'](data);
					editor['$$name']['setText']('');
					editor['add_btn']['setEnabled'](false);
					editor['start']['getTextBox']()['setText']('');
					editor['end']['getTextBox']()['setText']('');
					$p['getattr'](editor, 'start')['valid'] = null;
					$p['getattr'](editor, 'end')['valid'] = null;
				}
				editor['$$name']['setFocus'](true);
			}
			if ($p['bool']($p['op_eq'](msg, $m['DEL_ROW_MSG']))) {
				row = args['__getitem__'](0);
				self['model']['remove_row'](row);
				grid['remove_row'](row);
				editor['del_btn']['setEnabled'](false);
				editor['$$name']['setText']('');
				editor['$$name']['setFocus'](true);
				editor['add_btn']['setText']('Add');
				editor['add_btn']['setEnabled'](false);
				editor['start']['getTextBox']()['setText']('');
				editor['end']['getTextBox']()['setText']('');
			}
			if ($p['bool']($p['op_eq'](msg, $m['SEL_ROW_MSG']))) {
				row = args['__getitem__'](0);
				row_data = self['model']['get_row'](row);
				editor['$$name']['setText'](row_data['__getitem__'](1));
				editor['status']['selectValue'](row_data['__getitem__'](2));
				editor['start']['getTextBox']()['setText'](row_data['__getitem__'](3));
				editor['end']['getTextBox']()['setText'](row_data['__getitem__'](4));
				editor['add_btn']['setText']('Change');
				editor['add_btn']['setEnabled'](true);
				editor['del_btn']['setEnabled'](true);
				editor['$$name']['setFocus'](true);
			}
			if ($p['bool']($p['op_eq'](msg, $m['DESEL_ROW_MSG']))) {
				editor['add_btn']['setText']('Add');
				editor['del_btn']['setEnabled'](false);
				editor['add_btn']['setEnabled'](false);
				editor['$$name']['setFocus'](true);
				editor['$$name']['setText']('');
				editor['start']['getTextBox']()['setText']('');
				editor['end']['getTextBox']()['setText']('');
			}
			if ($p['bool']($p['op_eq'](msg, $m['EDT_ROW_MSG']))) {
				row = args['__getitem__'](0);
				new_data = args['__getitem__'](1);
				self['model']['edit_row'](row, new_data);
				grid['change_row'](row, new_data);
			}
			if ($p['bool']($p['op_eq'](msg, $m['CAL_DATE_MSG']))) {
				self['_validate_editor']();
				cal_id = args['__getitem__'](0);
				if ($p['bool']($p['op_eq'](cal_id, 'start'))) {
					self['view']['editor']['end']['getTextBox']()['setFocus'](true);
				}
				else {
					if ($p['bool'](self['view']['editor']['add_btn']['isEnabled']())) {
						self['view']['editor']['add_btn']['setFocus'](true);
					}
				}
			}
			if ($p['bool']($p['op_eq'](msg, $m['COMMIT_MLS_MSG']))) {
				data = $p['__op_add']($add1=$p['getattr']($p['getattr'](self, 'model'), 'data'),$add2=$p['getattr']($p['getattr'](self, 'model'), 'data_deleted'));
				self['remote']['sendRequest']('send_milestones', $p['dict']([['message', $m['json']['dumps'](data)]]), self);
				self['view']['submit_btn']['setEnabled'](false);
			}
			if ($p['bool']($p['op_eq'](msg, $m['GET_MLS_MSG']))) {
				self['remote']['sendRequest']('get_milestones', $p['dict']([['message', $m['json']['dumps'](null)]]), self);
			}
			return null;
		}
	, 1, ['args',null,['self'],['msg']]);
		$cls_definition['process_msg'] = $method;
		$method = $pyjs__bind_method2('onRemoteError', function(code, errorobj, request_info) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				code = arguments[1];
				errorobj = arguments[2];
				request_info = arguments[3];
			}

			self['view']['msg_lbl']['setHTML']($m['ERR_MSG']);
			return null;
		}
	, 1, [null,null,['self'],['code'],['errorobj'],['request_info']]);
		$cls_definition['onRemoteError'] = $method;
		$method = $pyjs__bind_method2('onRemoteResponse', function(response, request_info) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
				request_info = arguments[2];
			}
			var $iter3_idx,$iter3_array,$iter3_iter,$iter3_type,$iter3_nextval,data,row;
			$p['getattr'](self, 'model')['data'] = $m['json']['loads'](response['__getitem__']('data'));
			$p['getattr'](self, 'model')['data_deleted'] = $p['list']([]);
			if ($p['bool']($p['op_eq'](response['__getitem__']('msg'), 'get_milestones'))) {
				data = $p['getattr']($p['getattr'](self, 'model'), 'data');
				$iter3_iter = data;
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					row = $iter3_nextval['$nextval'];
					self['view']['grid']['add_row']($p['list']([row['__getitem__'](1), row['__getitem__'](2), row['__getitem__'](3), row['__getitem__'](4)]));
				}
			}
			else {
				self['view']['msg_lbl']['setHTML']($m['SUCC_MSG']);
			}
			self['view']['submit_btn']['setEnabled'](true);
			return null;
		}
	, 1, [null,null,['self'],['response'],['request_info']]);
		$cls_definition['onRemoteResponse'] = $method;
		$method = $pyjs__bind_method2('_validate_editor', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var valid,data;
			var $tupleassign1 = $p['__ass_unpack'](self['view']['editor']['get_milestone_data'](), 2, null);
			valid = $tupleassign1[0];
			data = $tupleassign1[1];
			if ($p['bool'](valid)) {
				self['view']['editor']['add_btn']['setEnabled'](true);
			}
			else {
				self['view']['editor']['add_btn']['setEnabled'](false);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_validate_editor'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Milestones_Controller', $p['tuple']($bases), $data);
	})();
	$m['Milestones_View'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'milestones';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Abstract_View']['__init__'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var spacer3,spacer2,hpanel,spacer1;
			self['panel'] = $m['VerticalPanel']();
			self['panel']['setSpacing'](10);
			spacer1 = $m['Label']();
			spacer1['setHeight']('10px');
			spacer2 = $m['Label']();
			spacer2['setHeight']('10px');
			self['tbl_panel'] = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{'Width':'755px'}]);
			self['grid'] = $m['Reports_Grid']();
			self['grid']['create_grid'](1, 4, $p['list'](['Milestone Name', 'Milestone State', 'Start Date', 'End Date']));
			self['tbl_panel']['add']($p['getattr'](self, 'grid'));
			self['editor'] = $m['Milestones_Editor']();
			self['submit_btn'] = $m['Button']('Submit', $p['getattr'](self, 'send_data'));
			self['submit_btn']['setStyleName']('btn btn-primary btn-lg');
			hpanel = $m['HorizontalPanel']();
			hpanel['setHorizontalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_RIGHT'));
			hpanel['add']($p['getattr'](self, 'submit_btn'));
			self['msg_lbl'] = $pyjs_kwargs_call(null, $m['HTMLPanel'], null, null, [{'Width':'755px'}, '']);
			self['root'] = $m['RootPanel']('projects_');
			self['root']['add'](spacer1);
			self['root']['add']($p['getattr']($p['getattr'](self, 'editor'), 'hpanel'));
			self['root']['add'](spacer2);
			self['root']['add']($p['getattr'](self, 'tbl_panel'));
			spacer3 = $m['Label']();
			spacer3['setHeight']('20px');
			self['root']['add']($p['getattr'](self, 'msg_lbl'));
			self['root']['add'](spacer3);
			self['root']['add'](hpanel);
			self['root']['add']($pyjs_kwargs_call(null, $m['Label'], null, null, [{'Height':'20px'}]));
			self['_add_listeners']();
			self['_iniate_states']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('_add_listeners', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['editor']['add_btn']['addClickListener']($p['getattr'](self, 'on_add_btn_click'));
			self['editor']['del_btn']['addClickListener']($p['getattr'](self, 'on_del_btn_click'));
			self['editor']['$$name']['addKeyboardListener'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_add_listeners'] = $method;
		$method = $pyjs__bind_method2('_iniate_states', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['editor']['add_btn']['setEnabled'](false);
			self['editor']['del_btn']['setEnabled'](false);
			self['editor']['$$name']['setFocus'](true);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_iniate_states'] = $method;
		$method = $pyjs__bind_method2('register', function(controller) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				controller = arguments[1];
			}

			self['controller'] = controller;
			self['grid']['register'](controller);
			self['editor']['start']['register'](controller);
			self['editor']['end']['register'](controller);
			return null;
		}
	, 1, [null,null,['self'],['controller']]);
		$cls_definition['register'] = $method;
		$method = $pyjs__bind_method2('on_add_btn_click', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var valid,data;
			var $tupleassign2 = $p['__ass_unpack'](self['editor']['get_milestone_data'](), 2, null);
			valid = $tupleassign2[0];
			data = $tupleassign2[1];
			if ($p['bool']($p['op_eq'](self['editor']['add_btn']['getText'](), 'Add'))) {
				self['controller']['process_msg']($m['ADD_ROW_MSG'], data);
			}
			else {
				self['controller']['process_msg']($m['EDT_ROW_MSG'], $p['getattr']($p['getattr'](self, 'grid'), 'selected_row'), data);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['on_add_btn_click'] = $method;
		$method = $pyjs__bind_method2('on_del_btn_click', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			if ($p['bool'](($p['cmp']($p['getattr']($p['getattr'](self, 'grid'), 'selected_row'), 0) == 1))) {
				self['controller']['process_msg']($m['DEL_ROW_MSG'], $p['getattr']($p['getattr'](self, 'grid'), 'selected_row'));
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['on_del_btn_click'] = $method;
		$method = $pyjs__bind_method2('send_data', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['controller']['process_msg']($m['COMMIT_MLS_MSG']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['send_data'] = $method;
		$method = $pyjs__bind_method2('onKeyDown', function(sender, keycode, modifiers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyDown'] = $method;
		$method = $pyjs__bind_method2('onKeyUp', function(sender, keycode, modifiers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}
			var valid,data;
			var $tupleassign3 = $p['__ass_unpack'](self['editor']['get_milestone_data'](), 2, null);
			valid = $tupleassign3[0];
			data = $tupleassign3[1];
			if ($p['bool'](valid)) {
				self['editor']['add_btn']['setEnabled'](true);
			}
			else {
				self['editor']['add_btn']['setEnabled'](false);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyUp'] = $method;
		$method = $pyjs__bind_method2('onKeyPress', function(sender, keycode, modifiers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}
			var $and4,$and5,$and6,$and7,valid,data;
			var $tupleassign4 = $p['__ass_unpack'](self['editor']['get_milestone_data'](), 2, null);
			valid = $tupleassign4[0];
			data = $tupleassign4[1];
			if ($p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_ESCAPE')))) {
			}
			else if ($p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_ENTER')))) {
				if ($p['bool'](($p['bool']($and4=$p['op_eq'](self['editor']['add_btn']['getText'](), 'Add'))?self['editor']['add_btn']['isEnabled']():$and4))) {
					self['controller']['process_msg']($m['ADD_ROW_MSG'], data);
				}
				else if ($p['bool'](($p['bool']($and6=$p['op_eq'](self['editor']['add_btn']['getText'](), 'Change'))?self['editor']['add_btn']['isEnabled']():$and6))) {
					self['controller']['process_msg']($m['EDT_ROW_MSG'], $p['getattr']($p['getattr'](self, 'grid'), 'selected_row'), data);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyPress'] = $method;
		var $bases = new Array($m['Abstract_View']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Milestones_View', $p['tuple']($bases), $data);
	})();
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
		$m['pyjd']['setup']('milestones.html');
		$m['view'] = $m['Milestones_View']();
		$m['view']['onModuleLoad']();
		$m['model'] = $m['Milestones_Model']();
		$m['controller'] = $m['Milestones_Controller']();
		$m['controller']['register']($m['model'], $m['view']);
		$m['view']['register']($m['controller']);
		$m['pyjd']['run']();
	}
	return this;
}; /* end milestones */


/* end module: milestones */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.ScrollPanel.ScrollPanel', 'pyjamas.ui.ScrollPanel', 'pyjamas.ui.TextArea.TextArea', 'pyjamas.ui.TextArea', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.HTMLTable.HTMLTable', 'pyjamas.ui.HTMLTable', 'pyjamas.ui.HTMLPanel.HTMLPanel', 'pyjamas.ui.HTMLPanel', 'pyjamas.ui.Calendar.DateField', 'pyjamas.ui.Calendar', 'pyjamas.ui.Calendar.Calendar', 'pyjamas.ui.Calendar.CalendarPopup', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.FormPanel.FormPanel', 'pyjamas.ui.FormPanel', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.HyperlinkImage.HyperlinkImage', 'pyjamas.ui.HyperlinkImage', 'pyjamas.Window', 'pyjamas.ui.HasAlignment', 'pyjamas.JSONService.JSONProxy', 'pyjamas.JSONService', 'pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest', 'json', 'common.Abstract_View', 'common', 'common.Data_Service', 'common.Reports_Grid', 'common.Report_Date_Field']
*/
