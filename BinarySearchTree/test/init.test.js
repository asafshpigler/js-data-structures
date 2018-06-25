const { assert } = require('chai');
const BinarySearchTree = require('../BinarySearchTree.class');

describe('BinarySearchTree init', () => {
  it('single argument', () => {
    const bst = new BinarySearchTree(10);

    const expectedBst = {
      data: 10,
      left: null,
      right: null
    };

    assert.deepEqual(bst.root, expectedBst);
  });

  it('single argument elsewhere', () => {});

  it('multiple arguments', () => {});
});
