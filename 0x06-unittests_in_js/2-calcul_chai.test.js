const {expect} = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber fn test', () => {
  it('should perform addition when type is SUM', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
  });

  it('should perform subtraction when type is SUBTRACT', () => {
    expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
    expect(calculateNumber('SUBTRACT', 5.2, 3.7)).to.equal(1);
  });

  it('should perform division when type is DIVIDE', () => {
    expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2);
  });

  it('should return "Error" when dividing by zero', () => {
    expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
  });

  it('should handle invalid operation types', () => {
    expect(() => calculateNumber('MULTIPLY', '2b', 3)).to.throw('Invalid');
  });
});
