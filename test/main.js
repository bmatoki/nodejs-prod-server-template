process.env.NODE_ENV = 'test';
const env = process.env.NODE_ENV;
process.env.PORT = 5050;
const mocha = require('mocha');


const describe = mocha.describe;
const it = mocha.it;
const chai = require('chai');
const chaiHttp = require('chai-http');
const config = require('../config')[env];

chai.use(chaiHttp);
chai.should();
const app = require('../app');
const cacheUtil = require('../utils/cache.util');
const hashUtil = require('../utils/hash.util');
const emailUtil = require('../utils/email.util');


// check all routes.
describe('Check routes', () => {
  it('route GET /api/example should return example data ', async () => {
    const result = await chai.request(app).get('/api/example').send();
    chai.expect(result).to.have.property('status').eql(200);
    result.body.should.be.a('object');
  });
});

// check cache util
describe('Check cache.util', () => {
  let errorCount = -1;
  it('should return cache error count 0', () => {
    errorCount = cacheUtil.getErrorCount();
    chai.expect(errorCount).to.eql(0);
  });
  it('should increment error count', () => {
    cacheUtil.incrementErrorCount();
    errorCount = cacheUtil.getErrorCount();
    chai.expect(errorCount).to.eql(1);
  });
  it('should set error count to 0', () => {
    cacheUtil.clearErrorCount();
    errorCount = cacheUtil.getErrorCount();
    chai.expect(errorCount).to.eql(0);
  });
});

// check hash util - if decrypt hash work.
describe('Check hash.util', () => {
  it('should decrypt', () => {
    const result = hashUtil.decrypt(config.test.decryptHash);
    chai.expect(result).to.eql('test@123');
  });
});

// check email util - send test mail.
describe('check email.util', () => {
  it('should send alert mail', async () => {
    const result = await emailUtil.sendAlertMail('TEST EMAIL SUBJECT', 'TEST EMAIL BODY');
    /* eslint-disable */
    console.log(result.success);
    console.log(result.msg);
    /* eslint-enable */
    chai.expect(result).to.have.property('success').eql(true);
  });
});
