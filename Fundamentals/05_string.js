const name ="Hi my name is Kajal"
const repoCount=50

console.log(`Hello my name is ${name} and My repo count is ${repoCount}`);

console.log(name.length);//5

console.log(name.at(2))//j
console.log(name.at(-2))//a

console.log(`The character at index 3 is ${name.charAt(3)}`);//a
console.log(`The character at index 3 is ${name.charAt(-3)}`);//nagative index value is not workout

console.log(name.substring(1,4));//returns the part of this string from the start index up to and excluding the end index 
console.log(name.substring(1));//returns up to the end of the string if no end index is supplied.

console.log(name.replace("Kajal", "guddan"));
