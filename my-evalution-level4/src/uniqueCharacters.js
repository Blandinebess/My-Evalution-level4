/*
Pseudocode:
1. Convert the string to characters
2. Loop through each character
3. Use a Set to track seen characters
4. If a duplicate is found, return false
5. If all characters are unique, return true
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

// Test cases:
console.log(hasUniqueChars("hello")); // false
console.log(hasUniqueChars("world")); // true
