console.log("Event Listeners Types File Is Loaded...");

const box = document.querySelector(".box");

//single click event
box.addEventListener("click", function () {
  console.log("Box Clicked!");
});

//double click event
box.addEventListener("dblclick", function () {
  console.log("Box Double Clicked!");
});

//mouse-down event
box.addEventListener("mousedown", function () {
  console.log("Mouse Pressed...!");
});

//mouse-up event
box.addEventListener("mouseup", function () {
  console.log("Mouse Released...!");
});

//mouse-moved event
box.addEventListener("mousemove", function () {
  console.log("Mouse Moved...!");
});

//mouse-over event
box.addEventListener("mouseover", function () {
  console.log("Mouse Overed...!");
});

//mouse-out event
box.addEventListener("mouseout", function () {
  console.log("Mouse Outed...!");
});
