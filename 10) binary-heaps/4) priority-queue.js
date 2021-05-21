//! This priority queue is implemented using a min binary heap

// NOTE: Below priority queue only takes into account the priority value
// If two items have the same priority, there is no guarantee that the item can enqueued first is removed first.
// This can be done by adding another property in node like insertTime, and then
// when checking whether yo bubble up or down, we also take into account insert time.

// In actual scenarios, priority will be a combination of wait time, resource requirement, base priority etc.

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    // take a val and priority, create a node and insert node in min heap based on priority
    enqueue(val, priority) {
        const node = new Node(val, priority);
        this.values.push(node);
        this.bubbleUp();
    }
    // take the max priority item (with min priority value) and return it.
    // Also update min heap after removing max item
    dequeue() {
        const node = this.values[0];
        const element = this.values.pop();
        if (this.values.length) {
            this.values[0] = element;
            this.bubbleDown();
        }
        return node;
    }
    bubbleUp() {
        let index = this.values.length-1;
        const element = this.values[index];
        let parentIndex, parent;
        while(index > 0) {
            parentIndex = Math.floor((index-1)/2);
            parent = this.values[parentIndex];
            
            // Parent has higher or same priority (lesser in number, actually higher priority),
            // stop bubbling up
            if (parent.priority < element.priority) break;
            
            // element priority is higher (lower in number), bubble up
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
    bubbleDown() {
        let index = 0;
        const element = this.values[0];
        const length = this.values.length;
        while(true) {
            const leftChildIdx = 2*index + 1;
            const rightChildIdx = 2*index + 2;
            let swap, leftChild, rightChild;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (rightChild.priority < element.priority && rightChild.priority < leftChild.priority) {
                    swap = rightChildIdx;
                }
            }

            if (!swap) break;

            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}

const er = new PriorityQueue();
er.enqueue("Common cold", 5);
er.enqueue("Gunshot wound", 1);
er.enqueue("High fever", 4);
er.enqueue("Broken arm", 2);
er.enqueue("Glass in foot", 3);
er.enqueue("Slight fever", 5);
er.enqueue("Appendicitis", 2);
er.enqueue("Flu", 3);
er.enqueue("Sore throat", 5);
er.enqueue("Stomach ache", 5);
er.enqueue("Light fever", 5);

let el = er.dequeue(); // el is Gunshot wound with priority 1
el = er.dequeue(); // el is Broken arm with priority 2
el = er.dequeue(); // el is Appendicitis with priority 2
el = er.dequeue(); // el is Flu with priority 3
el = er.dequeue(); // el is Glass in foot with priority 3
el = er.dequeue(); // el is High fever with priority 4
el = er.dequeue(); // el is Slight fever with priority 5
el = er.dequeue(); // el is Sore throat with priority 5
el = er.dequeue(); // el is Light fever with priority 5
el = er.dequeue(); // el is Stomach ache with priority 5
el = er.dequeue(); // el is Common cold with priority 5
el = er.dequeue(); // el is undefined
el = er.dequeue(); // el is undefined