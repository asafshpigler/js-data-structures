const { assert } = require('chai');
const BinarySearchTree = require('../BinarySearchTree.class');

describe('BinarySearchTree.traverseBF()', () => {
  it('traverseBF', () => {
    const bst = new BinarySearchTree(10);
    bst.insert(5, 2, 6, 12, 11, 13);

    const expectedNodeDataOrder = [10, 5, 12, 2, 6, 11, 13];

    const nodeDataOrder = [];
    bst.traverseBF(num => {
      nodeDataOrder.push(num);
    });
    assert.deepEqual(nodeDataOrder, expectedNodeDataOrder);
  });
});
