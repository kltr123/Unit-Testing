const {expect} = require('chai');
const { sqrt } =  require('../scientific-calculator/dist/script'); 

describe('Square Root Function Calculation', () => 
{
  it('should return the square root of a number.', () => 
  {
    const form = {display:{value : 4}};
    sqrt(form);
    expect(form.display.value).to.be.eq(2);
  });  
});
