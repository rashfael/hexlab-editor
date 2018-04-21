const path = require('path')
const stylusLoader = require('stylus-loader')
const webpack = require('webpack')

module.exports = {
	lintOnSave: false,
	css: {
		loaderOptions: {
			stylus: {
				import: ['~styles/_settings.styl']
			}
		}
	},
	configureWebpack (config) {
		return {
			resolve: {
				modules: ['src'],
				alias: {
					config: path.resolve(process.env.NODE_ENV === 'production' ? 'config.prod.js' : 'config.dev.js'),
				}
			},
			plugins: [
				new stylusLoader.OptionsPlugin({
					default: {
						use: [require('rupture')(), require('buntpapier/stylus')()]
					},
				}),
				// needed for style tags in vue
				new webpack.LoaderOptionsPlugin({
					test: /\.vue$/,
					stylus: {
						default: {
							use: [require('rupture')(), require('buntpapier/stylus')()]
						}
					},
				}),
			]
		}
	},
	chainWebpack: config => {
		config.module
			.rule('js')
			.include
			.add(/buntpapier/)
	}
}
