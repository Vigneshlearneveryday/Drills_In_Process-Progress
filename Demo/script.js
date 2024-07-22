const arrayWithEmptyElements = [1, , 3, , 5, null];

// Define a callback function to be used with map()
const doubleValue = (value) => value * 2;

// Use the map() method to apply the callback function
const result = arrayWithEmptyElements.map(doubleValue);

console.log(result); // Output: [2, , 6, , 10]
