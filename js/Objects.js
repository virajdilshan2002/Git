//creating object using object literal
let person = {
  firstName: "viraj",
  lastName: "dilshan",
  age: 22,
  hobbies: ["music", "reading", "coding"],
  address: {
    street: "50/2",
    city: "colombo",
    country: "Sri Lanka",
  },

  getBirthYear: function () {
    return 2024 - this.age;
  },
};

console.log("Person : ", person);

console.log("=============================================================");

//Accessing Object Properties

//1. Dot Notation

console.log("First Name : " + person.firstName);
console.log("Last Name : " + person.lastName);
console.log("Age : " + person.age);
console.log("Hobbies : " + person.hobbies);
console.log("City : " + person.address.city);
console.log("Birth Year : " + person.getBirthYear());

//2. Bracket Notation

console.log("First Name : " + person["firstName"]);
console.log("Last Name : " + person["lastName"]);
console.log("Age : " + person["age"]);
console.log("Hobbies : " + person["hobbies"]);
console.log("City : " + person["address"]["city"]);
console.log("Birth Year : " + person["getBirthYear"]());

//Adding Properties to Object
person.contactNumber = "0771234567";
console.log("Person : ", person);

//Change Property Value
person.firstName = "Viraj";
person.lastName = "Dilshan";
person.age = 40;
console.log("Person : ", person);

//Delete Property
delete person.contactNumber;
console.log("Person : ", person);

let car = {
  brand: "Toyota",
  model: "Corolla",

  getDescription: function () {
    return `${this.brand} - ${this.model}`;
    // return this.brand + " - " + this.model;
  },
};

console.log(car.getDescription());

//object as function parameter
function displayName(student) {
  console.log(student.firstName + " " + student.lastName);
}

displayName({ firstName: "Viraj", lastName: "Dilshan" });

console.log("=============================================================");

//looping object properties

for (let key in person) {
  console.log(key + " : " + person[key]);
}

console.log("=============================================================");

//object destructuring
let { firstName, lastName, age, address } = person;

console.log(firstName, lastName, age, address);
console.log(address);
// console.log(hobbies);

console.log("=============================================================");

//Object.key()
console.log(Object.keys(person));

console.log("=============================================================");

//Object.values()
console.log(Object.values(person));

console.log("=============================================================");

//Object.entries()

console.log(Object.entries(person));

console.log("=============================================================");

//constructor function
function Student(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

//creating object using constructor function
let student = new Student("Viraj", "Dilshan", 22);

console.log(student);
console.log(typeof student);

//From ES6, we can use class syntax to create objects.

class Person1 {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

let person1 = new Person1("Viraj", "Dilshan", 22);
console.log(person1);
console.log(typeof person1);
