// Using text content to update blog title

const blogTitleEl = document.getElementById("title")

blogTitleEl.textContent = "New Blog Title";

// console.log(blogTitleEl);

//Change the background color

blogTitleEl.style.background = ("maroon")
blogTitleEl.style.color =("white");

//Using innerHTML to add another paragraph with some HTML content
const paragraphEl = document.getElementById("paragraph");

paragraphEl.innerHTML = "<h1>I have Changed the Paragraph</h1> ";

paragraphEl.innerHTML += "<br> <strong>This is new paragraph text with strong formatting</strong>"

// Using InnerHTML to modify the comment section (assume the original comment is visible)

const firstCommentEl = document.querySelector(".commentText");

console.log(firstCommentEl);

firstCommentEl.innerText = "Updated first comment, This is Important!"