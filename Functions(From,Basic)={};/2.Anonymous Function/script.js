//----
// Anonymous Function
//----

//-- An anonymous function is a function that is defined without a name. Anonymous functions are often used as arguments to other functions or methods, or to create function expressions. Here's how you can use anonymous functions in various contexts:

//-- An anonymous function can be assigned to a variable:

const greet = function(name) {
  console.log('Hello, ' + name);
};

greet('Vignesh'); 


// ---  Anonymous functions are commonly used as callback functions, particularly in methods like setTimeout, addEventListener, and array methods (forEach, map, filter, etc

setTimeout(function () {
  console.log("This message is delayed by 2 seconds");
}, 2000);


//-- For Each

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});


//-- Map 

const doubled = numbers.map(function(number) {
  return number * 2;
});

console.log(doubled); // Output: [2, 4, 6, 8, 10]


//--- Filter

const evens = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evens); // Output: [2, 4]

//-- 