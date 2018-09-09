const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../../webpack.dev');
const compiler = webpack(config);
const tags = require('./tags');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(tags);

if (process.env.NODE_ENV !== 'production') {
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    }));
} else {
    app.use(express.static('dist'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    });
}


app.listen(PORT, () => console.log(`Garage player server stared on port: ${PORT}`));

