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
document.querySelector("p"); //Slect all p element


document.querySelector('#myId'); //Selects 1st element with id=myId
document.querySelector("#myId"); //Selects all element with id=myId

document.querySelector('.myClass'); //select 1at element with class = myClass
document.querySelector(".myClass"); //select all element with class = myClass