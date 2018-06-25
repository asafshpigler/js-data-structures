const { assert } = require('chai');
const BinarySearchTree = require('../BinarySearchTree.class');

describe('BinarySearchTree.traverseDF()', () => {
  it('traverseDF', () => {
    const bst = new BinarySearchTree(10);
    bst.insert(5, 2, 6, 12, 11, 13);
    const expectedNodeDataOrder = [10, 5, 2, 6, 12, 11, 13];

    const nodeDataOrder = [];
    bst.traverseDF(num => {
      nodeDataOrder.push(num);
    });
    assert.deepEqual(nodeDataOrder, expectedNodeDataOrder);
  });
});
