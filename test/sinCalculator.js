const { expect } = require('chai');
const { sin } = require('../scientific-calculator/dist/script');

describe('Sine Function Calculation', () => {
  it('should return the sine of a number in radians', () => {
    const form = { display: { value: (Math.PI / 2) } };
    sin(form);
    expect(form.display.value).to.be.eq(1);
  });
});

