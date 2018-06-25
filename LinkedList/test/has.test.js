const { assert } = require('chai');
const LinkedList = require('../LinkedList.class');

describe('LinkedList.has()', () => {
  it('primitive data type', () => {
    linkedList = new LinkedList(3, 5, 6, 7);

    assert.isTrue(linkedList.has(5));
    assert.isFalse(linkedList.has(10));
  });

  it('complex data type', () => {
    linkedList = new LinkedList(3, 5, [6, 1, { name: 'asaf' }], 7);

    assert.isTrue(linkedList.has([6, 1, { name: 'asaf' }]));
    assert.isFalse(linkedList.has([]));
  });
});
