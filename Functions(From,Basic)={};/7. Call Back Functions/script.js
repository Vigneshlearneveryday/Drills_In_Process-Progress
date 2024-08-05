//-- Behaving as a normal function parameter/arguments/variable

// Create callback function

// function myCallbackFn() {
//   console.log("This is a simple call back function");
// }

// --  Usage

// function logMessage(callback) {
//   callback();
// }
//Call HOF
// logMessage(myCallbackFn);

// logMessage(function () {
//   console.log("Hello this is a simple callback function");
// });

// Returning a callback function method 1

// function logMessage(anything) {
//     const result = anything();
//     // console.log(result);
//     return result;
// }

// const result = logMessage(() => {
//   return "Hello this is a simple callback function";
// });

// console.log(result);

//Passing Parameter to the callback function

const logMessageHOF = (anything) => {
  const result = anything("Arun", "Aravind");
//   console.log(result);
};

const logMessagecallbackFN = (firstName, lastName) => {
  return `Hello ${firstName} ${lastName} Your welcome and called by the design of simple callback function`;
};

logMessageHOF(logMessagecallbackFN);

//HOF with parameter and call back function

const calculatesumHOF = (a, b, anythingforcallbackvariable) => {
  const result = a + b;
  anythingforcallbackvariable(result);
};
calculatesumHOF(5,6, (anything)=>{
    console.log(anything);
    
})
