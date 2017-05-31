const path = require('path');
const express = require('express');

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

app.listen(port, () =>
{
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
