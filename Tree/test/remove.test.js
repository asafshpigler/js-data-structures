const { assert } = require('chai');
const { Tree, invalidRemovalError } = require('../Tree.class');

describe('Tree.remove()', () => {
  let tree;

  it('root', () => {
    tree = new Tree('html');

    assert.throws(() => {
      tree.remove('html');
    }, invalidRemovalError);
  });

  it('child', () => {
    // tree = new Tree('html');
    // tree.insert('html', 'head', 'body');
    // tree.remove('head');
    // assert.isFalse(tree.has('head'));
  });
});
