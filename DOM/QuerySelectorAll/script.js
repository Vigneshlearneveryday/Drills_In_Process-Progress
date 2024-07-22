const productCardEl = document.querySelectorAll(".product-card");
// console.log(productCardEl);

// Extract and log names of all products

const productNameEls = document.querySelectorAll(".product-name");
// console.log(productNameEls);

// productNameEls.forEach((el)=>{
// console.log(el.innerHTML);
// })

// Selecting and log all the prices of laptop category products

const laptopPricesEl = document.querySelectorAll(
  "[data-category='laptop'] .product-price"
);
// console.log(laptopPricesEl);

laptopPricesEl.forEach((el) => {
  console.log(el.innerHTML);
});

//Select All products ratings above 4.6
const highestRatingEl = document.querySelectorAll(
  "[data-rating = '4.7'] , [data-rating='4.8']"
);
// console.log(highestRatingEl);
highestRatingEl.forEach((el) =>
    console.log(el.innerHTML))
