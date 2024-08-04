//----
// Syntax of function declaration
//----

function sayHello() {
  //--- Write Logic here
  console.log("Hey New World");
}

//--Invoke a function twice
sayHello();
sayHello();

function greetings() {
  console.log("Welcome to New Learnings of life in Tech");
}

//---- Invoke a Function Thrice

greetings();
greetings();
greetings();

function showDate() {
  const currentDate = new Date();
  console.log(`Today Date is ${currentDate}`);
}

showDate();

//----
//---- Function Expression
//----

const sayHello = function () {
  console.log("Hey New World");
};

sayHello();

const greetings = function () {
  console.log("Welcome to New Learnings of life in Tech");
};

greetings();

//--Determines if a fixed number (e.g., 4 is even or odd )

const checkEvenorOdd = function () {
    const number = 4
    if (number%2 == 0) {
        console.log("The given number is Even ");
        

    } else{
        console.log("The given number is Odd");
        

    }
}
checkEvenorOdd()