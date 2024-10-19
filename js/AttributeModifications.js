console.log("Attribute Modification File Is Loaded...");

const link = document.querySelector("a");
console.log(link.getAttribute("href"));

link.textContent = "Click to Facebook";

//set attribute
link.setAttribute("href", "https://www.facebook.com");
console.log(link.getAttribute("href"));
link.setAttribute("target", "_blank");

//remove attribute
link.removeAttribute("target");
