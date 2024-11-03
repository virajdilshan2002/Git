console.log("Function File is Loaded...");

//Function - block of code that performs a specific task

//1. Function Declaration
function greet(firstName) {
  if (typeof firstName === "undefined") {
    console.log("Hello, Guest!");
  } else {
    console.log(`Hello, ${firstName}!`);
    console.log("Welcome to JavaScript Functions...");
  }
}
greet();

console.log("============================================");

//2. Function Expression
let greet2 = function (firstName) {
  console.log(`Hello, ${firstName}!`);
};

greet2("Viraj");

console.log("============================================");

//3. Arrow Function
let greet3 = (firstName) => {
  console.log(`Hello, ${firstName}!`);
};

greet3("John");

console.log("============================================");

//4. Default Parameters
let greet4 = (firstName = "Guest") => {
  console.log(`Hello, ${firstName}!`);
};

greet4();

console.log("============================================");

//5. Rest Parameters
let greet5 = (firstName, ...otherNames) => {
  console.log(`Hello, ${firstName}!`);
  console.log(otherNames);
};

greet5("Viraj", "John", "Doe", "Smith");

console.log("============================================");
