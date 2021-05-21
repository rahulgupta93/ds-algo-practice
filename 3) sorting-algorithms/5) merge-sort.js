//! What is merge sort?
// Merge sort is a sorting algorithm of divide and conquer category.
// Here we keep splitting our array into sets of 2 until all arrays have either 0 or 1 elements
// Then we merge these arrays together in sorted order

// Ex: Array -> [13,5,7,4,6,1]
// Step 1: [13,5,7],                    [4,6,1]
// Step 2: [13],    [5,7],              [4],        [6,1]
// Step 3: [],[13], [5],[7],            [],[4],     [6],[1]
// Step 4: [13],    [5,7],              [4],        [1,6]
// Step 5: [5,7,13],                    [1,4,6]
// Step 6: [1,4,5,6,7,13]

//! Time complexity
// Best and Worst case: O(n*log(n))

//! Space complexity
// O(n)

//! Code/PseudoCode

function mergeSort(arr) {
    if (arr.length > 1) {
        const halfIndex = Math.floor(arr.length/2)
        const arr1 = mergeSort(arr.slice(0, halfIndex));
        const arr2 = mergeSort(arr.slice(halfIndex));
        return merge(arr1, arr2);
    }
    return arr;
}

function merge(arr1, arr2) {
    const results = [];
    let i=0,j=0;
    while(i<arr1.length && j<arr2.length) {
        if (arr1[i]<arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while(j<arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

console.log(mergeSort([2,5,1,22,17])); // prints [1,2,5,17,22]