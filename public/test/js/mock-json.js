//获取url参数对象
function GetRequest(str) {
	var theRequest = new Object();
	strs = str.split("&");
	for(var i = 0; i < strs.length; i++) {
		theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
	}
	return theRequest;
}
Random.extend({
	courses: ['音乐课', '舞蹈课', '地理课'],
	course: function(date) {
		return this.pick(this.courses)
	}
});
Mock.mock('/course/', 'get', {
	startClass: '@bool', // 布尔值，可以传入参数设置频率
	token: '@string("upper", 2, 8)', // 随机字符串
	createData: '@datetime("yyyy-MM-dd A HH:mm:ss")', // 返回日期
	title: '@title',
	image: {
		smImg: '@image("200x100")',
		lgImg: '@image("242x200")'
	}, // 模拟图片 'x'链接
	manager: '@cname', // 中文名
	'partners|3': [
		'@cname' // 英文名
	],
	website: '@url',
	email: '@email',
	'password|2': '**', // 数据模板下，值为字符串表示按照规则重复字符串
});
Mock.mock('/courses/list/', 'get', {
	'courses|1-20': [{ // 数据模板下，值为数组或者对象 rule 部分都规定了显示的元素数量
		'id|+1': 0, // 数据模板下，值为数值表示初始值或者底数（按招规则细分）
		courseType: '@COURSE', // 使用扩展
		courseName() { // 值可以是一个函数，用来细致模拟数据
			return this.courseType + ' ' + Random.natural(1, 10) + '班'
		},
		'teacher': '@cname',
		position: '@courseType 第 @id 教室', // 引用当前数据模板中的内容
		'studentNum|15-45': 15,
		classTime: '@datetime("M月d日起 每周三 HH:mm")'
	}]
});
/* url:/login
 * email:邮箱账号
 * password:密码
 */
Mock.mock('/login', 'post', function(options) {
	var data = GetRequest(options.data);
	if(data.email == localStorage.email && data.password == localStorage.password) {
		return {
			status: true,
			msg: '登陆成功！'
		}
	} else {
		return {
			status: false,
			msg: '登录失败！'
		}
	}
});
/* url:/register
 * email:邮箱账号
 * password:密码
 */
Mock.mock('/register', 'post', function(options) {
	var data = GetRequest(options.data);
	localStorage.email = data.email;
	localStorage.password = data.password;
	return {
		status: true,
		msg: '注册成功！'
	}
});