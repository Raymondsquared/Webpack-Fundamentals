var webpackStripLoader = require('strip-loader');
var devConfig = require('./webpack.config.js');

var stripLoader = 
{
	test: [/\.js$/, /\.es6$/],
	exclude: /node_module/,
	loader: webpackStripLoader.loader('console.log', 'perfLog')
}

devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;