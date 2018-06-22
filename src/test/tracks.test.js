const tracks = require('../server/tracks');

test('Load tracks ', () => {
    return expect(tracks.load('tracks')).resolves.toBeTruthy();

}, 10000);