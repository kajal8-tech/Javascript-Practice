//getElementByClassName()
//It returns the Elements as an HTML Collection or empty collection(if not found)
let smallImages=document.getElementsByClassName("oldImg");
for(let i=0; i<smallImages.length;i++){
    console.dir(smallImages[i].src)
}

//To access any index
document.getElementsByClassName("oldImg")[0]; //To access any index

//To find the source
document.getElementsByClassName("oldImg"[0].src);

//Selecting elements using tag name
//document.getElementsByTagName()
document.getElementsByTagName("p")

//Query Selectors
//It allows us to use any CSS selector
document.querySelector('p'); //Slect 1st p element
document.querySelectorAll("p"); //Slect all p element


document.querySelector('#myId'); //Selects 1st element with id=myId
document.querySelectorAll("#myId"); //Selects all element with id=myId

document.querySelector('.myClass'); //select 1at element with class = myClass
document.querySelectorAll(".myClass"); //select all element with class = myClass

//innerText
//Shows the visible text cointained in a node
let para=document.querySelector("p");
para.innerText=""

//textContent
//Shows all the full text
para=document.querySelector("p");
para.textContent=""

//inerHTML
//Shows the full markup
para=document.querySelector("p");
para.innerHTML=""

//The getattribute() method returns the value of an element's attribute
//element.getAttribute(name);
let text=image.getAttribute("class");
//The attribute'svalue null if the attribute doesnot exist

text=image.setAttribute('class','images')
//It sets a new value to the attribute

classList.add( ) //To add new classes
classList.remove( ) //To remove classes
classList.contain( ) //To check if the class is exist or not
classList.toggle( ) //To toggle between add & remove

//Adding elements in the page
document.createElement( ) //To creat a new element
appendChild() // To insert an element. It insert an element in the last as a child
append() // It can add new element as a child form or can add in the same line
Prepend() // It is as similar to append but it add elements in 1st
insertAdjacent() //It can add element in a perticular place
