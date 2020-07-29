//全局注册cms-app组件
// var cmsMenuConfig = {};
Vue.component("cms-menu", function(resolve) {
	$.get("/cms-menu/index.html", function(htmlStr) {
		// cmsMenuConfig.template = htmlStr;
		// resolve(cmsAppConfig);
		resolve({
			template: htmlStr
		});
	})
})
