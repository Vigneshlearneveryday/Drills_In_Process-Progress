const fictionBookEl = document.getElementsByClassName("fiction");
// console.log(fictionBookEl);

const nonFictionEl = document.getElementById("nonFictionSection");

const nonFictionBooksInSectionEl =
  nonFictionEl.getElementsByClassName("non-fiction");

// console.log(nonFictionBooksInSectionEl[0]);

const fictionBookElArr = Array.from(fictionBookEl);
// console.log(fictionBookElArr);
const fictionBookElTitle = fictionBookElArr.map((el) => el.innerHTML);

console.log(fictionBookElTitle);
