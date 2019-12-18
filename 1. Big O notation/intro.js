// What is big O notation?
// Big O notation is a means to represent an alogithm's efficiency.
// It represents how much the time taken by algorithm increases when 
// the data set for that algorithm increases.

// We calculate time complexity based on how many operations are performed 
// in proportion to the data size or the size of input.
// eg if the is a for loop inside a for loop, number of operations would be 
// proportionate to the square of input size

// Some common time complexities in order of least time taken to most time taken are:
// 1) O(1) - Constant time (Time taken by alorithm is not dependent on input size)
// 1) O(log n) - Time taken is directly proportional to log of input size
// 1) O(n) - Time taken is directly proportional to input size
// 1) O(nlog n) - Time taken is directly proportional to input size multiplied by log of input size
// 1) O(n^2) - Time taken is directly proportional to square of input size


// Below method has a time complexity of O(n)
// This is because some operation takes place for each object in the input array
function printAll(arr) {
  for(var i=0; i< arr.length; i++) {
    console.log(arr[i]);
  }
}

printAll([1,2,3]);