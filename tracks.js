const fs = require('fs');
const nodeId = require('node-id3');

let tracksMetadata = []
module.exports.load = (folder) => {
    fs.readdir(folder, (err, tracks) => {
        tracks.forEach(track => {
            nodeId.read(`${folder}/${track}`, function (err, tag) {
                if (tag) {
                    tracksMetadata.push({
                        title: tag.title,
                        artist: tag.artist,
                        year: tag.year
                    })
                    console.log(tag)
                }
            })
        })
    })
}
