async function randomOutCome() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Success");
    } else {
      reject("Failure!");
    }
  });
}

const handleOutCome = async () => {
  try {
    const result = await randomOutCome();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

//
// handleOutCome();



// async function reportCard(marks) {
//   return new Promise((resolve, reject) => {
//     if (marks >= 35) {
//       resolve("Passed");
//     } else {
//       reject("Failed Try again!");
//     }
//   });
// }

// const finalResult = async () => {
//   try {
//     const result1 = await reportCard();
//     console.log(result1);
//   } catch (err) {
//     console.log(err);
//   }
// };

// reportCard()
