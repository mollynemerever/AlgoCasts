// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let lowerCase = str[i].toLowerCase();
    if (
      lowerCase === "a" ||
      lowerCase === "e" ||
      lowerCase === "i" ||
      lowerCase === "o" ||
      lowerCase === "u"
    ) {
      count += 1;
    }
  }
  return count;
}

//O(n) runtime O(1) space complexity

module.exports = vowels;
