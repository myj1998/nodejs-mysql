var cmsCategoryConfig = {
	data: function() {
		return {
			list: [],
			edit: {
				isAdd: true,
				model: {
					id: "",
					name: "",
					parent_id: 0
				},
				isShow: false,
			}
		}
	},
	created: function() {
		var that = this;
		$.ajax({
			url: "/category/list",
			type: "get",
			success: function(res) {
				that.list = res.data;
				console.log(res.data);
			}
		})
	},
	computed: {
		category1st: function() {
			var res = [];
			for (var i = 0; i < this.list.length; i++) {
				if (this.list[i].parent_id === 0) {
					res.push(this.list[i]);
				}
			}
			return res;
		}
	},
	methods: {
		remove: function(id) {
			if (!confirm("是否真删!!!")) return;
			var that = this;
			$.ajax({
				url: "/category/delete",
				type: "post",
				data: {
					id: id
				},
				success: function(res) {
					alert(res.msg);
					if (res.status) {
						for (var i = 0; i < that.list.length; i++) {
							if (that.list[i].id === id) break;
						}
						that.list.splice(i, 1);
					}
				}
			});
		},
		cancel: function() {
			this.edit.isShow = false;
		},
		editEnter: function(id) {
			this.edit.isAdd = false;
			this.edit.isShow = true;
			for (var i = 0; i < this.list.length; i++) {
				if (this.list[i].id === id) break;
			}
			console.log(id);
			this.edit.model.name = this.list[i].name;
			this.edit.model.id = this.list[i].id;
			this.edit.model.parent_id = this.list[i].parent_id;

		},
		addEnter: function() {
			this.edit.isAdd = true;
			this.edit.isShow = true;
		},
		save: function() {
			var id = this.edit.model.id;
			for (var i = 0; i < this.list.length; i++) {
				if (this.list[i].id === id) break;
			}
			if (this.edit.isAdd) {
				this._addData();
			} else {
				this._editData(i);
			}
			this.edit.isShow = false;
		},
		_addData: function() {
			var that = this;
			var id = this.list[this.list.length - 1].id + 1;
			$.ajax({
				url: "/category/add",
				type: "post",
				data: {
					name: this.edit.model.name,
					parent_id: this.edit.model.parent_id
				},
				success: function(res) {
					if (res.status) {
						that.edit.model.id = id;
						that.list.push(that.edit.model);
						alert(res.msg);
					}
				}
			});
		},
		_editData: function(i) {
			console.log(i);
			var that = this;
			$.ajax({
				url: "/category/edit",
				type: "post",
				data: {
					name: this.edit.model.name,
					id: this.edit.model.id,
					parent_id: this.edit.model.parent_id,
				},
				success: function(res) {
					if (res.status) {
						console.log(that.edit.model);
						for (var j = 0; i < that.list.length; j++) {
							if (that.list[j].id === that.edit.model.parent_id) break;
						}
						that.edit.model.parent_name = that.list[j].name;
						that.list.splice(i, 1, that.edit.model);
					}
					alert(res.msg);
				}
			});
		}
	}
};
var CmsCategory = Vue.component('cms-category', function(resolve) {
	$.get("/cms-category/index.html",
		function(htmlStr) {
			cmsCategoryConfig.template = htmlStr;
			resolve(cmsCategoryConfig);
		}
	);
});
