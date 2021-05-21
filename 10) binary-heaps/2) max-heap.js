class MaxBinaryHeap {
    constructor() {
        this.heap = [];
    }
    insert(val) {
        this.heap.push(val);
        this.bubbleUp()
    }
    bubbleUp() {
        let index = this.heap.length-1
        const newVal = this.heap[index];
        let parentIndex, parentVal;
        while(index > 0) {
            parentIndex = this.getParentIndex(index);
            parentVal = this.heap[parentIndex];
            if (parentVal < newVal) {
                this.heap[parentIndex] = newVal;
                this.heap[index] = parentVal;
                index = parentIndex;
            } else break;
        }
    }
    getParentIndex(index) {
        return Math.floor((index-1)/2);
    }

    extractMax() {
        const oldMax = this.heap[0];
        const lastVal = this.heap.pop();
        if (!!this.heap.length) {
            this.heap[0] = lastVal;
            this.bubbleDown();
        }
        return oldMax;
    }

    bubbleDown() {
        const element = this.heap[0];
        let index = 0, length = this.heap.length;
        while (true) {
            const leftChildIdx = this.getLeftChildIndex(index);
            const rightChildIdx = this.getRightChildIndex(index);
            let swap;
            let leftChild, rightChild;
            // if no left child exists for node, it means we are on a leaf node, so, exit out of loop
            if (leftChildIdx<length) {
                leftChild = this.heap[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx<length) {
                rightChild = this.heap[rightChildIdx];
                if (rightChild > element && rightChild > leftChild) {
                    swap = rightChildIdx;
                }
            }

            // if max child value is less than bubble value, exit the loop
            if (!swap) break;

            // max child value is larger than bubble value, so swap their values
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;

            // update index of bubble value to the max child index
            index = swap;
        }
    }

    getLeftChildIndex(index) {
        return 2*index+1;
    }
    getRightChildIndex(index) {
        return 2*index+2;
    }
}

const heap = new MaxBinaryHeap(); // heap: []
heap.insert(10); // heap: [10]
heap.insert(5); // heap: [10,5]
heap.insert(12); // heap: [12,5,10]
heap.insert(21); // heap: [21,12,10,5]
heap.insert(3); // heap: [21,12,10,5,3]
heap.insert(13); // heap: [21,12,13,5,3,10]
