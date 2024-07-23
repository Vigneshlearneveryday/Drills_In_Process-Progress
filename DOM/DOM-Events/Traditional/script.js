//--- Traditional Event Handlers---

//-- Mouse Event --
document.getElementById("clickButton").onclick = function clickHandler() {
  console.log("Click Event is Called");
};

document.getElementById("DoubleClickButton").ondblclick =
  function dbClickHandler() {
    console.log("Double Click event is called");
  };

document.getElementById("hoverDiv").onmouseover =
  function onMouseOverHandler() {
    console.log("onMouseOverHandler Event is called");
  };
document.getElementById("hoverDiv").onmouseout = function onMouseOutHandler() {
  console.log("onMouseOutHandler event is called");
};

//--- Keyboard Event ---

document.getElementById("keyInput").onkeydown = function onKeyDownHandler() {
  console.log("onKeyDownHandler event is called");
};

document.getElementById("keyInput").onkeyup = function onKeyUpHandler() {
  console.log("onKeyUpHandler event is called");
};
document.getElementById("keyInput").onkeypress = function onKeyPressHandler() {
  console.log("onKeyPressHandler event is called");
};

//--- Form Events ---

document.getElementById("myForm").onsubmit = function onsubmitHandler() {
  console.log("onsubmitHandler event is called");
};

document.getElementById("myForm").onfocus = function onfocusHandler() {
  console.log("onfocusHandler event is called");
};
