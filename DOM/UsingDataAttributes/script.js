// Use get and set attribute

const userCard = document.getElementById("usercard");
// console.log(UseCard);
const userId = userCard.getAttribute("data-user-id");

const userRole = userCard.getAttribute("data-user-role");
console.log(userId);
console.log(userRole);

// modifying Data Attributes

userCard.setAttribute("data-user-role", "super-admin");
userCard.setAttribute("data-user-position", "Engineer");

console.log(userCard);

//using the dataset

const userRole2 = userCard.dataset.userRole;
const userId2 = userCard.dataset.userId;
console.log(userId2);
