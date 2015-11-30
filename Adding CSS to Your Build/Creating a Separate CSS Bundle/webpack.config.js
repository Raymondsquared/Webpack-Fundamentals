var path = require('path');

var extractTextPlugin = require('extract-text-webpack-plugin');

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
	plugins:
	[
		new extractTextPlugin("styles.css")
	],
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
				loader: extractTextPlugin.extract("style", "css")
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				loader: extractTextPlugin.extract("style", "css!less")
			}
		]
	},
	resolve:
	{
		extensions: ['', '.js', '.es6']
	},
	watch: true
}