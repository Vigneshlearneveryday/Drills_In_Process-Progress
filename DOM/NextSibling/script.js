// Get the container Element

const containerEl = document.getElementById("container");
// console.log(containerEl);

//Get all the buttons within the container

const buttonEl = document.querySelectorAll("button");
console.log(buttonEl);

// Loop through each button and change the text of its next sibling

buttonEl.forEach((button)=>{
const nextElement = button.nextSibling;
console.log(nextElement);
if( nextElement && nextElement.nodeType === 3 ){
nextElement.textContent ="Changed Text"
}
})