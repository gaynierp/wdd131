// How to manipulate the DOM (Javascript referance to things on the page)
// Grab a tag from HTML, uses classes and Id's same as CSS.
let heading = document.querySelector("h1"); //Can do multiple like "h1, h2"
console.log(heading);
heading.textContent = "Change the Heading to something else!";

heading.style.color = "#000000";

heading.style.border = "1px solid black";
heading.style.borderRadius = "90%";

// call by Id/class
document.getElementById("topics").style.color = "blue";

// select img
let image = document.querySelector("img");

// getAttribute("and attribute of a tag")
console.log(image.getAttribute("src"));
image.setAttribute(
  "src",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.FRv1mfuy-oY30aSaMu50rwHaE7%3Fr%3D0%26pid%3DApi&f=1&ipt=5ddaa89bfa9425846124169178923a1026db89d360fc45701f656b0cabb9ab52&ipo=images",
);

let selectElem = document.getElementById("webdevlist");
selectElem.addEventListener("change", function () {
  let codeValue = selectElem.value;
  console.log(codeValue);
});
