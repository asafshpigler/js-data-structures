const { deepStrictEqual } = require('assert');

class LinkedList {
  constructor(...args) {
    // by reverseing we prevent O(n) cost of unshifting array
    args.reverse();
    this.head = new Node(args.pop());

    let currNode = this.head;
    while (args.length !== 0) {
      const newNode = new Node(args.pop());

      currNode.next = newNode;
      currNode = newNode;
    }
  }

  insertAtHead(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtTail(data) {
    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }

    currNode.next = new Node(data);
  }

  remove(data) {
    let prevNode = null,
      currNode = this.head,
      count = 0;

    let isRemoveCurrNode = false;
    while (!isRemoveCurrNode) {
      try {
        deepStrictEqual(currNode.data, data);
        isRemoveCurrNode = true;
        break;
      } catch (err) {}

      prevNode = currNode;
      currNode = currNode.next;
      count++;
    }

    if (count === 0) this.head = currNode.next;
    else prevNode.next = currNode.next;
  }

  has(data) {
    let currNode = this.head;

    while (currNode.next !== null) {
      try {
        deepStrictEqual(currNode.data, data);
        return true;
      } catch (err) {}

      currNode = currNode.next;
    }

    return false;
  }

  reverse() {
    let prevNode = null,
      currNode = this.head,
      nextNode = null;

    while (currNode !== null) {
      nextNode = currNode.next;
      currNode.next = prevNode;

      prevNode = currNode;
      currNode = nextNode;
    }

    this.head = prevNode;
  }
}

class Node {
  constructor(data) {
    this.data = data ? data : null;
    this.next = null;
  }
}

module.exports = LinkedList;
