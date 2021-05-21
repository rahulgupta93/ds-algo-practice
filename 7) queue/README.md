# Queue

# Definition: FIFO (First-In First-Out)
A queue is a collection of items, where the first item entered/remaining in the collection is the first item removed.
It has two main methods:
1. Enqueue: Add an item to the end of the queue/collection.
2. Dequeue: Remove an item from the start of the queue/collection.

# Uses
1. Print/Task scheduler
2. Uploading/Downloading resources

# Queues can be created easily using arrays or linked list.
1. For array, simply using push and shift methods makes it work like a queue with extra indexing data, and shift method takes more time due to extra re-indexing.
2. For singly linked list, simply renaming the push and shift methods to enqueue and dequeue respectively, and removing other unnecessary methods will do the job. It has the added advantage of not keeping any extra data (like indexing or previous node pointer), since we do not care about it for queues.
3. For doubly linked list, you can do one of the following:
    a) Simply renaming the push and shift methods to enqueue and dequeue respectively, and removing other unnecessary methods will do the job. (just like singly linked list)
    b) Simply use un-shift and pop methods as they are, remove other unnecessary methods.
Doubly linked list carries extra information in that each element also has the info about the previously entered element.

# Time complexities:
1. Insertion: O(1)
2. Deletion: O(1)
3. Search: O(n) -> They are not really relevant to the queue. But if implemented, it would be O(n).
4. Access: O(n) -> They are not really relevant to the queue. If we care about accessing elements by index, we should be looking at other data structures (like arrays)