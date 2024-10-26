//1. Primitive Data Types

//1.1 Number
let num1 = 10;
console.log(num1);
console.log(typeof num1);

let num2 = 10.59;
console.log(num2);
console.log(typeof num2);

console.log("=====================================");

//1.2 String
let cusName = "Viraj Dilshan";
console.log(cusName);
console.log(typeof cusName);

console.log("=====================================");

//1.3 Boolean
let isCustomer = true;
console.log(isCustomer);
console.log(typeof isCustomer);

console.log("=====================================");

//1.4 Undefined
let x;
console.log(x);
console.log(typeof x);

console.log("=====================================");

//1.5 Null
let y = null;
console.log(y);
console.log(typeof y);

console.log("=====================================");

//1.6 Symbol
let z = Symbol("Symbol");
console.log(z);
console.log(typeof z);

console.log("=====================================");

//2. Non-Primitive Data Types(Reference Data Types)

//2.1 Object
let person = {
  first: "Viraj",
  last: "Dilshan",
  age: 22,
};
console.log(person);
console.log(typeof person);

console.log("=====================================");

//2.2 Array
let colors = ["Red", "Green", "Blue"];
console.log(colors);
console.log(typeof colors);
//checking
console.log(Array.isArray(colors));

console.log("=====================================");

//2.3 Function
function greet() {
  console.log("Hello World");
}
greet();
console.log(typeof greet);

console.log("=====================================");

//2.4 Date
let date = new Date();
console.log(date);
console.log(typeof date);

console.log("=====================================");
