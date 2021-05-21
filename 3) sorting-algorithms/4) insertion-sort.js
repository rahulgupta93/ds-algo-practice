//! What is insertion sort?
// Insertion sort is a sorting algorithm which loops over the array (starting from second element),
// takes the element under iteration, and places it in its corrected sorted position in the portion
// of array before the element we are considering in the iteration.

// We do this once for each item in array and at the end, a sorted array is returned.

// NOTE: It is better in scenarios where we are adding new elements to a sorted array.
// Since insertion sort considers a part of itself as sorted at all times and then puts the newly
// encountered elements in its correct place according to sorting.

// Ex: Array -> [13,5,7,4,6,1]
// After 1st outer iteration: [5,13,7,4,6,1]
// After 2nd outer iteration: [5,7,13,4,6,1]
// After 3rd outer iteration: [4,5,7,13,6,1]
// After 4th outer iteration: [4,5,6,7,13,1]
// After 5th outer iteration: [1,4,5,6,7,13]

//! Time complexity
// Worst case: O(n^2)
// Best case: O(n)          //NOTE: Best case scenario is when the array is almost sorted.

//! Space complexity
// O(1)

//! Code/PseudoCode

function insertionSort(arr) {
    for (let i=1; i<arr.length; i++) {
        let currentVal = arr[i];
        let j;
        for (j=i-1; j>=0 && arr[j]>currentVal; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([2,5,1,22,17])); // prints [1,2,5,17,22]