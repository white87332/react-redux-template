const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry:
    {
        app: [
            'babel-polyfill',
            './public/src/containers/app',
        ]
    },
    output:
    {
        path: path.resolve(__dirname, 'public', 'asset/js/bundle/'),
        filename: 'bundle.min.js',
        publicPath: '/public/asset/js/bundle/',
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
                test: /\.css|\.scss$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style',
                        use: [
                            { loader: 'css' },
                            'sass',
                            'postcss'
                        ]
                    }
                )
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: 'url-loader?limit=8192&name=./asset/img/[name].[ext]'
            }
        ]
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    plugins: [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '\'production\'' }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false
        }),
        new ExtractTextPlugin({
            filename: '../../css/bundle/bundle.min.css',
            allChunks: false
        })
    ]
};
