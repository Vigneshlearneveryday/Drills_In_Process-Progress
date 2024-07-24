//Add single event listener to the Ul

document.getElementById("itemList").addEventListener("click", function (e) {
  const clickedEl = e.target;
  console.log(clickedEl.tagName);
  if (clickedEl.tagName === "LI") {
    const itemNumber = clickedEl.getAttribute("data-item");
    console.log(`You clicked item ${itemNumber}`);
  }
});
