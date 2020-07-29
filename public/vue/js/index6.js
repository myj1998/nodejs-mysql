new Vue({
	el: '#root',
	data: {
		list: [],
		isEdit: false,
		index: 0,
		model: {
			id: 0,
			username: '',
			fullname: '',
			sex: '',
			tel: '',
			email: '',
			avatar: '',
		},
	},
	created: function() {
		var that = this;
		// 一般在这里发送ajax请求页面需要的初始数据
		$.ajax({
			url: '/admin/list',
			type: 'get',
			success: function(result) {
				that.list = result.data;
			}
		});
	},
	methods: {
		remove: function(id) {
			// 询问用户是否删除
			if (!confirm('确定？')) return;
			var that = this;
			//发送ajax进行删除
			$.ajax({
				url: '/admin/delete',
				type: 'post',
				data: {
					id: id,
				},
				success: function(result) {
					// 找下标
					for (var i = 0; i < that.list.length; i++) {
						if (that.list[i].id === id) break;
					}
					//根据下标从数组中删除
					that.list.splice(i, 1);
					// 提示用户删除成功
					alert('删除成功');
				}
			})
		},
		edit: function(id) {
			var that = this;
			that.isEdit = true;
			//发送ajax进行编辑
			$.ajax({
				url: '/admin/info',
				type: 'get',
				data: {
					id: that.model.id,
				},
				success: function(result) {
					// 找下标
					for (var i = 0; i < that.list.length; i++) {
						if (that.list[i].id === id) break;
					}
					that.index = i;
					that.model.id = that.list[i].id;
					that.model.username = that.list[i].username;
					that.model.fullname = that.list[i].fullname;
					that.model.sex = that.list[i].sex;
					that.model.tel = that.list[i].tel;
					that.model.email = that.list[i].email;
					that.model.avatar = that.list[i].avatar;
				},
			})
		},
		cancelEdit: function() {
			var that = this;
			//重置表单
			that.model = {
				id: 0,
				username: '',
				fullname: '',
				sex: '',
				tel: '',
				email: '',
				avatar: '',
			}
			//退出编辑状态
			that.isEdit = false;
		},
		save: function() {
			var that = this;
			$.ajax({
				url: '/admin/info',
				type: 'post',
				data: {
					id: that.model.id,
					username: that.model.username,
					fullname: that.model.fullname,
					sex: that.model.sex,
					tel: that.model.tel,
					email: that.model.email,
					avatar: that.model.avatar,
				},
				success: function(result) {
					that.list[that.index] = that.model;
					that.model = {
						id: 0,
						username: '',
						fullname: '',
						sex: '',
						tel: '',
						email: '',
						avatar: '',
					}
					that.isEdit = false;
					alert('修改成功');
				},
			});
		}
	}
});
