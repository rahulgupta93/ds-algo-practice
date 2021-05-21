# Binary Tree
Binary Trees are a special case of Trees.
They have the restriction that any node in the tree can have at most 2 child nodes.

eg:
            1
          /   \
        2       3
      /   \       \
    4       5       6

# Binary Search Tree (BST)
Binary search trees have further restriction on the binary tree.
Like binary tree, all node can have at most 2 child nodes.
For any parent node in a BST, all descendant nodes to the left of the parent node are smaller than the parent node. Also, all descendant nodes to the right of the parent node are greater than the parent node.

eg:
            4
          /   \
        2       5
      /   \       \
    1       3       6

# Why use Binary search Tree?
Due to the fact that in a binary search tree, all descendant element to left of parent are smaller than parent, and all descendant to the right are greater, we can search for an element with lesser comparisons.

We do not have to search through all the nodes of the tree.

We simply search the root, if searched value is less than node val, we then look at its left children, otherwise we look at its right children.
We keep doing it until we find the element or until a node has no children.
After each comparison, we discard almost half of the options (either lef half or the right half of the tree portion below the node).

# Duplicate values in binary search trees
Addition of duplicate values in a binary search tree is handled differently by different implementations. There are 2 common ways:
1. If we only care about unique values, we can ignore the duplicate value and not add it to the tree.
2. If we want to keep track of duplicate values, we can have an extra variable for frequency or count of the node. If a duplicate is added to the tree, we can simply increment the count of that node. 
