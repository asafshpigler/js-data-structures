const { assert } = require('chai');
const BinarySearchTree = require('../BinarySearchTree.class');

describe('BinarySearchTree.find()', () => {
  let bst;
  it('root', () => {
    bst = new BinarySearchTree(10);

    const expectedBst = {
      data: 10,
      left: null,
      right: null
    };

    assert.deepEqual(bst.find(10), expectedBst);
  });

  it('number elsewhere', () => {
    bst = new BinarySearchTree(10);
    bst.insert(12, 20);

    const expectedBst = {
      data: 12,
      left: null,
      right: {
        data: 20,
        left: null,
        right: null
      }
    };

    assert.deepEqual(bst.find(12), expectedBst);
    assert.isNull(bst.find(11));
  });
});
