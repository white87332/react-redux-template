const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'source-map',
    mode: 'development',
    entry:
    {
        app: [
            'webpack-hot-middleware/client',
            'babel-polyfill',
            './public/src/containers/app'
        ]
    },
    output:
    {
        path: '/public/asset/js/bundle/',
        filename: 'bundle.js',
        publicPath: '/asset/js/bundle/',
        chunkFilename: 'chunk.[chunkhash].js'
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
                use: [
                    'style',
                    {
                        loader: 'css',
                        options: {
                            options: { modules: false }
                        }
                    },
                    'sass?outputStyle=compressed',
                    'postcss'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: 'url?limit=8192&name=./asset/img/[name].[ext]'
            },
            {
                test: /\.(ttf|eot|svg|woff(2))(\?[a-z0-9]+)?$/,
                loader: 'file',
            }
        ]
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
