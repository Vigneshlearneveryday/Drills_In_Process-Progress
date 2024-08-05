// -----
// Destructuring
//------

// Basic

const numbers = [1, 2, 3, 4, 5, 6];

const [first, second, third, fourth, fifth, sixth] = numbers;

let a = 5;
let b = 6;

[a, b] = [b, a];
console.log(a, b); //Output 6,5

//---  Object Destructuring

const user = {
  name: "New world Innovations",
  age: 10,
  email: "newworldsolutions@gmail.com",
};

console.log(name);
console.log(age);
console.log(email);

// The above calling functions are DRY (Don't Repeat Yourself)

function greet({ name, age, email }) {
  console.log(`Hello, ${name} your services are great in these all ${age}`);
}

const inputCompany = {
  name: "infosys",
  age: 43,
  email: "info@emailgmail.com",
};

greet(inputCompany);

//---- Nested Destructuring

const {name,age,email,info:{i1,i2,i3,etc}} = {
  name: "Google",
  age: 26,
  email: "info@google.in",
  innovations: {
     i1 : "search engine algo",
     i2 : "gmail",
     i3 : "gmap",
     etc : "google and get it whatever"
  },
};

//-- in console log directly call whatever you want like console.log(name) ,console.log(age),console.log(i1),console.log(etc)
