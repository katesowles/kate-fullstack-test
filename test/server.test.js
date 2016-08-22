const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = require('chai').assert;
const app = require('../lib/app');
require('../lib/mongooseSetup');
chai.use(chaiHttp);

describe('all the tests', () => {

  const request = chai.request(app);

  function badPost(url, send, done) {
    request.post(url)
      .send(send)
      .then(response => done('this should fail...'))
      .catch(response => {
        assert.equal(response.status, 400);
        done();
      })
      .catch(done);
  }

  it('test badImageA in badPost', done => {
    assert.isNotOk(badPost('/api/images', { caption: 'I am a bad image', link: '' }, done));
  });

  it('test goodImageB in badPost', done => {
    assert.isNotOk(badPost('/api/images', { caption: '', link: 'https://media.giphy.com/media/3UzsN40n9zWz6/giphy.gif'}, done));
  });
});
