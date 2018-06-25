const { assert } = require('chai');
const LinkedList = require('../LinkedList.class');

describe('LinkedList.reverse()', () => {
  let linkedList;
  
  it('reverse', () => {
    linkedList = new LinkedList(3, 5, 6);
    linkedList.reverse();

    assert.deepEqual(linkedList.head, {
      data: 6,
      next: {
        data: 5,
        next: {
          data: 3,
          next: null
        }
      }
    });
  });

  it('reverse twice', () => {
    linkedList = new LinkedList(3, 5, 6);
    linkedList.reverse();
    linkedList.reverse();

    assert.deepEqual(linkedList.head, {
      data: 3,
      next: {
        data: 5,
        next: {
          data: 6,
          next: null
        }
      }
    });
  });
});
