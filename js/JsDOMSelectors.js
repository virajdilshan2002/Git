console.log("DOM Selector File Is Loaded...");
console.log(document);

// 1. Selects an element by ID
const id = document.getElementById("heading");
console.log(id);

// 2. Selects an element by class name
const paragraphs = document.getElementsByClassName("paragraph");
console.log(paragraphs);

// 3. Selects an element by tag name
const tag = document.getElementsByTagName("h1");
console.log(tag);

// 4. Selects an element by query selector
const query = document.querySelector("#heading");
console.log(query);

const query2 = document.querySelector(".paragraph");
console.log(query2);

// 5. Selects all elements by query selector
const queryAll = document.querySelectorAll(".paragraph");
console.log(queryAll);

// 6. Selects an specific element by query selector
const query3 = document.querySelector(".container p");
console.log(query3);
