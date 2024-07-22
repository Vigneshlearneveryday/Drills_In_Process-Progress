// Accesing Parent Elements

const parentEl = document.getElementById("parent");
console.log(parentEl.parentNode);

const grandparentEl = parentEl.parentNode;

//Accessing the child Elements

const firstChildEl = parentEl.firstChild;
console.log(firstChildEl);
const lastChildEl = parentEl.lastChild;
console.log(lastChildEl);

//Accessing elements childrens only

const firstelementchild = parentEl.firstElementChild;
console.log(firstelementchild);

const lastelementchild = parentEl.lastElementChild;
console.log(lastelementchild);