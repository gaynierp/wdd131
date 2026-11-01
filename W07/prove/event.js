const form = document.querySelector("#fsyForm");
const first = document.querySelector("firstName");
const last = document.querySelector("lastName");
const email = document.querySelector("email");
const type = document.querySelector("#Type");
const extra = document.querySelector("change");
const output = document.querySelector("#output");
const studentid = document.querySelector("#studentid");
const guestid = document.querySelector("#guestid");
type.addEventListener("change", (event) => {
  console.log(event);
  let selection = event.target;
  console.log(selection);
  console.log(selection.value);
  if (selection.value === "Student") {
    let stud = document.querySelector(".student");
    stud.style.display = "inline";
  } else if (selection.value === "Guest") {
    let gue = document.querySelector(".guest");
    gue.style.display = "inline";
  }
});

function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  let availableDate = form.availableDate.value;
  if (isPastDate(isPastDate(availableDate))) {
    output.innerHTML = `
        <h2>Please choose a later date`;
  }
});
