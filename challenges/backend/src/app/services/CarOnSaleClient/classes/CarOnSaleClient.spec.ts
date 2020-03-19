import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

import { CarOnSaleClient } from './CarOnSaleClient'

chai.use(chaiHttp);
const expect = chai.expect;

describe('CarOnSaleClient getRunningAuctions test', () => {
  it('should return response on call', () => {
    const client = new CarOnSaleClient()
    const result = client.getRunningAuctions();

    return expect(result).to.equal(null); 
  })
})