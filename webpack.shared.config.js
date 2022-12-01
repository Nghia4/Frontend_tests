const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: process.env.NODE_ENV === 'production' 
        ? 'production' 
        : 'development',
        entry: [
            './client/components/App/style.scss'
          ],
          module: {
            rules: [
              {
                test: /\.(sa|sc)ss$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  'sass-loader'
                ]
              },
              {
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: 'css-loader',
			},
            ]
          },

    resolve : {
        extensions : ['.js', '.jsx' , '.css', '.less','.scss']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/style.min.css',
        })
      ]
};