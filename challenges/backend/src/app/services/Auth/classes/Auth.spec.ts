import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';
import { Auth } from './Auth'

chai.use(chaiHttp);

const expect = chai.expect;
const should = chai.should();


describe('Auth.login() with correct userId and password', () => {
  it('should return response with property token and userId=salesman@random.com', (done) => {
    const auth = new Auth()
    auth.login('salesman@random.com', '123test')
    .then((res) => {
      expect(res).to.have.property('token');
      expect(res.userId).to.equal('salesman@random.com');
      done();
    }).catch((err) => {
      done();
    });
  })
})


describe('Auth.login() with Incorrect userId', () => {
  it('should return status code 401', (done) => {
    const auth = new Auth()
    auth.login('salesman123@random.com', '123test')
    .then((res) => {
      done();
    }).catch((err) => {
      expect(err.response.status).to.equal(401);
      done();
    });
  })
})


describe('Auth.login() with Incorrect password', () => {
  it('should return status code 401', (done) => {
    const auth = new Auth()
    auth.login('salesman@random.com', '123456test')
    .then((res) => {
      done();
    }).catch((err) => {
      expect(err.response.status).to.equal(401);
      done();
    });
  })
})


