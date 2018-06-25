const { assert } = require('chai');
const LinkedList = require('../LinkedList.class');

describe('LinkedList.insertAtHead()', () => {
  let linkedList;

  it('primitive data type', () => {
    linkedList = new LinkedList(3, 'muki');
    linkedList.insertAtHead(10);

    assert.deepEqual(linkedList.head, {
      data: 10,
      next: { data: 3, next: { data: 'muki', next: null } }
    });
  });

  it('complex data type', () => {
    linkedList = new LinkedList(3, 'muki');
    linkedList.insertAtHead({ productIds: [3, 6, 8] });

    assert.deepEqual(linkedList.head, {
      data: { productIds: [3, 6, 8] },
      next: { data: 3, next: { data: 'muki', next: null } }
    });
  });
});
