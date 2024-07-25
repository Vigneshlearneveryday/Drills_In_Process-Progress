//-- Create a blocking code ---

// console.log("Starting Blocking Operations");

// //--- Create Blocking code 
// for(let i=0;i<100;i++){
// //--Stimulate some operation
// console.log(i);
// }
// console.log("Finished Blocking operations");

//--- Create a non blocking ---

console.log("starting non blocking operations");
setTimeout(()=>{
    console.log("Executing delay function is called now");
},4000)
console.log("Finish non blocking operations");