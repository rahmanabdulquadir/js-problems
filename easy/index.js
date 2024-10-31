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
// console.log(arrayIntersection(num, [100, 500]));

const randomArr = [2, 3, 11, 17, 21]


function sumOfNums(arr) {
  let sum = 0
  for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i]
  }
  return sum
}

const findLargest = (arr) => {
  let largest = arr[0]
  for(let i = 0; i < arr.length; i++){
    if(largest < arr[i]){
      largest = arr[i]
    }
  }
  return largest
}


console.log(findLargest(randomArr))


const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
];

const getBookTitles = (books) => {
  return books.map(book => book.title); // Map to an array of titles
};

// Calling the function and printing the result
console.log(getBookTitles(books));









// It hasn't been long since I was introduced to computer science - I never took it in school. However, going to university I did not have a clear direction to pursue, so I decided to go with it. It was love at first sight (or well, first print statement). My journey so far has been a rocky road, but hard work, determination, coffee, and an occasional game of billiards have allowed me to succeed both inside and outside the classroom.

// Driven by a passion for Artificial Intelligence and Software Development, I place great emphasis on delivering quality results even in the most gruelling and strict environments.