//Functions are the block of code that performs a spesific task,can be invoked/called whenver needed
function myFunction(){
    console.log("Wellcome to my code");
    console.log("I am learning js ");
}
myFunction();

//Using parameters

function myFunc(msg){
    console.log(msg);
}
myFunc("I love js") //argument

//Sum of two nummbers
function sum(x,y){
    console.log(x+y);
}
sum(5,5)

//Using return
function add(a,b){
    s=a+b;
    return s;
}
let val=add(4,5);
console.log(val);
//Function parameters are like the local varables whose scope is within a block of code of that function 