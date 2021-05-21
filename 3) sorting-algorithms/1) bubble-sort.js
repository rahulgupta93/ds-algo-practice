//! What is bubble sort?
// Bubble sort is a simple sorting algorithm in which we loop over the array
// and during each iteration, again loop over the array.

// During each inner for loop iteration, we compare adjacent elements and if the
// right element is smaller than left element, we swap their positions.

// In doing this, after the first iteration of outer loop, the greatest element in array
// is at the rightmost position (ie. it has biggest index).

// This way, after iteration of outer loop, the biggest element is set at the rightmost position.
// After outer loop is finished, the array is sorted

//! Time complexity
// Worst and best case: O(n^2)

//! Space complexity
// O(1)

//! Code/PseudoCode

function bubbleSort(arr) {
    for (let i=arr.length-1; i>0; i--) {
        for (let j=0; j<i; j++) {
            if (arr[j] > arr[j+1]) {
                // swap
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

bubbleSort([2,5,1,22,17]); // returns [1,2,5,17,22]