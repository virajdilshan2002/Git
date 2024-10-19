console.log("Class Manipulation File Is Loaded...");

// view classLists
const heading = document.getElementById("heading");
console.log(heading.classList);

// add class
heading.classList.add("blue");
console.log(heading.classList);

// remove class
heading.classList.remove("blue");
console.log(heading.classList);

// toggle class
heading.classList.toggle("active");
console.log(heading.classList);

heading.classList.toggle("active");
console.log(heading.classList);
