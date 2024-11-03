console.log("TimerFunctions.js Loaded");

// setTimeout(function, delay) - Executes a function, after waiting a specified number of milliseconds.
const timeOutId = setTimeout(() => {
  console.log("Hello World!");
}, 5000);

// clearTimeout(timeOutId);

setInterval(() => {
  console.log("Hello!");
}, 1000);
