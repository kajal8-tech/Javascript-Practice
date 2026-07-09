//getElementByClassName
//It returns the Elements as an HTML Collection or empty collection(if not found)
let smallImages=document.getElementsByClassName("oldImg");
for(let i=0; i<smallImages.length;i++){
    console.dir(smallImages[i])
}

//To access any index
document.getElementsByClassName("oldImg")[0]; //To access any index
