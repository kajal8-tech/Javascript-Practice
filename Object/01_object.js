//Declaration of a object/Nested object
let Student = {
  Name: "kajal",
  Rollno: 39,
  gmail: "kajalrani255@gmail.com",
  Sub: {
    math: 90,
    Eng: 70,
    Sci: 85,
    SST: 79,
  },
};


//Accesing different attributes from a object
console.log(Student.Name);
console.log(Student["Name"]);

//freeze function 
console.log(Student.Sub);
Object.freeze(Student.Sub);



console.log(Object.apply(Student));

//update or add a new attribute to the object
Student.Sub.Hindi = 88;
console.log(Student.Sub);
