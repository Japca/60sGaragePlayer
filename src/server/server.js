const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../../webpack.dev');
const compiler = webpack(config);
process.env.UV_T

const express = require('express');
const tracks = require('./tracks.js');

const app = express();

const PORT = process.env.PORT || 3000;

let mp3Tags;

app.get('/metaData', function (req, res) {
    if (mp3Tags) {
        console.info('Loading mp3 tags from cache.');
        return res.send(mp3Tags);
    }

    console.info('Loading mp3 tags from file system.');
    tracks.getTags('tracks').then(data => {
        mp3Tags = data;
        res.send(mp3Tags);
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

