// !-- Definition (What is it) --! // 
// Linear search refers to simply looping through the whole array/collection
// until we find the element we are searching for.

// It is the preferred method of search on unsorted array/collection

// !-- Time complexity --! // 
// Time complexity: O(n)

// !-- Example --! // 
// Example: Create a method linear-search that takes and array and a value,
// then if the value is present in the array, it returns the index of value in array.
// If array is not present, return -1;

function linearSearch(arr, val) {
    for(let i=0; i<arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}

console.log(linearSearch([12,13,44,67,35,22,17], 35)); // prints 4
console.log(linearSearch([12,13,44,67,35,22,17], 100)); // prints -1
