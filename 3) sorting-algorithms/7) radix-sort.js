//! What is radix sort?
// Radix sort is a special sort where we have a special requirement for our elements being sorted.
// We assume that we will only be sorting integers (base 10 for our case, but can be any other base as well)

// NOTE: We make use of special property of integers that any number with greater number of digits
// is bigger than a number with lesser number of digits.

// We start from rightmost digit of number and place each number in one of 10 separate buckets [0-9]
// according to the number picked.
// Then we put all elements back in an array by emptying each bucket starting from 0-9.
// Buckets are emptied in first-in first-out order;

// We pick the next rightmost element and repeat the above steps until the digit count of element with most
// digits is reached.

// Once we reach this point, we get a sorted array.

//! Time complexity
// Best, Average and Worst case: O(n*k), where n is the array length,
// and k is the max digit count out of all digits in array
//! Space complexity
// O(n + k), where n is the array length,
// and k is the max digit count out of all digits in array

//! Code/PseudoCode

function radixSort(arr) {
    const maxDigitCount = maxDigits(arr);
    for(let digitPlace = 0; digitPlace<maxDigitCount; digitPlace++) {
        // Line below does the same thing as: const buckets = [[],[],[],[],[],[],[],[],[],[]];
        const buckets = Array.from({length: 10}, () => []);
        for (let i=0; i< arr.length; i++) {
            const digitAtPlace = getDigit(arr[i], digitPlace);
            buckets[digitAtPlace].push(arr[i]);
        }
        arr = buckets.flat();
    }
    return arr;
}

function getDigit(num, place) {
    const numStr = num.toString();
    if (numStr.length-1 < place) return 0;
    return numStr[numStr.length-1-place];
}

function getDigitCount(num) {
    return num.toString().length;
}

function maxDigits(arr) {
    let maxDigitCount = 0;
    arr.forEach(num => {
        maxDigitCount = Math.max(maxDigitCount, getDigitCount(num));
    });
    return maxDigitCount;
}

console.log(radixSort([2,5,1,22,17])); // prints [1,2,5,17,22]
console.log(radixSort([5,6,7,1,2,4,8,9,3])); // prints [1, 2, 3, 4, 5, 6, 7, 8, 9]
