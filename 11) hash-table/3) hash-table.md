# Hash tables or Hash maps
Hash tables or Hash maps are data structures that are used to store key value pairs. They are generally pre-built in most programming languages due to their (almost) constant time complexity for insertion, access, get, remove etc.
For eg, Javascript has Objects, Maps. Objects are special cases where keys are restricted to strings.
Ruby has HashTables, Java has Hash maps etc.

While creating our own hash table, the aim is that each key be assigned a numeric value at which we can store the key value pair.

# Time complexity of hash tables (they always depend on the hash function)
1. Insertion: O(1)
2. Access: O(1)
3. Deletion: O(1)
4. Searching (value): O(n)

NOTE: COmplexity for insertion,access, deletion can be O(n) in the worst case, given a hash function which gives all keys the same hash value.

# Types of hash tables

1. Separate chaining: In this, we can store multiple key-value pairs at the same hash location, so if a hash location has multiple values, we then compare them to the key we are trying to access.
In this method, if our hash table size is x, we can still store more than x elements in our has table, because it is possible for more than one value to be stored at one hash location.

2. Linear Probing: In this, while setting a key value pair, if the position at the hash value of key is filled, we look for the next empty spot in our table and set the key-value pair there. Similarly, while getting the value, we start from the hash location and compare the keys, if the key is found equal, we return the value.
In this method of creating hash table, we only have a fixed number of elements that can be entered in the table. After which no other element can be entered.