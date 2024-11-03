console.log("Exercise2.js File is Loaded...");

let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");

let boxes = [box1, box2, box3, box4, box5];
let currentIndex = 0;

function changeColor() {
  boxes.forEach((box) => {
    box.style.backgroundColor = "grey";
  });

  // boxes[currentIndex++].style.backgroundColor = "yellow";
  // if (currentIndex === boxes.length) {
  //   currentIndex = 0;
  // }
  // boxes[currentIndex].style.backgroundColor = "red";

  boxes[currentIndex].style.backgroundColor = "red";
  let previousIndex = (currentIndex - 1 + boxes.length) % boxes.length;
  boxes[previousIndex].style.backgroundColor = "yellow";

  currentIndex = (currentIndex + 1) % boxes.length;
}

setInterval(changeColor, 1000);
