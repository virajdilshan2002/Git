console.log("Event Handling File Is Loaded...");

const saveBtn = document.getElementById("saveBtn");

//add event listener

// saveBtn.addEventListener("click", function () {
//   alert("Save Button Clicked");
// });

saveBtn.addEventListener("click", handleClick);

function handleClick() {
  alert("Save Button Clicked");
}

//remove event listener
saveBtn.removeEventListener("click", handleClick);
