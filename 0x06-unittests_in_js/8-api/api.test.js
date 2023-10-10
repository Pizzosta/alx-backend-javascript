const request = require('request');
const {expect} = require('chai');

describe('API Tests', () => {
  let server;

  before(() => {
    server = require('./api');
  });

  after(() => {
    server.close();
  });

  describe('Index Page', () => {
    it('should return status code 200', (done) => {
      request('http://localhost:7865', (error, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return the message "Welcome to the payment system"', (done) => {
      request('http://localhost:7865', (error, response, body) => {
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
});
