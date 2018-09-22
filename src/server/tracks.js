const fs = require('fs');
const nodeId = require('node-id3');
// const player = require('play-sound')(opts = {mplayer});
const { createAudio } = require('node-mp3-player')
const Audio = createAudio();
// const Iconv = require('ico');


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

// function  playTrack() {
//
//     //let track = fs.readFileSync('tracks/1-02 - madd, inc. - i\'ll be the one.mp3');
//     player.play('./test.mp3', function(err){
//         if (err) throw err;
//     });
//
//
// }

async function playTrack() {
    console.log('audio')
    const myFile = await Audio('./test.mp3')
    console.log('volume')
    await myFile.volume(0.5)
    console.log('play')
    await myFile.play();
    console.log('loop')
    await myFile.loop()
    console.log('stop')
    await myFile.stop()
    console.log('end')
}


module.exports = {
    getTags,
    playTrack,
};

