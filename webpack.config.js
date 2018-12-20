/* global __dirname */
var webpack = require("webpack");

module.exports = {
	mode: "none",
	entry: [
		"./src/VMenu.tsx"
	],
	output: {
		path: __dirname + "/dist",
		publicPath: "http://localhost:8080/",
		filename: "VMenu.js",
		libraryTarget: "umd",
		//library: "react-vmenu",
	},
	resolve: {
		//root: paths.client(),
		//root: "src",
		extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
	},
	externals: {
		// use external version of React (ie, don't bundle react, since any app using this library will already have it available)
		//"react": "React",
		"react": "commonjs react",
 		"react-dom": "commonjs react-dom",
		"redux": "commonjs redux",
		"react-redux": "commonjs react-redux",
	},
	/*module: {
		noParse: ["react"]
	},*/
	module: {
		rules: [
			{
				test: /\.(jsx?|tsx?)$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets: ["@babel/env", "@babel/react"]
				}
			},
			{test: /\.tsx?$/, loader: "ts-loader"},
			{
				test: /\.(png|jpg|jpeg|svg)$/,
				loader: "file-loader"
			}
		]
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		//new webpack.IgnorePlugin(/react/),
	]
};