//----
// Promise
//---

//Declaring a promise

// const data = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const ans = "";
//     if (ans) {
//       resolve(ans);
//     } else {
//       reject (new Error (
//         "Name is not Present in Data Variable i mean Name is not fetching from api suppose if you getting url from api go and check it properly Wic-Key"
//       ));
//     }
//   }, 1000);
// });

// //Accessing the Promise

// data
//   .then((name) => {
//     console.log(name);
//   })
//   .catch((error) => {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
//   })
//   .finally(() => {
//     console.log("Drills In process 😉");

//   });

// userDetails = [
//   {
//     name: "Ram",
//     age: 49,
//     email: "followforeverandgetsomething@yupmail.com,",
//   },
// ];

// Define a promise
// const details = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const details = "Ram";
//     if (details) {
//       resolve(details);
//     } else {
//       reject(
//         new Error(
//           "Define proper naming elseif go and check your syntax elseif go and sleep elseif just seek help elseif try to live elseif be motivate by yourself elseif cry elseif please die!!! immediately don't live and waste your and others time & energy idiot! 😂"
//         )
//       );
//     }
//   }, 2000);
// });

// Access the Promise

// details
//   .then((name) => {
//     let userDetails = [
//       {
//         name: "Ram",
//         age: 49,
//         email: "followforeverandgetsomething@yupmail.com,",
//       },
//     ];
//     console.log(userDetails.find((user) => user.name === name).age);
//   })
//   .catch((error) => {
//     console.log(error.stack);
//   })
//   .finally(() => {
//     console.log("Drills are so boring!!! 🤗");
//   });

// -----  Promise Chain 😭😇

const details = new Promise((resolve, reject) => {
  setTimeout(() => {
    const details = "Ram";
    if (details) {
      resolve(details);
    } else {
      reject(
        new Error(
          "Define proper naming elseif go and check your syntax elseif go and sleep elseif just seek help elseif try to live elseif be motivate by yourself elseif cry elseif please die!!! immediately don't live and waste your and others time & energy idiot! 😂"
        )
      );
    }
  }, 2000);
});

function getUserDetails(inputName) {
  const userDetails = new Promise((resolve, reject) => {
    setTimeout(() => {
      let userDetails = [
        {
          name: "Ram",
          age: 49,
          email: "followforeverandgetsomething@yupmail.com,",
        },
      ];
      const user = userDetails.find((user) => user.name === inputName);
      if (user) {
        resolve(user);
      } else {
        reject("Error Occurred");
      }
    }, 2000);
  });
  return userDetails;
}

// details
//   .then((name) => {
//     getUserDetails(name).then((resultUserDetail)=>{
//         console.log(resultUserDetail);

//     })
//   })
//   .catch((error) => {
//     console.log(error.stack);
//   })
//   .finally(() => {
//     console.log("Drills are so boring!!! 🤗");
//   });

details
  .then((name) => {
    return getUserDetails(name);
  })
  .then((resultUser) => {
    console.log(resultUser);
  })
  .catch((error) => {
    console.log(error.stack);
  })
  .finally(() => {
    console.log("Drills are so boring!!! 🤗");
  });


  // --- feedback about Promise & Promise Chain : Pothum Pothum Ithoda niruthikalaam .., Mudila!!!