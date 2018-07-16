const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = {
    mode: 'production',
    entry:
    {
        app: [
            'babel-polyfill',
            './public/src/containers/app',
        ]
    },
    output:
    {
        path: path.resolve(__dirname, 'public', 'dist/'),
        filename: 'bundle.min.js',
        publicPath: '/dist/',
        chunkFilename: 'chunk.[chunkhash].min.js'
    },
    module:
    {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel',
                include: path.resolve(__dirname, 'public'),
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: 'url?limit=8192&name=./asset/img/[name].[ext]'
            }
        ]
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/tmpl.html'
        }),
        new PreloadWebpackPlugin()
    ]
};
