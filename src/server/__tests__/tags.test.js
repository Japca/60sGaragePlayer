const tags = require('../tags');
const express = require('express');
const request = require('supertest');

const initTags = () => {
    const app = express();
    app.use
    app.use(tags);
    return app;
};


describe('GET /tags', () => {

    test('It should return test tag from /tag endpoint',() => {
        request(initTags())
            .get('/tags')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);

    });

});

