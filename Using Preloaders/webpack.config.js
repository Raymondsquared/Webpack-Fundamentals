module.exports =
{
	entry: 	
	[
		"./utils",
		"./app.js"
	],
	output:
	{
		filename: "bundle.js"
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
			}
		]
	},
	resolve:
	{
		extensions: ['', '.js', '.es6']
	}
}