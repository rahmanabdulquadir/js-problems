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

const num = [100, 100, 200, 300, 400, 500];

// sum of array elements
const sumArray = (arr) => {
  const res = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return res;
};

// find the largest number of an array
const findMax = (arr) => {
  const res = Math.max(...arr);
  return res;
};

// find the smallest number of an array
const smallestNum = (arr) => {
  return Math.min(...arr);
};

// reverse an array elements
const reverseArray = (arr) => {
  return arr.slice().reverse();
};

// countOccurrences
const countOccurrences = (arr, element) => {
  const res = arr.filter((el) => el === element).length;
  return res;
};

// removeDuplicates
const removeDuplicates = (arr) => {
  return [...new Set(arr)]
};

// findIndex
const findIndex = (arr, element) => {
  const res = arr.indexOf(element)
  return res
}

// areAllEven
const areAllEven = (arr) => {
  const res = arr.every((el) => el % 2 === 0)
  return res
}

// concatenateArrays
const concatenateArrays = (arr1, arr2) => {
  // arr1.concat(arr2)
  return [... arr1, ...arr2]
}

const flattenArray = (arr) => {
  return arr.flat()
}

// arrayIntersection
const arrayIntersection = (arr1, arr2) => {
  const res = arr1.filter((el) => arr2.includes(el))
  return res
}
console.log(arrayIntersection(num, [100, 500]));

const randomArr = [2, 3]
const sumOfNums = (arr) => {
  const res = arr.reduce((acc, val) => {
    return acc + val
  }, 0)

  return res
}

console.log(sumOfNums(randomArr))