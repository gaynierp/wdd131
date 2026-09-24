function darkMode() {
  let set = mode.value;
  if (set === "Dark") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.body.style.borderColor = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.body.style.borderColor = "black";
  }
}

let mode = document.querySelector("#mode-select");
mode.addEventListener("change", darkMode);
