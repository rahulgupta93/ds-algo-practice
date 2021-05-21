# Comparison of BFS vs DFS

# Time complexity of BFS and all 3 DFS is the same.

# Space complexity
1. If the tree is more wide then high, prefer DFS, since in DFS, we go along the height first. In BFS, we save the order in queue, so for a wide tree, there would be a lot of unnecessary data saved in queue, even if it gets removed at the end.
2. If tree is higher than it is wider, prefer BFS.


# DFS 3 different types:
All three DFS types are the same in both time and space complexities.

They have a few common quirks:
1. DFS In Order -> It gives us all the elements in sorted order.
2. DFS Pre Order -> If we create a new BST with the elements in Pre-order, we get the exact same tree we started with.