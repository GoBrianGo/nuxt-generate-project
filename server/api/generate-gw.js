import { Nuxt, Builder, Generator} from 'nuxt'
var axios = require('axios')

module.exports = async (ctx) => {
	ctx.status = 200 // koa defaults to 404 when it sees that status is unset
	try {
		// var data = await axios.get('https://6king.efuntw.com/abc')
		// ctx.body = 123
		let config = require('../../food.pc.config.js')
		config.dev = false
		config.query = ctx.query
		console.log(ctx.query)
		const nuxt = new Nuxt(config)
		const builder = new Builder(nuxt)
		const generator = new Generator(nuxt, builder)

		var result = await generator.generate()
		ctx.body = '打包成功'
		
	} catch (e) {
		console.log(e)
		ctx.body = 'error'
	}
}