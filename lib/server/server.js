'use strict';

var express = require('express');
var tracks = require('./tracks.js');

var server = express();

var port = process.env.PORT || 3000;

var trackMetaData = void 0;
server.get('/metaData', function (req, res) {
  if (trackMetaData) {
    res.send(trackMetaData);
    return;
  }

  tracks.load('tracks').then(function (data) {
    trackMetaData = data;
    res.send(trackMetaData);
  });
});

if (process.env.NODE_ENV !== 'procuction') {
  var webpackMiddleware = require('webpack-dev-middleware');
  var webpack = require('webpack');
  var webpackConfig = require('../../webpack.dev');
  server.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  server.use(express.static('public'));
  server.use(express.static('public/fonts'));
  server.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
}

server.listen(port, function () {
  return console.log('Garage player server stared on port: ' + port);
});