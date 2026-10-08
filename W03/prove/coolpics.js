let gallery = document.querySelector(".content");
let dia = document.querySelector("dialog");
let dialogImage = document.querySelector("dialog img");
const closeButton = document.querySelector(".close-viewer");
const menu = document.querySelector("h2");
const nav = document.querySelector("nav");
gallery.addEventListener("click", function (event) {
  console.log(event.target.src);
  dialogImage.src = "norris-full.jpg";
  dia.showModal();
});

closeButton.addEventListener("click", (event) => {
  dia.close();
});

menu.addEventListener("click", () => {
  nav.classList.toggle("show");
  console.log("You've clicke here");
});
