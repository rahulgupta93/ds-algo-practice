//! What is bubble sort optimization?
// In normal bubble sort, even if the array is completely sorted after a few iterations
// of the outer loop, we still complete all iterations (which is unnecessary)

// This can happen in situations where the array is already almost sorted except for a
// few elements.

// So, as an optimization, we can keep a flag as to whether or not a swap was done
// during an iteration of outer loop.
// If at least one swap was done, we continue outer iterations. But if no swap was done,
// then it means that the array is already sorted. So, we can break out of outer loop iterations

//! Time complexity
// Worst case: O(n^2)
// Best case: O(n)

//! Space complexity
// O(1)

//! Code/PseudoCode

function bubbleSortOptimized(arr) {
    for (let i=arr.length-1; i>0; i--) {
        let isAnyItemSwapped;           //! flag is defined to see if any item is swapped and set to false
        for (let j=0; j<i; j++) {
            if (arr[j] > arr[j+1]) {
                // swap
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isAnyItemSwapped = true;    //! Since swap is made, set flag to true
            }
        }
        if (!isAnyItemSwapped) break;       //! If flag is false, it means no swap was made in the iterations, ie. array is already sorted
    }
    return arr;
}

bubbleSortOptimized([2,5,1,22,17]); // returns [1,2,5,17,22]