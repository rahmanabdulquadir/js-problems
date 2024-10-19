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

const numbers = [10, 10, 20, 30, 40, 50];

function sumArray(array) {
  const res = numbers.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  // return res
  console.log(res)
}

// sumArray(numbers)

function findMax(arr){
  return Math.max(... arr)
}

const reverseArray = (arr) => {
  return arr.reverse()
}

function countOccurrences(arr, element){
  return arr.filter((el) => el === element).length
}

const removeDuplicates = (arr) => {
  return [... new Set(arr)]
}

const findIndex = (arr, element) => {
  return arr.indexOf(element)
}

function areAllEven(arr){
  return arr.every((el) => el % 2 === 0)
}

let anotherArray = [100, 200,10, 50, [500, [700]]]

const concatenateArrays = (arr1, arr2) => {
  return arr1.concat(arr2)
}

function flattenArray(arr){
  return arr.flat(2)
}

function arrayIntersection(arr1, arr2){
  return arr1.filter((el) => arr2.includes(el))
}
console.log(arrayIntersection(anotherArray, numbers))


