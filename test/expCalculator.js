const {expect} = require('chai');
const { exp } =  require('../scientific-calculator/dist/script'); 

describe('Exponential Function Calculation', () => 
{
  it('should return e raised to the power of a number', () => 
  {
    const form = {display:{value : 0}};
    exp(form);
    expect(form.display.value).to.be.eq(1);
  });  
});

