module.exports = {
	css: {
		loaderOptions: {
			sass: {
				additionalData: '@import "~@/styles/variables.scss";',
			},
		},
	},
	chainWebpack: (config) => {
		config.module.rules.delete('svg');
	},
	configureWebpack: {
		module: {
			rules: [
				{
					test: /\.(pdf)(\?.*)?$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								name: 'files/[name].[hash:8].[ext]'
							}
						}
					]
				},
				{
					test: /\.svg$/,
					use: [
						'babel-loader',
						'vue-svg-loader',
					],
				}
			]
		}
	}
};
