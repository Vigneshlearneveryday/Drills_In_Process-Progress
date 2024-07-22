// Function To add new student

function addStudent(name, grade) {
  //Create a new div element to hold the student
  const studentEl = document.createElement("div");
  //add css to it
  studentEl.className = "student";
  // Create a text node containing the student name and grade
  const studentTextNode = document.createTextNode(`${name} : ${grade}`);
  //Append the text node to the div element
  studentEl.appendChild(studentTextNode);

  // select the container

  const containerEl = document.getElementById("studentsList");
  let beforeNode = null;

  //Loop Through existing students to find the correct position for the new student

  for (const child of containerEl.children) {
    const childGrade = parseFloat(child.textContent.split(":")[1]);
    if (grade < childGrade) {
      beforeNode = child;
      break;
    }
  }
  //Insert new student in the correct position
  containerEl.insertBefore(studentEl, beforeNode);
  console.log(containerEl.children);
}
addStudent("wickey", 90);
addStudent("Rahul", 95);
