const fs = require('fs');
const nodeId = require('node-id3');
 
var load = function(folder) {
    let tracksMetadata= []
    return new Promise((resolve, reject) => {
        try {
            fs.readdir(folder, (err, tracks) => {
                let tracksCount = tracks.length;
                tracks.forEach(track => {
                    nodeId.read(`${folder}/${track}`, function (err, tag) {
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
    load
};
