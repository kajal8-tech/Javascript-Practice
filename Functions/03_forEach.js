//Higher order function or forEach function
//Higher order fuctions are the fuctions that either take anthor function as parameter inside them or return function as there output
let arr = [1, 2, 3, 4, 5];

arr.forEach(function printVal(val) {
  console.log(val);
});

//Using arrow function

let arr2 = ["Kajal", "Sasmita"];

arr2.forEach((value) => {
  console.log(value.toUpperCase());
});
