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
		path: path.resolve('build/'),
		publicPath: '/public/assets/',
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
				loader: 'style!css!autoprefixer',
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				loader: 'style!css!autoprefixer!less',
			},
			{
				test: /\.(png|jpg)$/,
				exclude: /node_modules/,
				loader: 'url?limit=10000'
			}
		]
	},
	resolve:
	{
		extensions:
		[
			'',
			'.js',
			'.es6'
		]
	},
	watch: true
}