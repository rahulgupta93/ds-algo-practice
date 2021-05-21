// !-- Problem statement
// We need to search the count of a substring in a string

// !-- Naive method
// Naive method of finding the count loops over long string and for each loop item,
// it checks if the substring starting from that index matches the short string.
// This method is called naive since it is a simple method to write, but doesn't have
// a good time complexity.

// !-- Time complexity
// Time complexity -> O(n^2)

// !-- A better alternate
// A better alternate to using this method in terms of time complexity is the KMP (Knuth-Morris-Pratt) method

// !-- Pseudo code
// Define a variable count and set it as 0 initially
// Loop of the larger string from start until char at (long string length - short string length); let index be i.
    // define variable isSubstringFound as true
    // For each loop, loop over the smaller string (ie. substring); let index be j
        // If char at index (i+j) in long string is not equal to char at index (j) in short string, set isSubstringFound as false and break out of inner loop
    // if after inner loop, isSubstringFound is true, add 1 to count variable
// Return count variable

// !-- Implementation
function naiveSearch(long, short) {
    if (long.length < short.length) {
        return 0;
    }
    let count = 0;
    for (let i=0; i<(long.length - short.length + 1); i++) {
        let isSubstringFound = true;
        for(let j=0; j<short.length;j++) {
            if (long[i+j] !== short[j]) {
                isSubstringFound = false; break;
            }
        }
        if (!!isSubstringFound) count++;
    }
    return count;
}

console.log(naiveSearch('winter is coming', 'win')); // Prints 1
console.log(naiveSearch('winter is coming', 'in')); // Prints 2
console.log(naiveSearch('winter is coming', 'i')); // Prints 3
