//Function to create new task

function createTask(newTask) {
  // Create a new div element to hold the task
  const taskEl = document.createElement("div");
  //Create new css to the created element
  taskEl.setAttribute("class", "task");
  // create a text node containing the task text
  const TaskTextNodeEl = document.createTextNode(newTask);
  //Append text node to the div element

  taskEl.appendChild(TaskTextNodeEl);
  //Finally append the task to the container div
  document.getElementById("container").appendChild(taskEl);
  console.log(TaskTextNodeEl);
  console.log(taskEl);
}
createTask("Programming");
createTask("Go shopping");
createTask("Meeting");
createTask("Contact us");
