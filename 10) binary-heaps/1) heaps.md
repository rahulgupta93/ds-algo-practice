# Heaps
Heaps are a special type of trees which is an almost complete tree. Meaning, that all levels of a heap must be filled before a node can be added to a new level.

# Binary heaps
Binary heaps are a special sort of heap where each parent has at most 2 child nodes. Also, just like any heap, all nodes at one level must be filled before a node can be added to its next level.

# IMPORTANT
# This property of binary heaps allows a binary heap to be represented in an array with the following property:
1. For node at index n, child node index: Left child: 2*n + 1, Right child: 2*n + 2
2. For node at index n, parent node index: Math.floor((n-1)/2)

Binary heaps are generally of two types:
1. Max Heap: The value of any parent node has to be greater than the value of any of its descendants.
1. Min Heap: The value of any parent node has to be smaller than the value of any of its descendants.

NOTE: In both heaps, there is no restriction between values of sibling nodes at any level.

# Heaps have a very nifty property of being able to be represented in an array with some math, due to its property of always filling the left-most empty sibling position at the highest level of the tree.

# How heap is represented in an array

Heap normal representation
---------------------------
                        55
                20              33
        12          14      25      30
    2       7

Heap displaying each left child first
--------------------------------------
 55
 |___20, 33
      |   |___________25, 30
      |_______12, 14
               |   
               |______________ 2, 7


Actual array representation
----------------------------
Arr:    [55, 20, 33, 12, 14, 25, 30, 2, 7]
Index:    0,  1,  2,  3,  4,  5,  6, 7, 8

Child of index 0: At index 2*0 + 1, 2*0 + 2, ie: 1 and 2.
Child of index 1: At index 2*1 + 1, 2*1 + 2, ie: 3 and 4.
Child of index 3: At index 2*3 + 1, 2*3 + 2, ie: 7 and 8.
Parent of index 8: Floor ((8-1)/2), ie Floor(3.5), ie: 3
Parent of index 5: Floor ((5-1)/2), ie Floor(2), ie: 2


# Time complexity
1. Insertion: O(log n)  -> best, average and worst
2. Removal: O(log n)  -> best, average and worst
3. Search: O(n)  -> best, average and worst


# The worst case time complexity of a min/max binary heap (and a priority queue implemented using it)
# is O(log n)

# This is due to the special property of heap that we always fill the left-most sibling on a level first;
# and that we only start filling the next level if the current level is completely filled.

# As opposed to a binary search tree, where worst case time complexity for insertion and removal is O(n).
# Since there can be completely skewed BSTs where each node only has a maximum of 1 child.
# In that case, we potentially have to traverse all the elements before insertion or after removal.