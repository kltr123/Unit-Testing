const {expect} = require('chai');
const { square } =  require('../scientific-calculator/dist/script'); 

describe('Square Function Calculation', () => 
{
  it('should return the value of the number multipled by itself', () => 
  {
    const form = {display:{value : 2}};
    square(form);
    expect(form.display.value).to.be.eq(4);
  });  
});

