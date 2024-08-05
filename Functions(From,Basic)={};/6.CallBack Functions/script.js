// Behaving as a call back function parameter/argument/variable

// create a callback function

function myCallBackFn() {
  console.log("Hey my CallBack function is logging here mahnn!");
}

//Usage

function logMessage(callback) {
  // Execute the callback fn
  callback();
}

// ----   we can call this High Order Function  ----
logMessage(myCallBackFn);

//-- Another way of calling  simple CallBack function

logMessage1(function () {
  console.log("Hey hi! again my CallBack function is logging here too mahnn!");
});

//-- Returning a callback function method 1

function logMessage3(callback) {
  const result = callback();
  console.log(result);
}

logMessage3(() => {
  return "Hey hi! again my CallBack function is logging here too mahnn!";
});

//Extract a callback function

function logMessage4(callback) {
  const result = callback();
  return result;
}

const result = logMessage4(() => {
  return "Hey hi! again  my CallBack function is logging here too mahnn!";
});

console.log(result);


// ----   Passing parameters to the callBack function

const logMessageHOF = (callBack) => {
    const result = callback("Vishwa","Nath")

}

const logmessagecallCBfn = (firstName,lastName) => {
        return ` Hello ${firstName} ${lastName} this is Simple CallBack  fn `
}
// Call HOF

logMessageHOF(logmessagecallCBfn)


//---  HOF with parameter and callback function

const calculatesumHOF = (a,b, callback)=>{
    const result = a + b;
    callback(result);
}

calculatesumHOF(5,6,(result) =>{
    console.log(result);
    

})