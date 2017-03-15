const webpack = require('webpack');
const path = require('path');
const glob=require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const CleanWebpackPlugin=require('clean-webpack-plugin');
const casProxy = require('./proxy');
const globPath='example/**/**/*.js';
module.exports = {
    externals: {
        'react': 'window.React'
    },
    entry: (function getEntries(globPath) {
        var files = glob.sync(globPath),
            entries = {};
        var entryfiles=[];
        files.forEach(function(filepath) {
            let dir=path.dirname(filepath);
            let filename=path.basename(filepath);
            if(filename!='index.js'){
                entryfiles.push('./'+filepath);
            }
            entries[dir+'/index'] = entryfiles;
        });
        return entries;
    }(globPath)),
    output: {
        path: './',
        filename: '[name].js',
    },
    resolve: {
        extensions: ['', '.js', '.json'],
        alias: {
            components: __dirname + '/app/components',
            actions: __dirname + '/app/actions',
            api: __dirname + '/app/api',
            reducers: __dirname + '/app/reducers',
            utils: __dirname + '/app/utils',
            constants: __dirname + '/app/constants',
            controllers: __dirname + '/app/controllers',
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
        ]
    }
}
