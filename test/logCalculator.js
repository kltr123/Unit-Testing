const {expect} = require('chai');
const { ln } =  require('../scientific-calculator/dist/script'); 

describe('Logarithm Function Calculation', () => 
{
  it('should return the logarithm function (base e) of a number', () => 
  {
    const form = {display:{value : 1}};
    ln(form);
    expect(form.display.value).to.be.eq(0);
  });  
});

