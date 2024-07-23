//--- Named Function for Alert----

function showAlert() {
  console.log("Hello");
}
// Getting the Alert button Element
const alertButtonEl = document.getElementById("alertButton");
// Add event listener to the element
alertButtonEl.addEventListener("click", showAlert);

//---- Named function for the Removing Event

function removeAlert() {
  alertButtonEl.removeEventListener("click", showAlert);
}
//Getting The remove button element

const removeBtnEl = document.getElementById("removeButton");

removeBtnEl.addEventListener("click", removeAlert);
