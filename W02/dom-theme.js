// Functions
function myFunction(age) {
  console.log("My function works!");
  console.log("Your age is " + age * 2);
}
myFunction(34);

// Event Listeners
// Retrieve something from DOM
let select = document.querySelector("#theme-select");
// register and event listener. Syntax = DOMvariable.addEventListener("event on page", function to call when that event happens)
select.addEventListener("change", handleEvent); // If you include () after the function name it wants to call it
function handleEvent(event) {
  console.log(event.target.value);
}

// IF statements

let selectElem = document.querySelector("#theme-select");
let pageContent = document.querySelector("body");

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
  let current = selectElem.value;
  if (current === "ocean") {
    document.body.style.backgroundImage =
      "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
    pageContent.style.fontFamily = "Papyrus, fantasy";
  } else if (current === "forest") {
    document.body.style.backgroundImage =
      "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
    pageContent.style.fontFamily = "Impact, sans-serif";
  } else if (current === "desert") {
    document.body.style.backgroundImage =
      "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
    pageContent.style.fontFamily = "'Big Caslon', serif";
  } else {
    // default
    document.body.style.backgroundImage = "none";
    pageContent.style.fontFamily = "Georgia, serif";
  }
}
