//! What is selection sort?
// Selection sort is a simple sorting algorithm. In this, we iterate
// over the whole array and mark the index of the smallest element. After this iteration,
// if the smallest value is not at the index at which we started iteration, we swap the array values
// of index at start and index having smallest value.

// Thus after one iteration, smallest element is at the start of array.

// Then we repeat the above process for the array except first element (since that is already sorted),
// and we put 2nd smallest element at second place in the array.

// We repeat the process, and each time remove one more element from consideration. and
// by the time we reach the end of array, our array is sorted.

// NOTE: It is different from bubble sort in that we don't swap each time consequent array items are not sorted.
// We are only swapping after going through the array and finding the next smallest item

//! Time complexity
// Time complexity (best and worst case): O(n^2)

//! Space complexity
// O(1)

//! Code/PseudoCode

function selectionSort(arr) {
    for (let i=0; i<arr.length; i++) {
        let indexOfSmallest = i;
        for (let j=i+1; j<arr.length; j++) {
            if (arr[j] < arr[indexOfSmallest]) {
                indexOfSmallest = j;
            }
        }
        if (indexOfSmallest !== i) {
            // swap elements at index i and indexOfSmallest
            const temp = arr[i];
            arr[i] = arr[indexOfSmallest];
            arr[indexOfSmallest] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([2,5,1,22,17])); // prints [1,2,5,17,22]