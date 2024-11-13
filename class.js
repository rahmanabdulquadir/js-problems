class Human {
  //properties / states
  age = 23; //public - accessible from anywhere
  #weight = 85; //private modifier - accessible only from the own scope
  ht = 187;
  constructor(humanName) {
    this.humanName = humanName;
  }

  //behave / functionalities
  walking() {
    console.log("I am walking");
  }
  running() {
    console.log("I am Running" + ` and my current weight is  ${this.#weight}`);
  }

  get fetchWeight() {
    return this.#weight;
  }

  set setHT(val) {
    return (this.ht = val);
  }
}

let newHuman = new Human("Tsun");

// console.log(newHuman.setHT)
// newHuman.running()

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  set updateAge(val) {
    return (this.age = val);
  }
}

const person1 = new Person("Tsun", 23);
person1.updateAge = 20;
// console.log(person1.age);


class Vehicle{
  constructor(name, year){
    this.name = name;
    this.year = year;
  }

  getAgeOfCar(){
    let date = new Date()
    return date.getFullYear() - this.year
  }
}


class AirVehicle extends Vehicle{
  constructor(name, year, price, speed){
    super(name, year)
    this.price = price;
    this.speed = speed;
  }
}

const sedanCar = new Vehicle("Honda Accord", 2019)
const plane = new AirVehicle("Emirates", 2007, "1 Million", "100 km/h")
// console.log(sedanCar.getAgeOfCar())
console.log(plane  instanceof AirVehicle)


