const {expect} = require('chai');
const { deleteChar } =  require('../scientific-calculator/dist/script'); 

describe('Delete Character Function Calculation', () => 
{
  it('should return the input with the last character removed', () => 
  {
    const input = {value : "123"};
    deleteChar(input);
    expect(input.value).to.be.eq("12");
  });  
});

