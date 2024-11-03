console.log("Prototype.js loaded");

function Person(fristName, lastName) {
  this.fristName = fristName;
  this.lastName = lastName;
}

Person.prototype.age = 22;

let Person1 = new Person("John", "Doe");
console.log(Person1);
console.log(Person1.age);

Person.prototype.sayHello = function () {
  console.log(`Hello !`);
};

Person1.sayHello();
