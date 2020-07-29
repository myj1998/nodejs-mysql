var cmsTagConfig = {
	data: function() {
		return {
			list: [],
		}
	},
	created: function() {
		var that = this;
		$.ajax({
			url: "/tag/list",
			type: "get",
			success: function(res) {
				that.list = res.data;
			}
		});
	},
	computed: {

	},
	methods: {
		remove: function(id) {
			var that = this;
			for (var i = 0; i < this.list.length; i++) {
				if (this.list[i].id === id) break;
			}
			$.ajax({
				url: "/tag/delete",
				type: "post",
				data: {
					id: id
				},
				success: function(res) {
					if (res.status) {
						that.list.splice(i, 1);
					}
					alert(res.msg);
				}
			});
		},
		addenter:function(){
			
		}
	}
};
var CmsTag = Vue.component("csm-tag", function(resolve) {
	$.get("/cms-tag/index.html",
		function(htmlStr) {
			cmsTagConfig.template = htmlStr;
			resolve(cmsTagConfig);
		}
	);

});
