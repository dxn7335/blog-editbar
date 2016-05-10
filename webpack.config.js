var webpack = require('webpack');
var path = require('path');
var htmlWebPackPlugin = require('html-webpack-plugin');

var PATH = {
		app: path.resolve( __dirname, 'src/js/app.js' ),
		build: path.resolve( __dirname, 'build' ),
	};

module.exports = {
	entry: {
		app: process.env.NODE_ENV === "prod" ? [PATH.app] : ['webpack/hot/dev-server', PATH.app]
	},
	output: {
		path: PATH.build,
		filename: "bundle.js"
	},
	module: {
		loaders: [
			// for dev use ( keep es6 syntax while hot-loading)
			{ test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
			{ test: /\.js$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/ },
			{ test: /\.scss$/, loaders: 'style!css!sass' },
		]
	},
	plugins: {
		new webpack.NoErrorsPlugin(),
		new htmlWebPackPlugin({
			inject: true,
			template: "./src/index.html"
		})
	}
}
