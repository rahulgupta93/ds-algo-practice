// !-- Definition (What is it) --! // 
// Binary search works only on sorted arrays/collections.
// We compare value in middle of array and eliminate half of the 
// remaining array every time we do a comparison.

// !-- Time complexity --! // 
// Time complexity: O(log n)

// !-- Pseudo Code --! // 
// We set two pointers specifying the left and right index, left being 0 and right being last index in array.
// We define a variable middle.
// Repeat the below until left<=right
    // Set middle to the index in the middle of left and right indexes.
    // We start searching from the middle element and compare its value with the value we are searching for.
    // If middle element is same, we return the index of middle element.
    // If middle element is less than searched value, we set left index as middle index + 1;
    // If middle element is greater than searched value, we set right index as middle index - 1;

// If until this point, no value is returned, it means value is not in the array.


// !-- Example --! // 
// Example: Write a binary search method that takes a sorted array, and a value as argument.
// If value is present in arr, it returns the index of value in array,
// If value is not present in array, return -1.

function binarySearch(arr, val){
    let left=0, right=arr.length-1;
    let middle;
    while (left<=right) {
        const sumIndex = left + right;
        if (sumIndex%2 === 0) middle = sumIndex/2;
        else middle = (sumIndex-1)/2;
        if (arr[middle] === val) return middle;
        if (arr[middle] < val) {
            if (arr[left] < arr[right]) left = middle+1;
            else right = middle-1;
        } else {
            if (arr[left] > arr[right]) left = middle+1;
            else right = middle-1;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5], 2)); // Prints 0
console.log(binarySearch([1,2,3,4,5], 3)); // Prints 2
