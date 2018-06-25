const { assert } = require('chai');
const { Stack } = require('../Stack.class');

describe('Stack.push()', () => {
  let stack;

  it('when empty', () => {
    stack = new Stack();
    stack.push('3');
    assert.deepEqual(stack.stack, ['3']);
  });

  it('when items exist', () => {
    stack = new Stack();
    stack.push('3');

    stack.push(5);
    assert.deepEqual(stack.stack, ['3', 5]);

    stack.push({ count: 1 });
    assert.deepEqual(stack.stack, ['3', 5, { count: 1 }]);
  });
});
