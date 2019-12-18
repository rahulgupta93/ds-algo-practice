// Arrays are an ordered set of data.
// Arrays can have following operations:
// Built in array.sort has a complexity of O(n*log n)

var arr = [];

// 1) Push - O(1)
// Push specifically pushes at the end of array. It is done in constant time.
arr.push(0);
arr.push(1);
arr.push(2);
arr.push(3);
console.log('after push, array: ', arr); // prints [0,1,2,3]

// 2) Pop - O(1)
// Refers to deleting an item from the end of array. It is done in constant time.
arr.pop();
console.log('after pop, array: ', arr); // prints [0,1,2]

// 3) Retrieve/Read - O(1)
// Reading value at a particular index in array. It is done in constant time.
console.log('value at index 1: ', arr[1]); // prints 1

// 4) Insert - O(n)
// Insert refers to inserting an element at a partiular location without removing others.
// To do this, all elements at and after the index would need
// to be shifted one place to the right 

// 5) Delete - O(n)
// Delete refers to deleting an element at a partiular location without removing others.
// To do this, all elements after the index would need
// to be shifted one place to the left 

// 6) Search - O(n)
// Search for a particular value. Needs iteration over all element values until the element is found

// 7) Shift - O(n)
// Shifting all array elements one position to left or right