const invalidRemovalError = new Error('invalid removal');

class Tree {
  constructor(data) {
    this.root = new Node(data);
  }

  insert(parentData, ...datas) {
    const parentNode = this._find(parentData);
    const nodes = datas.map(data => new Node(data));
    if (parentNode) parentNode.children.push(...nodes);
  }

  has(data) {
    return this._find(data) ? true : false;
  }

  _find(data) {
    // depth-first traverse
    const nodeStack = [];
    let currNode = this.root;

    while (currNode.data !== data) {
      if (currNode.children.length > 0) {
        nodeStack.push(...currNode.children.slice(1));
        currNode = currNode.children[0];
      } else if (nodeStack.length > 0) currNode = nodeStack.pop();
      else return false;
    }

    return currNode;
  }

  remove(data) {
    if (this.root.data === data) throw invalidRemovalError;
    // find parent
    const parentNode = this._findParent(data);
    if (!parentNode) throw invalidRemovalError;

    // remove child with the same data
    const childToRemoveIndex = parentNode.children.findIndex(
      childNode => childNode.data === data
    );

    parentNode.splice(childToRemoveIndex, 1);
  }

  _findParent(data) {
    // breadth-first traverse
    let parentNode = this.root;
    const nodeQueue = [];

    while (parentNode) {
      // check all children nodes
      parentNode.children.forEach(childNode => {
        // if we found the node, return the parent
        if (childNode.data === data) return parentNode;

        // if not, but it has children, push to check later
        else if (childNode.children.length > 0) {
          nodeQueue.push(childNode);
        }
      });

      // the parent node is the next in line
      parentNode = nodeQueue.length > 0 ? nodeQueue.shift() : null;
    }

    return false;
  }
}

class Node {
  constructor(data) {
    this.data = data ? data : null;
    this.children = [];
  }
}

module.exports = {
  Tree,
  invalidRemovalError
};
