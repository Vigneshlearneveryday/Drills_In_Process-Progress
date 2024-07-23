//Select the p element
const p = document.getElementById("textElement");
// p.classList.add("bold", "highlight", "italic")

//Function to add class

function addClass() {
  p.classList.add("highlight", "bold", "italic");
}
//Remove Class
function removeClass() {
  p.classList.remove("italic", "bold", "highlight");
}
// Toggle class
function toggleClass() {
  p.classList.toggle("bold");
}
//Check contains

function checkContains() {
  alert(
    p.classList.contains("highlight")
      ? "Contains Highlight"
      : "Does not contain Highlight"
  );
}

//Replace Class
function replaceClass() {
  if (p.classList.contains("italic")) {
    p.classList.replace("italic", "red-text");
  } else {
    p.classList.add("red-text");
  }
}

//List Items
function listitem() {
  alert("The first class is : " + p.classList.item(0));
}

//Get Value

function getValue() {
    // alert("Check Console log to check the Value");
  console.log(p.classList.value);
}
