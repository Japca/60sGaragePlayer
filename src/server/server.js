const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../../webpack.dev');
const compiler = webpack(config);

const express = require('express');
const tracks = require('./tracks.js');

const app = express();

const PORT = process.env.PORT || 3000;

let trackMetaData;
app.get('/metaData', function (req, res) {
    if (trackMetaData) {
        res.send(trackMetaData);
        return;
    }

    tracks.load('tracks').then(data => {
        trackMetaData = data;
        res.send(trackMetaData);
    });
});

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

