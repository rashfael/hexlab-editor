var path = require('path')

module.exports = {
	lintOnSave: false,
	css: {
		loaderOptions: {
			stylus: {
				default: {
					use: [require('rupture')(), require('buntpapier/stylus')()],
					import: ['~styles/_settings']
				}
			}
		}
	},
	configureWebpack: {
		resolve: {
			modules: ['src']
		}
	},
	chainWebpack: config => {
		config.module
			.rule('js')
			.include
			.add(/buntpapier/)
	}
}
