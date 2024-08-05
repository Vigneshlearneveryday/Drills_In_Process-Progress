//----
//  Immediately Invoked Function Expressions (IIFE)
//----

// An anonymous function can be defined and executed immediately using an Immediately Invoked Function Expression (IIFE):

(function () {
  console.log("This is an IIFE");
})();

//----  we can pass parameter in IIFE

(function (name) {
  console.log("Hello, " + name);
})("Vinoth");

(function () {
  console.log("Welcome to World of Magic");
})();

// Calculating square of a Number

(function () {
  const num = 6;
  const square = num * num;
  console.log(square);
  
})();

