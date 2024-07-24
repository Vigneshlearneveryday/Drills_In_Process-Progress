// Access the Button element

//Single Click
const buttonEl = document.getElementById("actionButton");

buttonEl.addEventListener("click", function () {
  console.log("Btn was clicked Once !");
});



// Double click
buttonEl.addEventListener("dblclick",function(){
    console.log("Btn was clicked twice !!");
})


// Mouse Movement 
buttonEl.addEventListener("mouseenter",function(){
    console.log("Mouse Entered !");
})


// Mouse Leave 
buttonEl.addEventListener("mouseleave",function(){
    console.log("Mouse Leaved away !");
})

