const sum = require('./sum') ;

describe('sum', () => {
  it('should add two numbers', () => {
    expect(sum(10, 5)).toBe(15);
  });
});
