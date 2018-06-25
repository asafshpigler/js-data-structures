const { assert } = require('chai');
const { Queue } = require('../Queue.class');

describe('Queue init', () => {
  let queue;

  it('one argument', () => {
    const args = ['5'];
    queue = new Queue(...args);
    assert.deepEqual(queue.queue, args);
  });

  it('multiple arguments', () => {
    const args = ['5', {count: 2, Ids: ['2']}];
    queue = new Queue(...args);
    assert.deepEqual(queue.queue, args);
  });
});
