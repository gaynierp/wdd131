let character = {
  name: "Spiderman",
  class: "Human Spider",
  level: 10,
  health: 100,
  attacked: function () {
    this.health -= 20;
  },
  levelUp: function () {
    this.level += 1;
    this.health += 60;
  },
};
let dynamic = document.querySelector(".info");
dynamic.innerHTML = `
    <div class="name"><p>${character.name}</p></div>
    <div class="stats"><p>${character.class}\n${character.level}\n${character.health}</p></div>`;
document.querySelector(".buttons").addEventListener("click", (event) => {
  if (event.target.value == "Attack") {
    character.attacked();
  } else if (event.target.value == "Level Up") {
    character.levelUp();
  }
});
document.querySelector(".card").addEventListener("click", (e) => {
  dynamic.innerHTML = `
    <div class="name"><p>${character.name}</p></div>
    <div class="stats"><p>${character.class}\n${character.level}\n${character.health}</p></div>`;
});
