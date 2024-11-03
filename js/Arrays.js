console.log("Arrays File is Loaded...");

//Arrays - used to store multiple values in a single variable

//1. Creating an Array

//1.1 Using Array Literal
let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple", "Kiwi"];
console.log(fruits);

console.log("============================================");

//1.2 Using Array Constructor
let cars = new Array("BMW", "Audi", "Mercedes", "Toyota");
console.log(cars);

console.log("============================================");

let myArray = [10, "Hello", { name: "viraj", age: 22 }, true, null, undefined];
// console.log(myArray);

//2. Accessing Array Elements
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log("============================================");

//3. Modifying Array Elements
fruits[0] = "Graps";
console.log(fruits);

console.log("============================================");

//4. Built in array functions
// let customers = [
//   { itemID: 1, name: "item1" },
//   { itemID: 2, name: "item2" },
//   { itemID: 3, name: "item3" },
// ];
// let newItem = { itemID: 4, name: "item4" };
// customers.push(newItem);
// console.log(customers);

//4.2 pop() - removes the last element from an array
console.log(fruits);
fruits.pop();
console.log(fruits);

//4.3 shift() - removes the first element from an array
console.log(fruits);
fruits.shift();
console.log(fruits);

//4.4 unshift() - adds the element at the beginning of an array
console.log(fruits);
fruits.unshift("Apple");
console.log(fruits);

//4.5 splice() - adds/removes elements from an array
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);

console.log("============================================");

//4.6 splice() - adds elements to an array
console.log(fruits);
fruits.splice(1, 0, "Mango", "Orange", "Apple");
console.log(fruits);

console.log("============================================");

//4.7 slice() - returns the selected elements in an array, as a new array object

console.log(fruits);
let newFruits = fruits.slice(1, 3); //start index, end index( but not included)
console.log(newFruits);
console.log(fruits);

console.log("============================================");

//4.8 concat() - merge two or more arrays
let vegitables = ["Tomato", "Potato", "Onion"];
let items = fruits.concat(vegitables);
console.log(items);

console.log("============================================");

// 4.8 forEach() - calls a function for each element in an array

fruits.forEach(function (fruit) {
  console.log(fruit);
});

console.log("============================================");

//4.9 map() - creates a new array with the results of calling a function for every array element
let upperCaseFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperCaseFruits);

console.log("============================================");

//character length
let s = "sssssssss";
console.log(s.length);

console.log("============================================");

//4.10 filter() - creates a new array with all elements that pass the test implemented by the provided function
let lengthyFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(lengthyFruits);
