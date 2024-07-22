//Get all the images

const imagesEl = document
  .getElementById("imageGallery")
  .querySelectorAll("img");

console.log(imagesEl);

//create an array to store images by wickey

let imagesBywickey = [];

imagesEl.forEach((img) => {
  const author = img.getAttribute("data-Author");
  console.log(author);

  if (author === "wickey") {
    imagesBywickey.push(img);
  }
});

imagesBywickey.forEach((img)=>console.log(img))
