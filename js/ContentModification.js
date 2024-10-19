// console.log("Content Modification File Is Loaded...");

const heading = document.getElementById("heading");
// console.log(heading.textContent);
heading.textContent = "Js Heading";

const card = document.querySelector(".card");
// console.log(card.textContent);
card.innerHTML = "<h1>Js Inner HTML</h1> <p>Js Inner HTML Paragraph</p>";

console.log(card.innerText);
card.innerText = "Js Inner Text Paragraph";

const input = document.querySelector('input[type="text"]');
console.log(input);
input.value = "Viraj Dilshan";
