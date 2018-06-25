const { assert } = require('chai');
const { Tree } = require('../Tree.class');

describe('Tree init', () => {
  it('init', () => {
    let tree = new Tree('html');

    const expectedTree = {
      data: 'html',
      children: []
    };

    assert.deepEqual(tree.root, expectedTree);
  });
});
