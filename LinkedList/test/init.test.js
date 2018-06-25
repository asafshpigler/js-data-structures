const { assert } = require('chai');
const LinkedList = require('../LinkedList.class');

describe('LinkedList init', () => {
  let linkedList;

  it('no arguments', () => {
    linkedList = new LinkedList();
    assert.deepEqual(linkedList.head, { data: null, next: null });
  });

  it('one argument', () => {
    linkedList = new LinkedList(3);
    assert.deepEqual(linkedList.head, { data: 3, next: null });
  });

  it('multiple arguments', () => {
    linkedList = new LinkedList(3, 'muki');
    assert.deepEqual(linkedList.head, {
      data: 3,
      next: { data: 'muki', next: null }
    });
  });

  it('complex data types', () => {
    linkedList = new LinkedList(3, 'muki', { count: 3 }, []);
    assert.deepEqual(linkedList.head, {
      data: 3,
      next: {
        data: 'muki',
        next: {
          data: { count: 3 },
          next: {
            data: [],
            next: null
          }
        }
      }
    });
  });
});
