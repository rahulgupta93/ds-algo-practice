# What is a hash?
A hash is a function that takes in an input and returns a numeric value for that input.
A good hash function should fulfill the following requirements:

1. It should be fast. O(1) time complexity is ideal, since we do a hash, both while putting an element in the hash table as well as while getting an item from the hash table.

2. It should return a distributed number. i.e. for different arguments, it should try to distribute the return values more. It is impossible that all inputs have a different return value, but we should ensure that this happens as little as possible. We can do this by making use of prime numbers while calculating that hash.

3. It should return a deterministic number. ie. no matter how many times we try to has an input, it should always return the same value. ie, we cannot use random number of timestamps to calculate hash.