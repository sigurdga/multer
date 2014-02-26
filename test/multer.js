var express = require('express'),
    request = require('supertest'),
    should = require('should'),
    multer = require('..');

var app = express();

app.use(multer());

app.post('/', function (req, res) {
    res.json(200, req.files);
});


describe('Multer', function () {
    it("should upload file", function (done) {
        request(app)
            .post('/')
            .attach('file', 'test/multer.js')
            .expect(200)
            .end(function (err, res) {
                res.body.file.originalname.should.equal('multer.js');
                done(err);
            });
    });
});
