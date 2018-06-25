const { assert } = require('chai');
const { Tree } = require('../Tree.class');

describe('Tree.insert()', () => {
  let tree;

  it('to root element', () => {
    tree = new Tree('html');
    tree.insert('html', 'body', 'head');

    const expectedTree = {
      data: 'html',
      children: [
        {
          data: 'body',
          children: []
        },
        {
          data: 'head',
          children: []
        }
      ]
    };

    assert.deepEqual(tree.root, expectedTree);
  });

  it('to certain child', () => {
    tree = new Tree('html');
    tree.insert('html', 'body', 'head');
    tree.insert('head', 'h1', 'p');
    tree.insert('h1', 'b');

    const expectedTree = {
      data: 'html',
      children: [
        {
          data: 'body',
          children: []
        },
        {
          data: 'head',
          children: [
            {
              data: 'h1',
              children: [
                {
                  data: 'b',
                  children: []
                }
              ]
            },
            {
              data: 'p',
              children: []
            }
          ]
        }
      ]
    };

    assert.deepEqual(tree.root, expectedTree);
  });
});
