const path = require('path');
const express = require('express');
const http = require('http');

const port = process.env.PORT || 80;

if (process.env.NODE_ENV === 'development')
{
    const webpack = require('webpack');
    const webpackDevServer = require('webpack-dev-server');
    const config = require('./webpack.development.config');

    const options = {
        contentBase: './dist',
        hot: true,
        host: 'localhost'
    };

    webpackDevServer.addDevServerEntrypoints(config, options);
    const compiler = webpack(config);
    const server = new webpackDevServer(compiler, options);

    server.app.use(express.static(path.resolve('public')));

    server.app.get('*', (req, res, next) => {       
        let filename = path.join(compiler.outputPath, 'index.html');
        compiler.outputFileSystem.readFile(filename, (err, result) => {
            if (err)
            {   
                return next(err);
            }
            res.set('content-type', 'text/html');
            res.send(result);
            res.end();
        });
    });

    server.listen(port, 'localhost', () => {
        console.log(`dev server listening on port ${port}`);
    });
}
else
{
    const app = express();

    app.use(express.static(path.resolve('public')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'public', 'dist', 'index.html'));
    });

    // http
    const server = http.createServer(app).listen(port, () => {
        if (process.env.NODE_ENV === 'development') {
            server.keepAliveTimeout = 0;
        }
        /* eslint no-console: ["error", { allow: ["info"] }] */
        console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
    });
}
