var cmsAdminConfig = {
	data: function() {
		return {
			list: [],
			edit: {
				defaultAvatar: '../images/avatar/default.jpg',
				isEdit: false,
				type: true, //标识新增还是修改，新增为true，修改为false
				model: {
					id: 0,
					username: '',
					password: '',
					fullname: '',
					sex: '男',
					tel: '',
					email: '',
					avatar: '../images/avatar/default.jpg'
				},
				//记录用户进入编辑状态时的avatar
				oldAvatar: ''
			},
		}
	},
	//请求数据
	created: function() {
		var that = this;
		$.ajax({
			type: 'get',
			url: '/admin/list/',
			success: function(res) {
				that.list = res.data;
			}
		});
	},
	methods: {
		//上传图片
		uploadChangeHandler: function(e) {
			var that = this;
			var reader = new FileReader();
			reader.onload = function() {
				that.edit.model.avatar = this.result;
			}
			reader.readAsDataURL(e.target.files[0]);
			this.file = e.target.files[0];
		},
		//进入新增
		beginAdd: function() {
			this.edit.type = true;
			this.edit.isEdit = true;
			this.edit.model.id = 0;
			this.edit.model.username = '';
			this.edit.model.fullname = '';
			this.edit.model.password = '';
			this.edit.model.tel = '';
			this.edit.model.sex = '男';
			this.edit.model.email = '';
			this.edit.model.avatar = '../images/avatar/default.jpg';
		},
		//进入编辑
		beginUpdate: function(item) {
			this.edit.model.id = item.id;
			this.edit.model.username = item.username;
			this.edit.model.fullname = item.fullname;
			this.edit.model.password = item.password;
			this.edit.model.tel = item.tel;
			this.edit.model.sex = item.sex;
			this.edit.model.email = item.email;
			this.edit.model.avatar = item.avatar;
			this.edit.oldAvatar = item.avatar;
			this.edit.type = false;
			this.edit.isEdit = true;
		},
		//退出
		cancelEdit: function() {
			this.edit.isEdit = false;
		},
		//保存
		save: function() {
			if (this.edit.type) {
				this._saveWithAdd();
			} else {
				this._saveWithUpdate();
			}
		},
		_saveWithAdd: function() {
			var that = this;
			//发送ajax
			$.ajax({
				url: '/admin/register',
				type: 'post',
				data: this.edit.model,
				success: function(res) {
					if (res.status) {
						that.edit.model.id = res.data.id;
						that.list.push(that.edit.model);
						that.edit.model = {
							id: 0,
							username: '',
							password: '',
							fullname: '',
							sex: '男',
							tel: '',
							email: '',
							avatar: '../images/avatar/default.jpg'
						};
						that.edit.isEdit = false;
						alert("新增成功！");
					} else {
						alert(res.msg);
					}
				}

			})
		},
		_saveWithUpdate: function() {
			var that = this;

			function _update() {
				$.ajax({
					url: '/admin/info',
					type: 'post',
					data: that.edit.model,
					success: function(result) {
						if (result.status) {
							for (var i = 0; i < that.list.length; i++) {
								if (that.list[i].id === that.edit.model.id) break;
							}
							that.list.splice(i, 1, that.edit.model);
							that.edit.model = {
								id: 0,
								username: '',
								password: '',
								fullname: '',
								sex: '男',
								tel: '',
								email: '',
								avatar: '../images/avatar/default.jpg'
							};
							that.edit.isEdit = false;
							alert("修改成功！");
						} else {
							alert(result.msg);
						}
					}
				});
			};
			// 情况一:
			if (this.edit.oldAvatar === this.edit.model.avatar) {
				_update();
			}
			//情况二：用户修改了头像 原默认，新非默认
			else if (this.edit.oldAvatar === this.edit.defaultAvatar) {
				//上传到服务器
				var fd = new FormData();
				fd.append('file', this.file);
				fd.append('type', 'avatar');
				$.ajax({
					type: 'post',
					url: '/upload/common/',
					contentType: false,
					processData: false,
					data: fd,
					success: function(result) {
						that.edit.model.avatar = ".." + result.data.slice(result.data.indexOf('/images'));
						_update();
					}
				});
			}
			//情况三：用户修改了头像 原非默认，新默认
			else if (this.edit.model.avatar === this.edit.defaultAvatar) {
				$.ajax({
					type: 'post',
					url: '/upload/delete/',
					data: {
						src: this.edit.oldAvatar.slice(1)
					},
					success: function() {
						_update();
					}
				});
			}
			//情况四：用户修改了头像 原非默认，新非默认
			else {
				$.ajax({
					type: 'post',
					url: '/upload/delete/',
					data: {
						src: this.edit.oldAvatar.slice(1)
					},
					success: function(result) {
						var fr = new FormData();
						fr.append('file', that.file);
						fr.append('type', 'avatar');
						$.ajax({
							type: 'post',
							url: '/upload/common/',
							contentType: false,
							processData: false,
							data: fr,
							success: function(result) {
								that.edit.model.avatar = ".." + result.data.slice(result.data.indexOf('/images'));
								_update();
							}
						});
					}
				});
			}
		},

	}

};
var CmsAdmin = Vue.component('cms-admin', function(resolve) {
	$.get("/cms-admin/index.html",
		function(htmlStr) {
			cmsAdminConfig.template = htmlStr;
			resolve(cmsAdminConfig);
		}
	);
});
