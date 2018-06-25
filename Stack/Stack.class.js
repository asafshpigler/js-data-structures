const stackIsEmptyError = new Error('stack is empty');

class Stack {
  constructor(...args) {
    this.stack = args;
  }

  push(data) {
    this.stack.push(data);
  }

  pop() {
    if (this.stack.length === 0) {
      throw stackIsEmptyError;
    } else return this.stack.pop();
  }

  get length() {
    return this.stack.length;
  }
}

module.exports = { Stack, stackIsEmptyError };
