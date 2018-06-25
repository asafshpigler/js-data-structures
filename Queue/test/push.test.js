const { assert } = require('chai');
const { Queue } = require('../Queue.class');

describe('Queue.push()', () => {
  let queue;

  it('when empty', () => {
    queue = new Queue();
    queue.push('3');
    assert.deepEqual(queue.queue, ['3']);
  });

  it('when items exist', () => {
    queue = new Queue();
    queue.push('3');

    queue.push(5);
    assert.deepEqual(queue.queue, ['3', 5]);

    queue.push({ count: 1 });
    assert.deepEqual(queue.queue, ['3', 5, { count: 1 }]);
  });
});
