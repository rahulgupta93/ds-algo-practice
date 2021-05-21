//! For definition etc, see README.md file in this folder.

//! Pseudo-code/Code
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // enqueue method: push val to the end of list and return whole list
    enqueue(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return ++this.length;
    }

    // shift method: remove val from the beginning of list and return the removed Node
    dequeue() {
        if (!this.length) return null;
        const head = this.head;
        this.head = head.next;
        if (this.length === 1) this.tail = null;
        head.next = null;
        this.length--;
        return head;
    }

    print() {
        let node = this.head;
        const arr = [];
        while(!!node) {
            arr.push(node.val);
            node = node.next;
        }
        console.log(arr);
    }
}

const queue = new Queue(); // List:  (empty)
queue.enqueue(1); // queue: 1
queue.enqueue(2); // queue: 1 -> 2
queue.enqueue(3); // queue: 1 -> 2 -> 3
queue.enqueue(4); // queue: 1 -> 2 -> 3 -> 4
queue.enqueue(5); // queue: 1 -> 2 -> 3 -> 4 -> 5
const firstEl = queue.dequeue(); // firstEl is now the node with val 1. New head of queue is node with val 2. queue: 2 -> 3 -> 4 -> 5