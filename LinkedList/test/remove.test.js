const { assert } = require('chai');
const LinkedList = require('../LinkedList.class');

describe('LinkedList.remove()', () => {
  let linkedList;

  it('from start', () => {
    linkedList = new LinkedList(3, 5, 6, 7, { name: 'asaf' });
    linkedList.remove(3);

    assert.deepEqual(linkedList.head, {
      data: 5,
      next: {
        data: 6,
        next: {
          data: 7,
          next: {
            data: { name: 'asaf' },
            next: null
          }
        }
      }
    });
  });

  it('from middle', () => {
    linkedList = new LinkedList(3, 5, 7, { name: 'asaf' }, 8);
    linkedList.remove({ name: 'asaf' });

    assert.deepEqual(linkedList.head, {
      data: 3,
      next: {
        data: 5,
        next: {
          data: 7,
          next: {
            data: 8,
            next: null
          }
        }
      }
    });
  });

  it('from end', () => {
    linkedList = new LinkedList(3, 5, 7, 8, { name: 'asaf' }, '8');
    linkedList.remove('8');

    assert.deepEqual(linkedList.head, {
      data: 3,
      next: {
        data: 5,
        next: {
          data: 7,
          next: {
            data: 8,
            next: {
              data: { name: 'asaf' },
              next: null
            }
          }
        }
      }
    });
  });
});
