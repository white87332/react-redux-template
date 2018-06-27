const path = require('path');
const express = require('express');
const http = require('http');

const app = express();
const port = process.env.PORT || 80;

app.use('/', express.static(path.resolve('public')));

if (process.env.NODE_ENV === 'development')
{
    const webpack = require('webpack');
    const config = require('./webpack.development.config');
    const compiler = webpack(config);

    app.use(require('webpack-dev-middleware')(compiler,
        {
            noInfo: true,
            publicPath: config.output.publicPath
        }));
    app.use(require('webpack-hot-middleware')(compiler));
}

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// http
const server = http.createServer(app).listen(port, () => {
    if (process.env.NODE_ENV === 'development')
    {
        server.keepAliveTimeout = 0;
    }
    /* eslint no-console: ["error", { allow: ["info"] }] */
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
