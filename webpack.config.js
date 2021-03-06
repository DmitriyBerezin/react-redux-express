const webpack = require('webpack');

const definePlugin = new webpack.DefinePlugin({
	NODE_ENV: 'production'
});

const commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
	cache: true,
	entry: {
		main:  './client/index.jsx'
	},
	output: {
		path: 'public/build',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{test: /\.jsx$/, loader: 'babel', exclude: /(node_modules|bower_components)/, query: { presets: ['react', 'es2015'] }},
			{test: /\.js$/, loader: 'babel', exclude: /(node_modules|bower_components)/, query: { presets: ['react', 'es2015'] }},
		]
	},
	plugins: [
		definePlugin
	]
};