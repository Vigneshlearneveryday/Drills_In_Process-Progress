//----
// Arrow Function
//----

//Basic syntax

function multiply(a, b) {
  return a * b;
}

const multiply = (a, b) => a * b;
const result = multiply(5, 6);

const greet = (name) => {
  return `Hello ${name}`;
};

const greetFn = greet("Vignesh");

//Single parameter

const square = (x) => x * x;

const squareFn = square(5);

// No parameter

const Random = () => Math.random();

//---  Object literal Return
const getUser = () => {
  return {
    name: "Vishwa",
    Age: 22,
  };
};

const getUser1 = () => ({name:"Vishwa", Age : 22,})

constgetUserFn = getUser1()