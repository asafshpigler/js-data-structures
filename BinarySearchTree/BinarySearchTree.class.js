class BinarySearchTree {
  constructor(num) {
    this.root = new Node(num);
  }

  insert(...nums) {
    const insertNode = (num) => {
      let currNode = this.root,
        prevNode = null;

      let isSmaller = num <= currNode.data;

      while (currNode[isSmaller ? 'left' : 'right']) {
        currNode = isSmaller ? currNode.left : currNode.right;
        isSmaller = num <= currNode.data;
      }

      currNode[isSmaller ? 'left' : 'right'] = new Node(num);
    }
    
    nums.forEach(num => insertNode(num));
  }

  find(num) {
    let currNode = this.root;

    while (currNode && currNode.data !== num) {
      currNode = num <= currNode.data ? currNode.left : currNode.right;
    }
    return currNode;
  }

  traverseDF(callback) {
    let currNode = this.root;
    const nodeQueue = [];

    while (currNode) {
      callback(currNode.data);

      const leftNode = currNode.left,
        rightNode = currNode.right;

      if (rightNode) nodeQueue.push(rightNode);
      currNode = leftNode ? leftNode : nodeQueue.pop();
    }
  }

  traverseBF(callback) {
    let currNode = this.root;
    const nodeQueue = [];

    while (currNode) {
      callback(currNode.data);

      const leftNode = currNode.left,
        rightNode = currNode.right;

      if (leftNode) nodeQueue.push(leftNode);
      if (rightNode) nodeQueue.push(rightNode);

      currNode = nodeQueue.shift();
    }
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
