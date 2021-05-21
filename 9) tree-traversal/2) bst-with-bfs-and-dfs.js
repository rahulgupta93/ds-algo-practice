//! Points to note
// Ideally we should use our own queue class made from a singly linked list,
// but we can use array to simply demonstrate the BFS algorithm

// We are using BST here instead of a normal tree, since we have already created a BST class.
// The algorithm can be easily tweaked to use a normal tree structure.

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.count = 1;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        let node = this.root;
        while (!!node) {
            
            // special case when duplicate value is being entered.
            // if (value === node.value) return undefined;

            // if duplicate is present, increase node count
            if (value === node.value) {
                node.count++;
                return this;
            };

            if (value < node.value) {
                // Search left of the tree
                if (node.left) {
                    node = node.left;
                } else {
                    node.left = newNode;
                    return this;
                }
            } else {
                // Search right of the tree
                if (node.right) {
                    node = node.right;
                } else {
                    node.right = newNode;
                    return this;
                }
            }
        }
    }

    find(value) {
        let node = this.root;
        while (!!node && node.value !== value) {
            if (value < node.value) {
                node = node.left;
            } else {
                node = node.right;
            }
        }
        return node;
    }

    // Breadth first search method to traverse a tree
    BFS() {
        const queue = [];
        const visited = [];
        if (!this.root) return;
        queue.push(this.root);
        while(queue.length) {
            const node = queue.shift();
            visited.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return visited;
    }

    // DFS pre order method of traversal
    // Here, we first visit the node, then its left child, and then its right child.
    // Hence the name pre-order, since actual node is visited before any child.
    DFSPreOrder() {
        if (!this.root) return [];
        const visited = [];
        const visitNodeDFSPreOrder = (node) => {
            visited.push(node.value);
            if (node.left) visitNodeDFSPreOrder(node.left);
            if (node.right) visitNodeDFSPreOrder(node.right);
        }
        visitNodeDFSPreOrder(this.root);
        return visited;
    }

    // DFS post order method of traversal
    // Here, we first visit the left child, then the right child, and then visit the actual node itself.
    // Hence the name post-order, since actual node is visited after left and right children.
    DFSPostOrder() {
        if (!this.root) return [];
        const visited = [];
        const visitNodeDFSPostOrder = (node) => {
            if (node.left) visitNodeDFSPostOrder(node.left);
            if (node.right) visitNodeDFSPostOrder(node.right);
            visited.push(node.value);
        }
        visitNodeDFSPostOrder(this.root);
        return visited;
    }

    // DFS in order method of traversal
    // Here, we first visit the left child, then the node itself, and lastly, the right child node.
    // Hence the name in-order, since actual node is visited after the left child, but before the right child
    // (In order from left to right).
    DFSInOrder() {
        if (!this.root) return [];
        const visited = [];
        const visitNodeDFSInOrder = (node) => {
            if (node.left) visitNodeDFSInOrder(node.left);
            visited.push(node.value);
            if (node.right) visitNodeDFSInOrder(node.right);
        }
        visitNodeDFSInOrder(this.root);
        return visited;
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(17);
tree.insert(19);
tree.insert(7);
tree.insert(3);
tree.insert(13);

// Tree after insert

//              10
//      5                 17
//  3       7         13      19

console.log(tree.BFS());            // prints -> 10,5,17,3,7,13,19
console.log(tree.DFSPreOrder());    // prints -> 10,5,3,7,17,13,19
console.log(tree.DFSPostOrder());    // prints -> 3,7,5,13,19,17,10
console.log(tree.DFSInOrder());    // prints -> 3,5,7,10,13,17,19