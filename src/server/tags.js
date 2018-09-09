const Router = require('express');
const tracks = require('./tracks.js');

const router = new Router();

let mp3Tags;
router.get('/tags', function (req, res) {
    if (mp3Tags) {
        console.info('Loading mp3 tags from cache.');
        return res.send(mp3Tags);
    }
    // let params = req.params();

    console.info('Loading mp3 tags from file system.');
    tracks.getTags(req.param('foldr') || 'tracks').then(data => {
        mp3Tags = data;
        res.send(mp3Tags);
    });
});

module.exports = router;

