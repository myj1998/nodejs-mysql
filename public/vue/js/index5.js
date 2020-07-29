new Vue({
	el: '#root',
	data: {
		list: [],
		categoryList: [],
		edit: {
			isEdit: false,
			type: true,
			model: {
				cate_1st: 0,
				cate_2nd: 0
			}
		}
	},
	computed: {
		categoryList1st: function() {
			var result = [];
			this.categoryList.forEach(function(item) {
				if (item.parent_id === 0) result.push(item);
			});
			return result;
		},
		categoryList2nd: function() {
			var result = [];
			if (this.edit.model.cate_1st !== 0) {
				var that = this;
				this.categoryList.forEach(function(item) {
					if (item.parent_id === that.edit.model.cate_1st) result.push(item);
				});
				return result;
			}
		}
	},
	created: function() {
		var that = this;
		// 一般在这里发送ajax请求页面需要的初始数据
		$.ajax({
			url: '/article/list?pagesize=5&pageindex=1',
			type: 'get',
			success: function(result) {
				that.list = result.data;
			}
		});
		$.ajax({
			url: '/category/list/',
			type: 'get',
			success: function(result) {
				that.categoryList = result.data;
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
				url: '/article/delete',
				type: 'post',
				data: {
					id: id
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
		}
	}
});
