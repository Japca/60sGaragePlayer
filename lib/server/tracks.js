'use strict';

var fs = require('fs');
var nodeId = require('node-id3');

load = function load(folder) {
    var tracksMetadata = [];
    return new Promise(function (resolve, reject) {
        try {
            fs.readdir(folder, function (err, tracks) {
                var tracksCount = tracks.length;
                tracks.forEach(function (track) {
                    nodeId.read(folder + '/' + track, function (err, tag) {
                        if (tag) {
                            tracksMetadata.push({
                                title: tag.title,
                                artist: tag.artist,
                                year: tag.year
                            });
                        }
                        if (--tracksCount === 0) {
                            resolve(tracksMetadata);
                        }
                    });
                });
            });
        } catch (e) {
            reject(e);
        }
    });
};
module.exports = {
    load: load
};