console.log("OOP Concepts");

class Vehicle {
  constructor(name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color;
  }
  printDetails() {
    console.log(
      `Name: ${this.name}, Model: ${this.model}, Color: ${this.color}`
    );
  }
}

let vehicle = new Vehicle("Toyota", "Camry", "White");
vehicle.printDetails();

class Car extends Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  displayInformations() {
    return `${super.printDetails()}, Make: ${this.make}, Year: ${this.year}`;
  }
}

let car = new Car("Toyota", "Camry", 2020);
console.log(car.displayInformations());
