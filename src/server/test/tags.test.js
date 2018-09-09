const tags = require('../tags');
const express = require('express');
const request = require('supertest');

const initTags = () => {
    const app = express();
    app.use(tags);
    return app;
};


describe('GET /tags', () => {

    test.skip('It should return test tag from /tag endpoint', () => {
        request(initTags())
            .get('/tags?folder=test/data')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, {
                id: 'some fixed id',
                name: 'john'
            });
    });

});

