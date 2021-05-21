//! For definition etc, see README.md file in this folder.

//! Pseudo-code/Code
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
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
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // pop method: remove val from the end of list and return the removed Node
    pop() {
        if (!this.head) return null;
        const oldTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }
        this.length--;
        return oldTail;
    }

    // shift method: remove val from the beginning of list and return the removed Node
    shift() {
        if (!this.length) return null;
        const firstNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            firstNode.next = null;
        }
        this.length--;
        return firstNode;
    }

    // unshift method: add val to the beginning of list and return the whole list
    unshift(val) {
        if (!this.length) return this.push(val);
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    // get method: Return the node at specified index in the list, if cannot be found, return null
    get(index) {
        if (index<0 || index>=this.length) return null;
        let count, currentNode;
        if (index <= this.length/2) {
            count = 0;
            currentNode = this.head;
            while(count !== index) {
                currentNode = currentNode.next;
                count++;
            }
        } else {
            count = this.length-1;
            currentNode = this.tail;
            while(count !== index) {
                currentNode = currentNode.prev;
                count--;
            }
        }
        return currentNode;
    }

    // set method: set the value of element at specified index with the new specified value.
    // Return true if value is set, else return false.
    set(index, val) {
        const node = this.get(index);
        if (!!node) {
            node.val = val;
            return true;
        }
        return false;
    }

    // insert method: add an element at the specified index into the list and move remaining elements next.
    // Return true if element is added, else false.
    insert(index, val) {
        if (index<0 || index>this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);
        const newNode = new Node(val);
        const nodeAtIndex = this.get(index);
        const prev = nodeAtIndex.prev;
        prev.next = newNode;
        newNode.prev = prev;
        newNode.next = nodeAtIndex;
        nodeAtIndex.prev = newNode;
        this.length++;
        return true;
    }

    // remove method: remove the element at the specified index.
    // Return the removed element if found, else return null.
    remove(index) {
        if (index<0 || index>=this.length) return null;
        if (index===0) return this.shift();
        if (index === this.length-1) return this.pop();
        const nodeAtIndex = this.get(index);
        const prev = nodeAtIndex.prev;
        const next = nodeAtIndex.next;
        nodeAtIndex.prev = null;
        nodeAtIndex.next = null;
        prev.next = next;
        next.prev = prev;
        this.length--;
        return nodeAtIndex;
    }

    // reverse method: reverse the list order and return the list
    reverse() {
        const head = this.head;
        this.head = this.tail;
        this.tail = head;

        let prevNode = null, nextNode = null, node = head; // NOTE: not 'this.head' since it now points to previous tail
        while(!!node) {
            nextNode = node.next;
            node.next = prevNode;
            if (!!prevNode) prevNode.prev = node;
            prevNode = node;
            node = nextNode;
        }
        if (!!this.head) {
            this.head.prev = null;
            this.tail.next = null;
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

const list = new DoublyLinkedList(); // List:  (empty)
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