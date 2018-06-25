const { assert } = require('chai');
const LinkedList = require('../LinkedList.class');

describe('LinkedList.insertAtTail()', () => {
  let linkedList;

  it('primitive data type', () => {
    linkedList = new LinkedList(3, 'muki');
    linkedList.insertAtTail(10);

    assert.deepEqual(linkedList.head, {
      data: 3,
      next: { data: 'muki', next: { data: 10, next: null } }
    });
  });

  it('complex data type', () => {
    linkedList = new LinkedList(3, 'muki');
    linkedList.insertAtTail({ productIds: [3, 6, 8] });

    assert.deepEqual(linkedList.head, {
      data: 3,
      next: {
        data: 'muki',
        next: {
          data: { productIds: [3, 6, 8] },
          next: null
        }
      }
    });
  });
});
