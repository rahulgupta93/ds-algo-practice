# Time complexity of a Binary Search Tree

1. Insertion
    a) Average and best case: O(log n)
    a) Worst case: O(n)

2. Search/Access
    a) Average and best case: O(log n)
    a) Worst case: O(n)

Generally, we keep discarding almost half of the remaining elements by moving from a parent node to either left or right. Therefore, average and best case complexity is O(log n).

# Worst case
There can be specific configurations of the tree where all nodes have at most one child.
In such scenarios, we are not able to discard any elements in the tree since each node has either a left or a right node, but not both.

Thus, for worst case, time complexity of search and insert is O(n).