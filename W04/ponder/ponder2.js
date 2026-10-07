let gallery = document.querySelector(".gallery");
let dia = document.querySelector("dialog");
let dialogImage = document.querySelector("dialog img");
const closeButton = document.querySelector(".close-viewer");
gallery.addEventListener("click", function (event) {
  console.log(event.target.src);
  dialogImage.src = event.target.src.replace("sm", "full");

  dia.showModal();
});

closeButton.addEventListener("click", () => {
  dia.close();
});

dia.addEventListener("click", (event) => {
  if (event.target === dia) {
    dia.close();
  }
});
