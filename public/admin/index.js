new Vue({
	el: '#root',
	data: {
		list: [],
		edit: {
			defaultAvatar: '../images/avatar/default.jpg',
			isEdit: false,  // 标识是否进入了编辑状态
			type: true,		// 标识是新增true还是修改false
			model: { id: 0, username: '', password: '', fullname: '', sex: '男', tel: '', email: '', avatar: '../images/avatar/default.jpg' },
			oldAvatar: ''	// 用来记录用户进入编辑状态时当前的avatar
		}
	},
	created: function() {
		var that = this;
		// 请求所有管理员信息
		$.ajax({
			type: 'get',
			url: '/admin/list',
			success: function(result) { that.list = result.data; }
		});
	},
	methods: {
		// 上传控件改变(预览)
		uploadChangeHandler: function(e) {
			var that = this;
			var reader = new FileReader();
			reader.onload = function() {
				that.edit.model.avatar = this.result;
			};
			reader.readAsDataURL(e.target.files[0]);
			this.file = e.target.files[0];
		},
		// 进入编辑-新增 状态
		beginAdd: function() {
			this.edit.model.id = 0;
			this.edit.model.username = '';
			this.edit.model.password = '';
			this.edit.model.fullname = '';
			this.edit.model.sex = '男';
			this.edit.model.tel = '';
			this.edit.model.email = '';
			this.edit.model.avatar = '../images/avatar/default.jpg';
			
			this.edit.type = true;
			this.edit.isEdit = true;
		},
		// 进入编辑-修改 状态
		beginUpdate: function(item) {
			this.edit.model.id = item.id;
			this.edit.model.username = item.username;
			this.edit.model.password = item.password;
			this.edit.model.fullname = item.fullname;
			this.edit.model.sex = item.sex;
			this.edit.model.tel = item.tel;
			this.edit.model.email = item.email;
			this.edit.model.avatar = item.avatar;
			this.edit.oldAvatar = item.avatar;
			
			this.edit.type = false;
			this.edit.isEdit = true;
		},
		// 退出编辑状态
		cancelEdit: function() {
			this.edit.isEdit = false;
		},
		// 保存
		save: function() {
			if(this.edit.type)
				this._saveWithAdd();
			else
				this._saveWithUpdate();
		},
		_saveWithAdd: function() {
			// 发送ajax
			var that = this;
			$.ajax({
				type: 'post',
				url: '/admin/register',
				data: this.edit.model,
				success: function(result) {
					if(result.status) {
						that.edit.model.id = result.data.id;
						that.list.push(that.edit.model);
						that.edit.model = { id: 0, username: '', password: '', fullname: '', sex: '男', tel: '', email: '', avatar: '../images/avatar/default.jpg' };
						that.edit.isEdit = false;				// 结束编辑状态
						alert('新增成功！');
					} else alert(result.msg);
				}
			});
		},
		_saveWithUpdate: function() {
			var that = this;
			function _update() {
				$.ajax({
					type: 'post',
					url: '/admin/info',
					data: that.edit.model,
					success: function(result) {
						if(result.status) {
							for(var i = 0; i < that.list.length; i++) {
								if(that.list[i].id === that.edit.model.id) break;
							}
							that.list.splice(i, 1, that.edit.model);
							that.edit.model = { id: 0, username: '', password: '', fullname: '', sex: '男', tel: '', email: '', avatar: '../images/avatar/default.jpg' };;
							that.edit.isEdit = false;
							alert('修改成功');
						} 
						else alert(result.msg);
					}
				});
			}
			// 情况一：用户没修改头像
			if(this.edit.oldAvatar === this.edit.model.avatar) { 		
				_update();
			} 
			// 情况二：用户修改了头像(原: 默认  新: 非默认)
			else if(this.edit.oldAvatar === this.edit.defaultAvatar) {	
				var fd = new FormData();
				fd.append('file', this.file);
				fd.append('type', 'avatar');
				$.ajax({
					url: '/upload/common/',
					type: 'post',
					data: fd,
					processData: false,
					contentType: false,
					success: function(result) {
						that.edit.model.avatar = '..' + result.data.slice(result.data.indexOf('/images'));
						_update();
					}
				})
			}
			// 情况三：用户修改了头像（原: 非默认  新: 默认）
			else if(this.edit.model.avatar === this.edit.defaultAvatar) {
				$.ajax({
					type: 'post',
					url: '/upload/delete',
					data: { src: this.edit.oldAvatar.slice(1) },
					success: function() {
						_update();
					}
				});
			}
			// 情况四：用户修改了头像（原: 非默认  新: 非默认）
			else {
				$.ajax({
					type: 'post',
					url: '/upload/delete',
					data: { src: this.edit.oldAvatar.slice(1) },
					success: function() {
						var fd = new FormData();
						fd.append('file', that.file);
						fd.append('type', 'avatar');
						$.ajax({
							url: '/upload/common/',
							type: 'post',
							data: fd,
							contentType: false,
							processData: false,
							success: function(result) {
								that.edit.model.avatar = '..' + result.data.slice(result.data.indexOf('/images'));
								_update();
							}
						})
					}
				});
			}
		}
	}
});
