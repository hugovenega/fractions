class Stack {
  constructor() {
    this.internalStack = [];
  }

  push(item) {
    this.internalStack.push(item);
  }

  pop() {
    return this.internalStack.pop();
  }

  peek() {
    return this.internalStack[this.internalStack.length - 1];
  }

  isEmpty() {
    return this.internalStack.length < 1;
  }
}

const stack = new Stack();
stack.push('cosa');
stack.push('cualquier');
stack.push('casa');
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());



module.exports = Stack;
