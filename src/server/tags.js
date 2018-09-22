const Router = require('express');
const tracks = require('./tracks.js');
const fs = require('fs');
const path = require('path');

const router = new Router();

let mp3Tags;
router.get('/tags', function (req, res) {
    if (mp3Tags) {
        console.info('Loading mp3 tags from cache.');
        return res.send(mp3Tags);
    } else {
        mp3Tags =  JSON.parse(fs.readFileSync(path.resolve(__dirname, 'mock.json')));
    }

    return res.send(mp3Tags);


    // console.info('Loading mp3 tags from file system.');
    // tracks.getTags(req.query.folder || 'tracks').then(data => {
    //     mp3Tags = data;
    //     res.send(mp3Tags);
    // });
});

router.get('/play', function (req) {
    tracks.playTrack();
});

module.exports = router;

