const queueIsEmptyError = new Error('stack is empty');

class Queue {
  constructor(...args) {
    this.queue = args;
  }

  push(data) {
    this.queue.push(data);
  }

  pop() {
    if (this.queue.length === 0) {
      throw queueIsEmptyError;
    } else return this.queue.shift();
  }
}

module.exports = { Queue, queueIsEmptyError };
