var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry:{
      index:[path.resolve(__dirname, 'src/scripts/index.js')]
      // 指定打包的入口文件
    },
    output: {
        path: path.resolve(__dirname, 'build/scripts'),
        // 定义输出时候的文件夹
        filename: '[name].output.js'
        // 定义打包结果的文件名
    },


    // 定义了对模块的处理逻辑，这里可以用loaders定义了一系列的加载器，以及一些正则。当需要加载的文件匹配test的正则时，就会调用后面的loader对文件进行处理，
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