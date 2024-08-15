const {expect} = require('chai');
const { cos } =  require('../scientific-calculator/dist/script'); 

describe('Cosine Function Calculation', () => 
{
  it('should return the cosine of a number in radians', () => 
  {
    const form = {display:{value : (Math.PI)}};
    cos(form);
    expect(form.display.value).to.be.eq(-1);
  });  
});

