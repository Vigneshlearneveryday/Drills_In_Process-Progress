//-----

// Error Handling || Exception Handling

//----

// console.log(call);
// try {
//   console.log(call);
// console.log(99);

// } catch (error) {
// console.log("hey hi champ!");
//   console.log(error.message);
//   console.log(error.name);
//   console.log(error.stack);
// } finally{
//     // console.log("from finally");

// }

// try{
//     throw new Error("How to send Error")
// }
// catch (error) {
//     console.log(error.message);

// }
// finally{
//     console.log("Try and catch send report through Finally 👌");

// }

try {
    const quotient = getQuotient(9, 10);
//   const quotient = getQuotient(9, "x");
  // const quotient = getQuotient(9, "99");
  // const quotient = getQuotient(9, 3);
  if (quotient === Infinity) {
    throw new Error("Divided by Zero becomes Infinity forever");
  }
  console.log(quotient.toUpperCase());
} catch (error) {
    console.log(error.name);
    
  if (error.name === "Error") {
    console.log("From divided by zero error");
  } else if (error === "NotValidNumber") {
    console.log("Not a Valid Number Please give your input as a right number");
  }
  //   console.log(error.message);
  //   console.log(error.name);

  //   console.log(error.stack);
} finally {
  console.log("Whatever the result but i will come alongside 😎");
}

function getQuotient(input1, input2) {
  //validate these two inputs
  if (isNaN(input1) || isNaN(input2)) {
    // throw new Error ("Not a valid number")
    let error = new Error("Not a valid number is passed");
    error.name = "Print this error while passing  a wrong name";
    throw error;
  }
  return input1 / input2;
}
