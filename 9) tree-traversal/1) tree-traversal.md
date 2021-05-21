# Tree traversal
Tree traversal means how we can visit all the nodes in the tree. There are mainly two kinds of tree traversal methods:
1. Breadth First Search (BFS) -> After the root node, we visit all its child nodes first. Then the child nodes of their child nodes in order until all the tree nodes have been visited. Traversal order is for all the nodes at one tree level to be traversed, before moving on to the next tree level.

2. Depth First Search (DFS) -> After root node, we take one child and keep on visiting its child node recursively until a leaf node is found. Then we move onto the next child node of the last parent node whose child node is still left untraversed.

# Types of DFS
DFS is further divided into 3 very common types where the order in which nodes are visited is changed. They are as follows:
1. DFS Pre-Order -> Any Node is visited before its child. Then we visit the first child node recursively until we reach the left node. Then we backtrack to the last parent node which still has a child remaining, and keep on doing that until all nodes have been visited.

2. DFS In-Order -> 

3. DFS Post-Order -> 

# NOTE: These tree traversal methods are the same regardless of the tree type.