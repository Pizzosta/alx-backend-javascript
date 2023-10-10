const sinon = require('sinon');
const expect = require('chai');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.returns(10);

    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with the correct arguments', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct message', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;
  });
});
