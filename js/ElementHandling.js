console.log("Element Handling File Is Loaded...");

//create element
const newDiv = document.createElement("div");

//add id and class , style
newDiv.id = "alert";
newDiv.className = "alert alert-danger";
newDiv.textContent = "This is an alert!";
newDiv.style.color = "white";
newDiv.style.padding = "10px";
newDiv.style.backgroundColor = "green";
newDiv.style.borderRadius = "12px";

console.log(newDiv);

//append element into card
const card = document.querySelector(".card");
// card.append(newDiv, "Additional Text");
card.appendChild(newDiv);
// card.insertBefore(newDiv, card.firstChild);

//create danger element
const dangerDiv = document.createElement("div");
dangerDiv.id = "dangerAlert";
dangerDiv.className = "alert alert-danger";
dangerDiv.textContent = "Danger Alert!";
dangerDiv.style.padding = "10px";
dangerDiv.style.backgroundColor = "red";
dangerDiv.style.borderRadius = "12px";

// card.removeChild(newDiv);
// card.appendChild(dangerDiv);

card.replaceChild(dangerDiv, newDiv);

//clone element
const cloneDiv = dangerDiv.cloneNode(true);
console.log(cloneDiv);
// card.appendChild(cloneDiv);

//has child
const hasChild = card.hasChildNodes();
console.log(hasChild);
