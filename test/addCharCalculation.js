const {expect} = require('chai');
const { addChar } =  require('../scientific-calculator/dist/script'); 

describe('Add Character Function Calculation', () => 
{
  it('should return the input with the newly added character', () => 
  {
    const input = {value : 1};
    addChar(input, "K");
    expect(input.value).to.be.eq("1K");
  });  
});

