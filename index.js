// 1.Task: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const filterAndMapNames = (people) => {
  return people
      .filter(person => person.gender === "male")
      .map(person => person.name); 
};



// 2.Task: Object Manipulation

// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const getBookTitles = (books) => {
    return books.map(book => book.title);
};

// console.log(getBookTitles(books));



// 3.Task: Function Composition

// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const square = (num) => num * num;
const double = (num) => num * 2;
const addFive = (num) => num + 5;

const composeFunctions = (num) => addFive(double(square(num)));



// 4.Task: Sorting Objects

// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const sortCarsByYear = (cars) => {
  return cars.sort((a, b) => a.year - b.year);
};


// 5.Task: Find and Modify

// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const findAndModifyAge = (peopleList, name, newAge) => {
  const person = peopleList.find(person => person.name === name);
  if (person) {
      person.age = newAge;
  }
  return peopleList;
};


// Largest word from array
const heros = ["spiderman", "superman", "batman", "ironman"];

const largestWord = (arr) => {
  let largest = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > largest.length) {
      largest = arr[i];
    }
  }
  
  return largest;
};

// console.log(largestWord(heros))


function reverseString(str){
  let reversedStr = ''

  for(let i = str.length - 1; i >= 0; i--){
    reversedStr = reversedStr + str[i]
  }
  
  return reversedStr
}


console.log(reverseString("hello"))


