//全局注册cms-app组件
var cmsAppConfig = {};
Vue.component("cms-app", function(resolve) {
	$.get("/cms-app/index.html", function(htmlStr) {
		cmsAppConfig.template = htmlStr;
		resolve(cmsAppConfig);
		// resolve({
		// 	template: htmlStr
		// });
	})
})
