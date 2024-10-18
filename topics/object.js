const person = {
  name: "Tsun",
  "full name": "Rahman Abdul Quadir",
  age: 22,
  height: 6.1,
  greet: function(){
    console.log("Hello Good Evening")
  }
}

// const duplicatedPerson = {... person} //shallow copy

// const duplicatedPerson = structuredClone(person) //deep copy

const duplicatedPerson = Object.assign(person) //another way to copy any object

duplicatedPerson.age = 23



console.log(person)