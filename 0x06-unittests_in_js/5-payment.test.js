const sinon = require('sinon');
const chai = require('chai');
const {expect} = chai;

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

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

  it('should log the correct message when called with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('should log the correct message when called with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;
  });
});
