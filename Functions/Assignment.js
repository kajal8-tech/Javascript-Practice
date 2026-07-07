//Assignment One
function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "o" ||
      char === "i" ||
      char === "u"
    ) {
      count++;
    }
  }
  countVowels("apnacollege")
}
