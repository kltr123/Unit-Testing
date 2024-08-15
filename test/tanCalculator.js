const {expect} = require('chai');
const { tan } =  require('../scientific-calculator/dist/script'); 

describe('Tangent Function Calculation', () => 
{
  it('should return the tangent of a number in radians', () => 
  {
    const form = {display:{value : (0)}};
    tan(form);
    expect(form.display.value).to.be.eq(0);
  });  
});

