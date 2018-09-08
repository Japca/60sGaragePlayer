const fs = require('fs');
const nodeId = require('node-id3');

let count = 0;

const getTags = function (folder) {
    return new Promise((resolve, reject) => {
        try {
            const tracks = fs.readdirSync(folder);
            const tags = tracks.map(track => getTag(track, folder));
            console.info('Mp3 tags has been loaded.');
            resolve(tags);
        } catch (e) {
            console.error('Cannot read tags!', e);
            reject(e);
        }
    });
};

const getTag = (track, folder) => {
    const tag = nodeId.read(`${folder}/${track}`);
    return {
        id: ++count,
        title: tag.title,
        artist: tag.artist,
        year: tag.year
    };
};

module.exports = {
    getTags
};

