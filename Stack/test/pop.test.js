const { assert, expect } = require('chai');
const { Stack, stackIsEmptyError } = require('../Stack.class');

describe('Stack.pop()', () => {
  let stack;

  it('when empty throws error', () => {
    stack = new Stack();

    assert.throws(() => {
      stack.pop();
    }, stackIsEmptyError);
  });

  it('when items exist', () => {
    stack = new Stack();

    stack.push({count: 3, name: 'asaf'});
    const poppedItem = stack.pop();

    assert.deepEqual(poppedItem, {count: 3, name: 'asaf'});
    assert.deepEqual(stack.stack, []);
  });
});
