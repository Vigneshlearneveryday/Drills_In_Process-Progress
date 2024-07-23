//--- Traditional Event Handlers---

//-- Mouse Event --

function addEvent(){
    console.log("Click Event is Called");
}
document.getElementById("clickButton").addEventListener('click',addEvent);



function doubleClickEvent(){
console.log("Double Click event is called");
}
document.getElementById("DoubleClickButton").addEventListener('dblclick',doubleClickEvent)


function mouseOverEvent(){
 console.log("onMouseOverHandler Event is called");
}
document.getElementById("hoverDiv").addEventListener('mouseover',mouseOverEvent)



function mouseOutEvent(){
    console.log("onMouseOutHandler event is called")
}
document.getElementById("hoverDiv").addEventListener('mouseout',mouseOutEvent)


//--- Keyboard Event ---

function keyDownEvent(){
    console.log("onKeyDownHandler event is called");
}
document.getElementById("keyInput").addEventListener('keydown',keyDownEvent)

function keyUpEvent(){
    console.log("onKeyUpHandler event is called");
}
document.getElementById("keyInput").addEventListener('keyup',keyUpEvent)

function onKeyPressEvent(){
console.log("onKeyPressHandler event is called");
}
document.getElementById("keyInput").addEventListener('keypress',onKeyPressEvent)


//--- Form Events ---

function onSubmitEvent(){
console.log("onsubmitHandler event is called")
}
document.getElementById("myForm").addEventListener('submit',onSubmitEvent)

function onfocusEvent(){
 console.log("onfocusHandler event is called");
}
document.getElementById("myForm").addEventListener('focus',onfocusEvent)
