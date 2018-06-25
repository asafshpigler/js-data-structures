class BinarySearchTree {
  constructor(num) {
    this.root = new Node(num);
  }

  insert(num) {
    let currNode = this.root,
      prevNode = null;

    let isSmaller = num <= currNode.data;

    while (currNode[isSmaller ? 'left' : 'right']) {
      currNode = isSmaller ? currNode.left : currNode.right;
      isSmaller = num <= currNode.data;
    }

    currNode[isSmaller ? 'left' : 'right'] = new Node(num);
  }

  find(num) {
    let currNode = this.root;

    while (currNode && currNode.data !== num) {
      currNode = num <= currNode.data ? currNode.left : currNode.right;
    }
    return currNode;
  }

  traverseBF(callback) {
    let currNode = this.root;
    const nodeQueue = [];

    while (currNode) {
      const rightNode = currNode.right;
      if (rightNode) nodeQueue(rightNode);
      
      currNode = currNode.left
      if (!currNode) currNode = nodeQueue.pop();
      callback(currNode.data);
    }
  }

  traverseDF(callback) {

  }

  get height() {
    return findHeight(this.root);

    function findHeight(root) {
      if (!root) return 0;

      const leftHeight = findHeight(root.left),
        rightHeight = findHeight(root.right);

      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
}

class Node {
  constructor(num, leftNode, rightNode) {
    this.data = num;
    this.left = leftNode ? leftNode : null;
    this.right = rightNode ? rightNode : null;
  }
}

module.exports = BinarySearchTree;
