//--- Set Timeout---

const showMessage = () => {
  console.log("Hello after 2 seconds");
};

//-- Schedule the message --

setTimeout(showMessage, 2000);

console.log("This is performing as a Asynchronous");

//Rewrite

setTimeout(function () {
  console.log("Hello after 3 seconds");
}, 3000);

console.log("Another Testing way of Asynchronous");

//--- Cancelling a set Timeout ---

const timeOutId = setTimeout(() => {
  console.log("This will not displayed");
}, 4000);
// console.log(timeOutId);

console.log("Timeout Scheduled");
clearTimeout(timeOutId)
console.log("Timeout Cancelled");

//-- Set Interval ---

setInterval(() => {
  console.log("Am calling at every 2 seconds");
}, 2000);

let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log(counter);

  if (counter >= 5) {
    clearInterval(intervalId);
  }
}, 2000);
