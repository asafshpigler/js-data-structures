const { assert } = require('chai');
const { Stack } = require('../Stack.class');

describe('Stack init', () => {
  let stack;

  it('one argument', () => {
    const args = ['5'];
    stack = new Stack(...args);
    assert.deepEqual(stack.stack, args);
  });

  it('multiple arguments', () => {
    const args = ['5', {count: 2, Ids: ['2']}];
    stack = new Stack(...args);
    assert.deepEqual(stack.stack, args);
  });
});
