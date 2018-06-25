const { assert } = require('chai');
const BinarySearchTree = require('../BinarySearchTree.class');

describe('BinarySearchTree.height', () => {
  it('height', () => {
    const bst = new BinarySearchTree(10);
    assert.equal(bst.height, 1);
    
    bst.insert(5);
    assert.equal(bst.height, 2);    

    bst.insert(6);
    assert.equal(bst.height, 3);    

    bst.insert(4, 11);
    assert.equal(bst.height, 3);
  });
});
