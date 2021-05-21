//! What is quick sort?
// Quick sort is also a sorting algorithm of divide and conquer category.
// Here, we pick a pivot element (can be any element, start, end, middle etc),
// then we loop over the array portion and put all elements smaller than pivot to the left,
// all elements greater than pivot to the right, and the pivot in its correct place.

// Then we repeat the above steps for the left portion of array and right portion of array,
// until array portion has only one element.

// NOTE: Worst case complexity of quicksort is O(n^2). This is the case if every time we choose a pivot,
// its values is either the largest or the smallest in the array portion. This way, we have to make
// the partitions 'n' times instead of 'log n' times that we do in best or average case.
// Example of worst case scenario (when start or end element is picked as pivot) is an already sorted array,
// whether in required sort order or opposite sort order.

// Ex: Array -> [13,5,7,4,6,1]
// Step 1: [5,7,4,1,13]
// Step 2: [1,4,5,7,13]
// Step 3: [1,4,5,7,13]
// Step 4: [1,4,5,7,13]
// Step 5: [1,4,5,7,13]
// Step 6: [1,4,5,7,13]

//! Time complexity
// Best and Average case: O(n*log(n))
// Worst case: O(n^2)
//! Space complexity
// O(log n)

//! Code/PseudoCode

function quickSort(arr, left=0, right=arr.length-1) {
    // debugger;
    if (left<right) {
        const pivotIndex = pivot(arr, left, right);
        quickSort(arr,left,pivotIndex-1);
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
}

function pivot(arr, startIndex = 0, endIndex = arr.length-1) {
    let pivot = arr[startIndex];
    let pivotIndex = startIndex;
    for (let i=startIndex+1; i<=endIndex; i++) {
        if (arr[i]<pivot) {
            swap(arr, pivotIndex+1, i);
            pivotIndex++;
        }
    }
    swap(arr, startIndex, pivotIndex);
    return pivotIndex;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(quickSort([2,5,1,22,17])); // prints [1,2,5,17,22]
console.log(quickSort([5,6,7,1,2,4,8,9,3])); // prints [1, 2, 3, 4, 5, 6, 7, 8, 9]
