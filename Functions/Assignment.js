//Assignment One
function countVowels(str) {
  let count = 0;
  for (let char of str) {
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
  return count;
}
console.log(countVowels("apnacollege"));

//Assignment two
const countvow = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    ) {
      count++;
    }
  }
  return count;
}
console.log(countvow("APNACOLLEGE"));
