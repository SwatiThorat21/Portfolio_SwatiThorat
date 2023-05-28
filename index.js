let arrow = document.querySelectorAll(".arrow");

arrow.forEach((arrow) => {
  arrow.addEventListener("click", (event) => {
    let clickedArrow = event.currentTarget;
    let parentDiv = clickedArrow.parentNode;
    parentDiv.classList.toggle("is_expanded");
  });
});

let hamburger_container = document.getElementById("hamburger_container");
let header_hamburgerMenu = document.querySelector(".header_hamburgerMenu");
let header_hamburgerMenu_close_contain = document.querySelector(
  ".header_hamburgerMenu_close_contain"
);

hamburger_container.addEventListener("click", (event) => {
  let toggleMenu = event.currentTarget;
  let parentDiv = toggleMenu.parentNode;
  parentDiv.classList.toggle("toggle_hamburger_menu");
});

let toggle = document.getElementById("toggle");
toggle.addEventListener("click", () => {
  document.getElementsByTagName("body")[0].classList.toggle("dark_theme");
});
