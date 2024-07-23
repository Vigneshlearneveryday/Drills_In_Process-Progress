//--Add event Listener to the div--

document.getElementById("parentDiv").addEventListener(
  "click",
  function (event) {
    alert("Div Clicked Event Phase" + event.eventPhase);
  },
  true
); //Capturing phase

//--Add event listener to the Ul--
document.getElementById("list").addEventListener(
  "click",
  function (event) {
    alert("List Clicked Event Phase" + event.eventPhase);
  },
  true
);

//--Add event listener to the li--

document.getElementById("subject1").addEventListener(
  "click",
  function (event) {
    alert("Subject1 Clicked Event Phase" + event.eventPhase);
  },
  false
); 

//--- Bubling Phase

document.getElementById("subject2").addEventListener(
  "click",
  function (event) {
    alert("Subject2 Clicked Event Phase" + event.eventPhase);
  },
  false
); //Bubling Phase
