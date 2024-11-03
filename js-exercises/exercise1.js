console.log("Exercise1.js File is Loaded...");

let value = 0;

const loop = setInterval(() => {
  value++;
  console.log("Value: ", value);

  // if (value === 10) {
  //   clearInterval(loop);
  //   console.log("Loop Stopped...");
  // }
}, 1000);

setTimeout(() => {
  clearInterval(loop);
}, 11000);
