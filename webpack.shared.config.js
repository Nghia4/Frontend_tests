module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: 'css-loader',
			},
		],
	},

	resolve: {
		extensions: ['.js', '.jsx', '.css', '.less'],
	},
};
