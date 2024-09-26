// Convert Celsius to Fahrenheit
// Write a function that converts Celsius to Fahrenheit.
const celsiusToFahrenheit = (cel) => {
  const result = ((cel * 9)/5) + 32
  return result
}
// console.log(celsiusToFahrenheit(3))

// Find the Factorial of a Number
// Write a function to calculate the factorial of a given number.
function factorial(num){
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}
console.log(factorial(6))


// Sum of Array Elements
// Write a function that takes an array of numbers and returns the sum of all elements.

const arr = [1,2,3,4,5]
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray(arr))