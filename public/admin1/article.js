new Vue({
	el: "#root",
	data: {
		previewImg: '',
		list: [],
		categoryList: [],
		edit: {
			isEdit: false,
			type: true,
			isAdd: true,
			model: {
				cate_1st_name: 0,
				cate_2nd_name: 0,
				cate_1st: 0,
				cate_2nd: 0,
				title: "",
				description: "",
				main_photo: "",
				content: "",
				create_time: "",
				update_time: "",
				id: 0,
			}
		}
	},
	//加载数据
	created: function() {
		var that = this;
		//一般在这里发送ajax请求页面需要的初始数据
		$.ajax({
			url: "/article/list?pagesize=5&pageindex=1",
			type: "get",
			success: function(res) {
				that.list = res.data;
			}

		});
		//获取所有的分类
		$.ajax({
			url: "/category/list",
			type: "get",
			success: function(res) {
				that.categoryList = res.data;
			}

		});
	},
	computed: {
		//获取一级列表无父级分类的列表（父级id==0）
		categoryList1st: function() {
			//filter
			var result = [];
			this.categoryList.forEach(function(item) {
				if (item.parent_id === 0) {
					result.push(item);
				}
			});
			return result;
		},
		//根据所选中的一级列表 来获取对应的二级列表
		categoryList2st: function() {
			var result = [];
			if (this.edit.model.cate_1st !== 0) {
				// 定义一个that 来指向this  
				//因为 遍历函数中的this指的是当前对象
				var that = this;
				this.categoryList.forEach(function(item) {
					//判断此对象的父级id是否等于所选中的id
					if (item.parent_id === that.edit.model.cate_1st) {
						result.push(item);
					}
				});
			}
			return result;
		},
	},
	methods: {
		//删除
		remove: function(id) {
			//询问用户是否删除
			if (!confirm("是否真删？")) return;
			var that = this;
			//发送ajax
			$.ajax({
				url: "/article/delete",
				type: "post",
				data: {
					id: id
				},
				success: function(res) {
					//找下标
					for (var i = 0; i < that.list.length; i++) {
						if (that.list[i].id === id) break;
					}
					//根据下标从数组中删除
					that.list.splice(i, 1);
					//提示用户删除成功
					alert("删除成功！");
				}
			});
		},
		//取消
		cancel: function() {
			this.edit.model = {
				cate_1st_name: 0,
				cate_2nd_name: 0,
				cate_1st: 0,
				cate_2nd: 0,
				title: "",
				description: "",
				main_photo: "",
				content: "",
				create_time: "",
				update_time: "",
				id: 0,
			};
			this.edit.isEdit = false;
		},
		//开始修改
		enterEdit: function(id) {
			this.edit.model = {
				cate_1st_name: 0,
				cate_2nd_name: 0,
				cate_1st: 0,
				cate_2nd: 0,
				title: "",
				description: "",
				main_photo: "",
				content: "",
				create_time: "",
				update_time: "",
				id: 0,
			};
			var that = this;
			this.edit.isAdd = false;
			this.edit.isEdit = true;
			$.ajax({
				url: "/article/detail",
				type: "get",
				data: {
					id: id
				},
				success: function(res) {
					for (var i = 0; i < that.list.length; i++) {
						if (that.list[i].id === id) break;
					}
					that.edit.model.id = that.list[i].id;
					that.edit.model.cate_1st = that.list[i].cate_1st;
					that.edit.model.cate_2nd = that.list[i].cate_2nd;
					that.edit.model.title = that.list[i].title;
					that.edit.model.description = that.list[i].description;
					that.edit.model.main_photo = that.list[i].main_photo;
					that.edit.model.create_time = that.list[i].create_time;
					that.edit.model.update_time = that.list[i].update_time;
					that.edit.model.content = res.data.content;
				}

			});
		},
		//增加
		save: function() {
			if (this.edit.isAdd) {
				this._addData();
			} else {
				this._editData();
			}
			this.edit.isEdit = false;
		},
		uploadChangeHandler: function(e) {
			//预览
			var that = this;
			var reader = new FileReader();
			//判断数据类型  object
			console.log(typeof reader);
			reader.onload = function() {
				console.log(this);
				that.edit.model.main_photo = this.result;
				//this会返回一个对象 对象里边有 result的属性  包含图片的地址
			}
			//将
			reader.readAsDataURL(e.target.files[0]);
			this.file = e.target.files[0]
			var fd = new FormData();
			fd.append("file", this.file);
			fd.append("type", "common")
			//上传到服务器
			$.ajax({
				url: "/upload/common/",
				type: "post",
				data: fd,
				contentType: false,
				processData: false,
				success: function(res) {
					//返回一个正确的图片储存地址
					that.edit.model.main_photo = res.data;
					console.log(that.edit.model);
				}


			});
		},
		_reget: function(item) {
			$.ajax({
				url: "/article/list?pagesize=10&pageindex=1",
				type: "get",
				success: function(res) {
					console.log(i);
					that.list = res.data;
					that.edit.model.item = that.list[0].item;
					console.log(that.list[0]);
					that.edit.model = {
						cate_1st_name: 0,
						cate_2nd_name: 0,
						cate_1st: 0,
						cate_2nd: 0,
						title: "",
						description: "",
						main_photo: "",
						content: "",
						create_time: "",
						update_time: "",
						id: 0,
					}
				}
			});
		},
		_addData: function() {
			var that = this;
			$.ajax({
				url: "/article/add",
				type: "post",
				data: this.edit.model,
				success: function(res) {
					if (res.status) {
						console.log(res);
						for (var i = 0; i < that.list.length; i++) {
							if (that.list[i].id === that.edit.model.id) break;
						}
						var first = that.edit.model.cate_1st - 1;
						var second = that.edit.model.cate_2nd - 1;
						that.edit.model.cate_1st_name = that.categoryList[first].name;
						that.edit.model.cate_2nd_name = that.categoryList[second].name;
						// that.edit.model.create_time = that.list[i].create_time;
						that.list.push(that.edit.model);
						alert(res.msg);
						var item = that.edit.model.create_time;
						that._reget(item);
					}
				}
			});
		},
		_editData: function() {
			var id = this.edit.model.id;
			var that = this;
			$.ajax({
				url: "/article/edit",
				type: "post",
				data: this.edit.model,
				success: function(res) {
					if (res.status) {
						for (var i = 0; i < that.list.length; i++) {
							if (that.list[i].id === id) break;
						}
						console.log(res);
						var first = that.edit.model.cate_1st - 1;
						var second = that.edit.model.cate_2nd - 1;
						that.edit.model.cate_1st_name = that.categoryList[first].name;
						that.edit.model.cate_2nd_name = that.categoryList[second].name;
						that.list.splice(i, 1, that.edit.model);
						alert(res.msg);
						that.edit.model = {
							cate_1st_name: 0,
							cate_2nd_name: 0,
							cate_1st: 0,
							cate_2nd: 0,
							title: "",
							description: "",
							main_photo: "",
							content: "",
							create_time: "",
							update_time: "",
							id: 0,
						}
					}
				}
			});
		}

	}

});
