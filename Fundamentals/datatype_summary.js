//Datatypes are two types in js

//1.Primitive
//7 types:-String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scorevalue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);
console.log(typeof anotherId);

//2.Refrence type/Non primitive
//Array, Objects, Functions

const heros=["shaktiman","nagra","doga"];
let myObj={
    name:"kajal",
    age:21,
}

const myFunction=function(){
    console.log("Hello world");
}
