import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';
import { CarOnSaleClient } from './CarOnSaleClient'

chai.use(chaiHttp);

const expect = chai.expect;
const should = chai.should();


describe('CarOnSaleClient.getRunningAuctions() to retrieve the list of running auctions', () => {
  it('should return response with property list', (done) => {
    const client = new CarOnSaleClient()
    client.getRunningAuctions()
    .then((res) => {
      expect(res).to.have.property('list');
      done();
    }).catch((err) => {
      done();
    });
  })
})