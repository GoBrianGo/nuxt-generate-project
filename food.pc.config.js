module.exports = {
	srcDir: 'client/food/pc',
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'starter',
		meta: [{
			charset: 'utf-8'
		}, {
			name: 'viewport',
			content: 'width=device-width, initial-scale=1'
		}, {
			hid: 'description',
			name: 'description',
			content: 'Nuxt.js project'
		}],
		link: [{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/favicon.ico'
		}]
	},
	/*
	 ** Global CSS
	 */
	/*
	 ** Customize the progress-bar color
	 */
	loading: {
		color: '#3B8070'
	},
	modules: [
		'~modules/custom-generate.js'
	],
	router: {
		// router: {
		//     
		// },
		// base: '/test'
		//动态增加index.html路由
		extendRoutes(routes, resolve) {
			var _routes = Object.assign([], routes);

			routes.forEach(route => {
				routes.push(Object.assign({}, route, {
					name: route.name + '_html',
					path: route.path + (route.path === '/' ? '' : '/') + 'index.html'
				}))
			})
		}
	},
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** Run ESLINT on save
		 */
		extend(config, ctx) {
			if (ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
			config.devtool = 'eval-source-map';
			
			// config.resolve.alias = Object.assign(config.resolve.alias, {
			// 	'@components': '@/components',
			// 	'@assets': '@/assets',
			// 	'@static': '@static'
			// });
		}
	}
}