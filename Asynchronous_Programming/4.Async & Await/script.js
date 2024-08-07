// Simulate a delay 

// creating

async function waitAndRun (value) {
//Making api call 
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(value)
    },2000)
})
}

// Usage 



const getProcessValue = async ()=>{
  
 const result =  await waitAndRun("This is my promise argument") 
 console.log(result);
 

}
// getProcessValue();

// Fetch Multiple value in parallel

const getName = async () =>{
  return new Promise ((resolve)=>{
    setTimeout(() => {
      resolve("Pallavi 😉")
    }, 1000);
  })

}


const getAge = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(32);
    }, 3000);
  });
};


async function getUserDetails () {
 const result =  await Promise.all([getName(),getAge()])
 console.log(result);
 
}
getUserDetails();