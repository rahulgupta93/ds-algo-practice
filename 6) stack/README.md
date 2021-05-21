# Stack

# Definition:  LIFO (Last-In First-Out)
A stack is a collection of items, where the last item entered in the collection is the first item removed.
It has two main methods:
1. Push: push an item to the top of the stack.
2. Pop: Remove an item from the top of the stack.

# Uses
1. Function invocation, eg: Call stack
2. Undo, Redo functionality. eg: in paint, text editors etc.
3. Routing. eg: History in browser

# Stacks can be created easily using arrays or linked list.
1. For array, simply using push and pop methods makes it work like a stack with extra indexing data.
2. For singly linked list, simply renaming the un-shift and shift methods to push and pop respectively, and removing other unnecessary methods will do the job. It has the added advantage of not keeping any extra data (like indexing or previous node pointer), since we do not care about it for stacks.
3. For doubly linked list, you can do one of the following:
    a) Simply renaming the un-shift and shift methods to push and pop respectively, and removing other unnecessary methods will do the job. (just like singly linked list)
    b) Simply use push and pop methods as they are, remove other unnecessary methods.
Doubly linked list carries extra information in that each element also has the info about the previously entered element.

# Time complexities:
1. Insertion: O(1)
2. Deletion: O(1)
3. Search: O(n) -> They are not really relevant to the stack. But if implemented, it would be O(n).
4. Access: O(n) -> They are not really relevant to the stack. If we care about accessing elements by index, we should be looking at other data structures (like arrays)