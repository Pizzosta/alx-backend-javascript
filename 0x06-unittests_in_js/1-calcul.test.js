const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber fn test', () => {
  it('should perform addition when type is SUM', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
  });

  it('should perform subtraction when type is SUBTRACT', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 5, 3), 2);
    assert.strictEqual(calculateNumber('SUBTRACT', 5.2, 3.7), 1);
  });

  it('should perform division when type is DIVIDE', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 6, 3), 2);
  });

  it('should return "Error" when dividing by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 10, 0), 'Error');
  });

  it('should handle invalid operation types', () => {
    assert.throws(() => calculateNumber('MULTIPLY', '2b', 3), 'Invalid');
  });
});
