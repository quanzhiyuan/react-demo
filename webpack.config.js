const webpack = require('webpack');
const path = require('path');
const glob=require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const casProxy = require('./proxy');
module.exports = {
  entry: {
    index:'./src/client.js',
      vendor:['react', 'classnames', 'react-router', 'react-dom']
  },
  output: {
    path:  path.resolve(__dirname, 'dist'),
      filename: './index.js',
  },
  resolve: {
    extensions: ['', '.js', '.json'],
    alias: {
      components: __dirname + '/src/components',
      actions: __dirname + '/src/actions',
      api: __dirname + '/src/api',
      reducers: __dirname + '/src/reducers',
      utils: __dirname + '/src/utils',
      constants: __dirname + '/src/constants',
      controllers: __dirname + '/src/controllers',
    },
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel',
      }, {
        test: /\.less$/,
        loader: 'style!css!postcss!less',
      }, {
        test: /\.css/,
        loader: 'style!css',
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192',
      }, 
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": { 
         NODE_ENV: JSON.stringify("production") 
       }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor','vendor.bundle.js'),
    /*压缩优化代码开始  可以关掉*/
    // new webpack.optimize.UglifyJsPlugin({minimize: true}),
    /*压缩优化代码结束*/
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:3000'
    }),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    proxy: casProxy(),
    host: '0.0.0.0'
  },
}
