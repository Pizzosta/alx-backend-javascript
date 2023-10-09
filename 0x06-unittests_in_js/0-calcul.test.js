const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber fn tests', function() {
  it('should return the sum of two rounded numbers', function() {
    assert.strictEqual(calculateNumber(4, 5), 9);
    assert.strictEqual(calculateNumber(-4, 5), 1);
    assert.strictEqual(calculateNumber(4, -5), -1);
    assert.strictEqual(calculateNumber(-4, 5), 1);
    assert.strictEqual(calculateNumber(3.678, 2.345), 6);
    assert.strictEqual(calculateNumber('-4', 5), 1);
    assert.equal(calculateNumber('3', 3.7), 7);
    assert.equal(calculateNumber(1.2, '3.7'), 5);
  });
});
