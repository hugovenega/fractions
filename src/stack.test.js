const Stack = require('./stack') ;

describe('testing Stack class with strings', () => {
  it('should push "item1" to the Stack', () => {
    const s = new Stack();
    s.push('item1');
    expect(s.internalStack[s.internalStack.length -1]).toEqual('item1');
  });

  it('should push "item2" to the top of Stack', () => {
    const s = new Stack();
    s.push('item1');
    s.push('item2');
    expect(s.internalStack[s.internalStack.length -1]).toEqual('item2');
  });

  it('should pop "item2" to the top of Stack', () => {
    const s = new Stack();
    s.push('item1');
    s.push('item2');
    s.pop();
    expect(s.internalStack[s.internalStack.length -1]).toEqual('item1');
  });

  it('should peek to the top of Stack and show "item3"', () => {
    const s = new Stack();
    s.push('item1');
    s.push('item2');
    s.push('item3');
    expect(s.peek()).toEqual('item3');
  });

  it('should isEmpty return "false"', () => {
    const s = new Stack();
    s.push('item1');
    s.push('item2');
    s.push('item3');
    expect(s.isEmpty()).toEqual(false);
  });

  it('should isEmpty return "true"', () => {
    const s = new Stack();
    expect(s.isEmpty()).toEqual(true);
  });
});
