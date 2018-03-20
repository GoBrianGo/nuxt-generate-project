var router = require('koa-router')()
var generateGW = require('../api/generate-gw')

module.exports = (app) => {
	//生成官网静态文件
	router.get('/generate/gw', async(ctx) => {
		await generateGW(ctx);
	});
	app.use(router.routes());
}
