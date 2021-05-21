# Priority Queue
A priority queue is an abstract concept that takes in all elements, and returns them in the order of priority from highest to lowest. Ie, element with highest priority will be removed first.

A priority queue can easily be implemented using a min or max binary heap. It would be more efficient by implementing it using a list or an array.

NOTE: Higher priority is usually determined by a lower priority number.

# Uses of priority queue
1. Task allocation in an Operating system
2. In general, any time we want to sort elements using priority (where priority can be determined by multiple factors), a priority queue is a good implementation.

# Time complexity of Priority queues
1. Insertion: O(log n)  -> best, average and worst
2. Removal: O(log n)  -> best, average and worst
3. Search: O(n)  -> best, average and worst


# The worst case time complexity of a min/max binary heap (and a priority queue implemented using it)
# is O(log n)

# This is due to the special property of heap that we always fill the left-most sibling on a level first; and that we only start filling the next level if the current level is completely filled.

# As opposed to a binary search tree, where worst case time complexity for insertion and removal is O(n).
# Since there can be completely skewed BSTs where each node only has a maximum of 1 child.
# In that case, we potentially have to traverse all the elements before insertion or after removal.