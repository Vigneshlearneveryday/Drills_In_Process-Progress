//For this example, we will create a single web page that dispalys a list of fruits. We will provide a Javascript function to remove a specific fruite based on it's name

//Function to add a new Fruit

function addFruit(name) {
  const ulEl = document.getElementById("fruitList");
  //Create li element
  const li = document.createElement("li");
  li.className = "fruit";
  li.textContent = name;
  ulEl.appendChild(li);
  console.log(li);
  console.log(ulEl);
}
addFruit("Apple");
addFruit("Cherry");
addFruit("JackFruit");
addFruit("Mangos");
addFruit("Kiwi");

//Remove Fruit Function
function removeFruit(name) {
  const ulEl = document.getElementById("fruitList");
  let fruitFound = false;

  //Loop Through the fruits to find the fruit

  for (const li of ulEl.children) {
    if (li.textContent === name) {
      fruitFound = true;
      //Remove fruit
      ulEl.removeChild(li);
      break;
    }
  }
  //Update The message based on whether the fruit was found
  document.getElementById("message").textContent = fruitFound
    ? `${name} was removed from the list`
    : `${name} not found in the list`;
}
removeFruit("JackFruit");
// removeFruit("Kiwi")

// removeFruit("cherry")

// removeFruit("Apple")
