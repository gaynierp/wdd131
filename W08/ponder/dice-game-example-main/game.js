document.querySelector("#rollButton").addEventListener("click", (event) => {
  // animate the die
  // Switch the src to the die rolling animation
  const images = document.querySelectorAll("#gameboard img");
  images.forEach((image) => {
    if (isDieUnlocked(image)) {
      image.src = "assets/die_rolling.gif";
    }
  });

  setTimeout(() => {
    images.forEach((image) => {
      if (isDieUnlocked(image)) {
        let rand = Math.floor(Math.random() * 6 + 1);
        image.src = `assets/cyan_dice_${rand}.gif`;
      }
    });
  }, 500);

  // Change the value each die lands on
  // Change the SRC image
});

function isDieUnlocked(dieImage) {
  const checkboxes = document.querySelectorAll("#gameboard input");
  const uncheck = Array.from(checkboxes).filter(
    (checkbox) => !checkbox.checked,
  );
  return uncheck.find(
    (unchecked) => unchecked.className === dieImage.className,
  );
}
