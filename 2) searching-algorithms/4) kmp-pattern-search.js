// !-- KMP method (definition and pseudo code)
// The kmp substring search algorithm checks whether or not a substring is present in a given string.
// Here, we first loop over short string and create a table of max length suffix of string until that char is also a prefix.
// eg: If substring is asdpqrasd, then table
// index    0   1   2   3   4   5   6   7   8   9
// char     a   s   d   p   q   r   a   s   d   z
// -----------------------------------------------------
// val      0   0   0   0   0   0   1   2   3   0

// let indexToMatch = 0;
// Then we start looping over the long string; let index = i;
    // if long[i] !== short[indexToMatch], indexToMatch = table[indexToMatch];
    // else indexToMatch++;
    // if (indexToMatch > substring length), string is matched, increase count and set index to match as indexToMatch = table[indexToMatch];
//