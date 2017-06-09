const path = require('path');
const express = require('express');
const http = require('http');

const app = express();
const port = 3000;

app.use('/public', express.static(path.resolve('public')));

if (process.env.NODE_ENV !== 'production')
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

app.get('*', (req, res) =>
{
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// http
const server = http.createServer(app).listen(3000, () => {
    if (process.env.NODE_ENV === 'development')
    {
        server.keepAliveTimeout = 0;
    }
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
