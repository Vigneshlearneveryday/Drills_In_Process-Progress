const product1ImageEl = document.getElementById("product1").querySelector("img")

product1ImageEl.setAttribute(
  "src",
  "https://cdn.pixabay.com/photo/2024/05/18/19/21/plant-8770937_1280.jpg"
);

product1ImageEl.setAttribute('alt','New Product')
console.log(product1ImageEl);

//Using set attribute to change product links

product1LinkEl = document.getElementById('product1').querySelector('a')

console.log(product1LinkEl);

product1LinkEl.setAttribute('href', 'newlink-2.html')

