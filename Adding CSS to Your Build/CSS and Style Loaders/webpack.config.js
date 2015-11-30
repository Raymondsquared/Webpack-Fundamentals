var path = require('path');

module.exports =
{
	context: path.resolve('js'),
	entry: 	
	[		
		"./app"
	],
	output:
	{
		path: path.resolve('build/js/'),
		publicPath: '/public/assets/js/',
		filename: "bundle.js"
	},
	devServer:
	{
		contentBase: 'public'
	},
	module:
	{
		preLoaders:
		[
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'jshint-loader'
			}
		],
		loaders:
		[
			{
				test: /\.es6$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: 
				{
			    	presets: ['react', 'es2015']
			    }
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'style!css',
			}
		]
	},
	resolve:
	{
		extensions: ['', '.js', '.es6']
	},
	watch: true
}