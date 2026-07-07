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
};
console.log(countvow("APNACOLLEGE"));

//Assignment Three
//Print the square of eaach value in a given arry using the forEach loop

let arr = [1, 2, 3, 4];

arr.forEach(function printVal(val) {
  console.log(val * val);
});
