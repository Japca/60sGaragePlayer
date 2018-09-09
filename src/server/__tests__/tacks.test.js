import tracks from '../tracks';

test('loads tags from mp3', () => {
    tracks.getTags('test').then(tags => {
        expect(tags.length).toBe(1);
        expect(tags[0].title).toBe('test-title');
    });

});
