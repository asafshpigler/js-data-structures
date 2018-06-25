const { assert } = require('chai');
const BinarySearchTree = require('../BinarySearchTree.class');

describe('BinarySearchTree.insert()', () => {
  let bst;

  it('single argument to root', () => {
    bst = new BinarySearchTree(10);
    bst.insert(5);

    const expectedBst = {
      data: 10,
      left: {
        data: 5,
        left: null,
        right: null
      },
      right: null
    };

    assert.deepEqual(bst.root, expectedBst);
  });

  it('single argument elsewhere', () => {
    bst = new BinarySearchTree(10);
    bst.insert(5, 6);

    const expectedBst = {
      data: 10,
      left: {
        data: 5,
        left: null,
        right: {
          data: 6,
          left: null,
          right: null
        }
      },
      right: null
    };

    assert.deepEqual(bst.root, expectedBst);
  });

  it('multiple arguments to root', () => {
    bst = new BinarySearchTree(10);
    bst.insert(5, 6);

    const expectedBst = {
      data: 10,
      left: {
        data: 5,
        left: null,
        right: {
          data: 6,
          left: null,
          right: null
        }
      },
      right: null
    };

    assert.deepEqual(bst.root, expectedBst);
  });
});
