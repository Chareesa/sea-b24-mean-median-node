'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
chai.use(chaihttp);

var server = require('../../server.js');
var port = process.env.PORT || 3000;

describe('API test', function() {
  it('should get an accurate mean, median, and mode', function(done) {
    chai.request('http://localhost:3000')
    .post('/api/mmmCalc')
    .send([5, 6, 7, 8, 9, 10])
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.body.mean).to.eql(7.5);
      expect(res.body.median).to.eql(7.5);
      expect(res.body.mode).to.eql(5);
      done();
    });
  });
});
