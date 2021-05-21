//! For definition etc, see README.md file in this folder.

//! Pseudo-code/Code
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // push method: push val to the end of list and return whole list
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // pop method: remove val from the end of list and return the removed Node
    pop() {
        if (!this.length) return null;
        return this.remove(this.length-1);
    }

    // shift method: remove val from the beginning of list and return the removed Node
    shift() {
        if (!this.length) return null;
        const head = this.head;
        this.head = head.next;
        if (this.length === 1) this.tail = null;
        this.length--;
        return head;
    }

    // unshift method: add val to the beginning of list and return the whole list
    unshift(val) {
        const newNode = new Node(val);
        const prevHead = this.head;
        newNode.next = prevHead;
        this.head = newNode;
        if (!this.length) this.tail = newNode;
        this.length++;
        return this;
    }

    // get method: Return the node at specified index in the list, if cannot be found, return null
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    // set method: set the value of element at specified index with the new specified value.
    // Return true if value is set, else return false.
    set(index, val) {
        const nodeAtIndex = this.get(index);
        if (!nodeAtIndex) return false;
        nodeAtIndex.val = val;
        return true;
    }

    // insert method: add an element at the specified index into the list and move remaining elements next.
    // Return true if element is added, else false.
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);
        const newNode = new Node(val);
        const prevNode = this.get(index-1);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++;
        return true;
    }

    // remove method: remove the element at the specified index.
    // Return the removed element if found, else return null.
    remove(index) {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return this.shift();
        const prevNode = this.get(index-1);
        const removedNode = prevNode.next;
        prevNode.next = removedNode.next;
        if (index === this.length-1) this.tail = prevNode;
        this.length--;
        return removedNode;
    }

    // reverse method: reverse the list order and return the list
    reverse() {
        const head = this.head;
        this.head = this.tail;
        this.tail = head;

        let prevNode = null, nextNode = null, node = head; // NOTE: not this.head since it now points to previous tail
        while(!!node) {
            nextNode = node.next;
            node.next = prevNode;
            prevNode = node;
            node = nextNode;
        }
        return this;
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

const list = new SinglyLinkedList(); // List:  (empty)
list.push(1); // List: 1
list.push(2); // List: 1 -> 2
list.push(3); // List: 1 -> 2 -> 3
list.push(4); // List: 1 -> 2 -> 3 -> 4
list.push(5); // List: 1 -> 2 -> 3 -> 4 -> 5
list.unshift(0); // List: 0 -> 1 -> 2 -> 3 -> 4 -> 5
const lastEl = list.pop(); // lastEl is now the node with val 5 and next pointing to null. New tail of list is the node with val 4. List: 0 -> 1 -> 2 -> 3 -> 4
const firstEl = list.shift(); // firstEl is now the node with val 0 and next pointing to node with val 1. New head of list is node with val 1. List: 1 -> 2 -> 3 -> 4
const el = list.get(0); // el is node at index 0, ie. node with val 1. Does not change list.
list.set(3, 5); // sets val of node at index 3 as 5. List: 1 -> 2 -> 3 -> 5
list.insert(3, 4); // inserts node with value 4 at index 3. List: 1 -> 2 -> 3 -> 4 -> 5
const removedEl = list.remove(1); // Removes node at index 1 from list and sets it to removedEl variable. List: 1 -> 3 -> 4 -> 5
list.reverse(); // Reverses the order of list and returns the complete list. List: 5 -> 4 -> 3 -> 1