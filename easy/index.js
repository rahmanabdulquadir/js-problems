// Convert Celsius to Fahrenheit
// Write a function that converts Celsius to Fahrenheit.
const celsiusToFahrenheit = (cel) => {
  const result = (cel * 9) / 5 + 32;
  return result;
};
// console.log(celsiusToFahrenheit(3))

// Find the Factorial of a Number
// Write a function to calculate the factorial of a given number.
function factorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}
// console.log(factorial(6))

// Sum of Array Elements
// Write a function that takes an array of numbers and returns the sum of all elements.

const arr = [1, 2, 3, 4, 5];
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// console.log(sumArray(arr))

// extension machine

const arrOfNum = [1, 2, 3, 4, 5];

const exMachine = (arr) => {
  return arr.map((ob) => ob + 5);
};

// console.log(exMachine(arrOfNum))

// sum of all elements of an array

const numbers = [10, 20, 30, 40, 50];

function sumArray(array) {
  const res = numbers.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  // return res
  console.log(res)
}

// sumArray(numbers)

function findMax(arr){
  for(let i = 0; i > arr.length; i++){
    console.log(i[i])
  }
}

const reverseArray = (arr) => {
  return arr.reverse()
}

console.log(reverseArray(numbers))