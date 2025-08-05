// uniqueCharacters.js

/*
Pseudocode:
1. Create an empty Set to track seen characters
2. Loop through each character in the string
3. If the character is already in the Set, return false
4. If the loop completes, return true (all unique)
*/

function hasUniqueChars(str) {
  const seen = new Set();

  for (let char of str) {
    if (seen.has(char)) {
      return false; // Duplicate found
    }
    seen.add(char);
  }

  return true; // All characters are unique
}

// ✅ Test cases
console.log(hasUniqueChars("hello")); // false
console.log(hasUniqueChars("world")); // true
console.log(hasUniqueChars("abcABC")); // true (case-sensitive)
console.log(hasUniqueChars("aAaa")); // false
