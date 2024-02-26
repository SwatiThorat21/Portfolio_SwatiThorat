let arrow = document.querySelectorAll(".arrow");
let hamburger_container = document.getElementById("hamburger_container");
let header_hamburgerMenu = document.querySelector(".header_hamburgerMenu");
let header_hamburgerMenu_close_contain = document.querySelector(
  ".header_hamburgerMenu_close_contain"
);

arrow.forEach((arrow) => {
  arrow.addEventListener("click", (event) => {
    let clickedArrow = event.currentTarget;
    let parentDiv = clickedArrow.parentNode;
    parentDiv.classList.toggle("is_expanded");
  });
});

hamburger_container.addEventListener("click", (event) => {
  let toggleMenu = event.currentTarget;
  let parentDiv = toggleMenu.parentNode;
  parentDiv.classList.toggle("toggle_hamburger_menu");
});

let toggle = document.getElementById("toggle");
toggle.addEventListener("click", () => {
  document.getElementsByTagName("body")[0].classList.toggle("dark_theme");
});

document.addEventListener("DOMContentLoaded", function() {
  var zindex = 10;
  var cards = document.querySelectorAll("div.card");
  var cardContainer = document.querySelector("div.projects_cards_wrapper");

  cards.forEach(function(card) {
    card.addEventListener("click", function(e) {
      e.preventDefault();

      var isShowing = this.classList.contains("show");

      if (cardContainer.classList.contains("showing")) {
        // A card is already in view
        document.querySelector("div.card.show").classList.remove("show");

        if (isShowing) {
          // This card was showing - reset the grid
          cardContainer.classList.remove("showing");
        } else {
          // This card isn't showing - show it
          this.style.zIndex = zindex;
          this.classList.add("show");
        }

        zindex++;
        
      } else {
        // No cards in view
        cardContainer.classList.add("showing");
        this.style.zIndex = zindex;
        this.classList.add("show");

        zindex++;
      }
    });
  });

  let cardBtnIcons = document.querySelectorAll(".cardBtn_icon a");
  cardBtnIcons.forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      event.stopPropagation(); 
    });
  });
});

