// A poor hash function, which is improved upon below
function hash(str) {
    let total = 0;
    for (let i=0; i<str.length; i++) {
        total += str.charCodeAt(i)
    }
    return total%10; // Assuming we want to restrict has from 0-9
}

// Problems with above hash function:
// 1. It is not constant time. If length of str is n, its complexity is O(n).
// 2. It is not distributed. It does not distribute available hashes to keys evenly.

function improvedHash(str) {
    let total = 0;
    let weirdPrime = 31;
    for (let i=0; i<Math.min(str.length, 100); i++) {
        value = str.charCodeAt(i) - 96;
        total = (total*weirdPrime + value) % 53; // mod 53 since we want hash from 0-52
    }
    return total;
}