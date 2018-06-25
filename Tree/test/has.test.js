const { assert } = require('chai');
const { Tree } = require('../Tree.class');

describe('Tree.has()', () => {
  let tree;

  it('root', () => {
    tree = new Tree('html');
    assert.isTrue(tree.has('html'));
    assert.isFalse(tree.has('body'));
  });

  it('deep child', () => {
    tree = new Tree('html');
    tree.insert('html', 'head', 'body');
    tree.insert('head', 'link', 'script');

    const expectedTree = {
      data: 'html',
      children: [
        {
          data: 'head',
          children: [
            {
              data: 'link',
              children: []
            },
            {
              data: 'script',
              children: []
            }
          ]
        },
        {
          data: 'body',
          children: []
        }
      ]
    };

    assert.isTrue(tree.has('link'));
    assert.isFalse(tree.has('p'));
  });
});
