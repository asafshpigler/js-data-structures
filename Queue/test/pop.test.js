const { assert, expect } = require('chai');
const { Queue, queueIsEmptyError } = require('../Queue.class');

describe('Queue.pop()', () => {
  let queue;

  it('when empty throws error', () => {
    queue = new Queue();

    assert.throws(() => {
      queue.pop();
    }, queueIsEmptyError);
  });

  it('when items exist', () => {
    queue = new Queue();

    queue.push({count: 3, name: 'asaf'});
    queue.push(1);
    const poppedItem = queue.pop();

    assert.deepEqual(poppedItem, {count: 3, name: 'asaf'});
    assert.deepEqual(queue.queue, [1]);
  });
});
