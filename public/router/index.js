var router = new VueRouter({
routes: [{
			path: "/article",
			component: CmsArticle
		},
		{
			path: "/admin",
			component: CmsAdmin
		},
		{
			path: "/category",
			component: CmsCategory
		},
		{
			path: "/tag",
			component: CmsTag
		}
	]
});
