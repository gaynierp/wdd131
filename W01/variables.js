// This is a comment

// This is setting a variable
let age = 21;
// can be reassigned later like "age = 25"

// A constant variable
const name = "Peter";
// cannot be reassigned later

// Like print in Python
console.log(age);
console.log(name);
console.log(name + " you can concatenate console.log statements");

// Scope = where you can referance a variable by name

if (age === 21) {
  // a new scope. Possible to referance global and local. Local cannot be accessed at a higher level
  age = 22;
  let book = "Mistborn";
}
// cannot referance "book" outside of this block
console.log(age);

document.querySelector("h1").style.color = "blue";
