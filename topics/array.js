// Javascript Array

// two types of array declaration

const myArr = [1, 2, 3, 4, 5]; // array literals
const myArr2 = new Array(1, 2, 3, 4, 5); //array constructor

myArr[1]; //accessing element
myArr[3] = 7; // replacing an element
// console.log(Array.isArray(myArr))

myArr.indexOf(3); // get the index number of any element
myArr.includes(7); //returns true/false
myArr.join(); // returns string
myArr.length; // get the length of any array
myArr[myArr.length - 1]; // get the last element of an array

// modify array by different methods
myArr.push(11); //insert element in the end
myArr.pop(); // remove the last element of an array
myArr.shift(); // removes the first element
myArr.unshift(1); // adds new element at first
const sliced = myArr.slice(2, 4); // takes a slice from any array and returns a new sliced array
// const spliced = myArr.splice(3, 1, 17) // modifies the main array give index number and element number lastly the the new element

// map, filter, reduce, forEach, sort
const result = myArr.map((item) => item * item);
let newArr = [10, 20, 11, 12, 30];
// const result2 = newArr.filter((item) => {
//   return (res = item < 20);
// });
const randomNum = [10, 20, 30, 40]

const res = randomNum.reduce((acc, cur) => {
  return sum =  acc + cur
}, 0)


console.log(res);
