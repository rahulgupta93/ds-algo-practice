//! For definition etc, view readme files in this folder

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
        if(!!this.root) {
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
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(3);
tree.insert(17);
tree.insert(2);
tree.insert(7);
tree.insert(20);
tree.insert(13);
let el = tree.find(3); // el is now node with value 3
el = tree.find(4); // el is now null
el = tree.find(17); // el is now node with value 17
el = tree.find(11); // el is now null