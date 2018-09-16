const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    mode: 'development',
    entry: {
        app: [
            'babel-polyfill',
            './public/src/containers/app'
        ]
    },
    output: {
        filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel',
            include: path.resolve(__dirname, 'public'),
            exclude: /node_modules/,
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: 'url?limit=8192&name=./asset/img/[name].[ext]'
        },
        {
            test: /\.(ttf|eot|svg|woff(2))(\?[a-z0-9]+)?$/,
            loader: 'file',
        }]
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/tmpl.html'
        })
    ]
};