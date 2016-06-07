var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry:{
      index:[path.resolve(__dirname, 'src/scripts/index.js')]
    },
    output: {
        path: path.resolve(__dirname, 'build/scripts'),
        filename: '[name].output.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader'
        },
        {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract('style-loader','css-loader','autoprefixer-loader','less-loader')
        }
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
      new ExtractTextPlugin("bundle.css")
    ]
};