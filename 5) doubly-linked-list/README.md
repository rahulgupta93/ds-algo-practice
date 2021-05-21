# Doubly linked list

# A doubly linked list is a collection of nodes where each node has three properties:
1. val -> value of the list item.
2. next -> reference to the next list item.
3. prev -> reference to the previous list item.

# A doubly linked list has to maintain the following:
1. A head pointer: Refers to the first item in the list. It is necessary to have the head pointer for a doubly linked list.
2. A length variable: Specifies the number of elements in the list. On initializing an empty new list, length is zero.
3. A tail pointer: Refers to last element in the list. It is necessary to have the tail pointer for a doubly linked list.

# Time complexities:
1. Insertion: O(1)
2. Deletion: O(1)
3. Search: O(n)
4. Access: O(n)

# Comparison with array
# 1. Insertion
For insertion, doubly linked list are either similar or better than arrays, since if we insert at the beginning, or end, doubly linked list has a time complexity of O(1), whereas arrays only have time complexity of O(1) when pushing to the end, not at the beginning.
# 2. Deletion/Removal
For deletion, doubly linked list are either similar or better than arrays, since if we insert at the beginning, or end, doubly linked list has a time complexity of O(1), whereas arrays only have time complexity of O(1) when deleting the last element, not the first.
# 3. Accessing elements at index
Arrays have a constant time complexity with accessing the elements due to each element having specific index, so they are better than doubly linked list in that aspect.
# 4. Searching for specific element (value)
Arrays also a O(n) time complexity for searching an elements of particular value, so they are the same as doubly linked list in that aspect.