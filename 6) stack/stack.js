class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Takes a value and pushes it to the stack. Returns the length of stack after push.
    push(val) {
        const node = new Node(val);
        if (!this.length) this.tail = node;
        node.next = this.head;
        this.head = node;
        return ++this.length;
    }

    // Returns the last element that was pushed into the stack. If stack is empty, returns null.
    pop() {
        if (!this.length) return null;
        if (this.length === 1) this.tail = null;
        const oldHead = this.head;
        this.head = this.head.next;
        oldHead.next = null;
        this.length--;
        return oldHead;
    }
}

let stack = new Stack();
let length1 = stack.push('First'); // Stack: First ------ length1: 1
let length2 = stack.push('Second'); // Stack: Second -> First ------ length2: 2
let length3 = stack.push('Third'); // Stack: Third -> Second -> First ------ length3: 3
let item1 = stack.pop(); // Stack: Second -> First ------ item1: 'Third'
let item2 = stack.pop(); // Stack: First ------ item2: 'Second'
let item3 = stack.pop(); // Stack: empty ------ item3: 'First'
let item4 = stack.pop(); // Stack: empty ------ item4: null