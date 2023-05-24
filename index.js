let arrow = document.querySelectorAll(".arrow");

arrow.forEach((arrow) => {
  arrow.addEventListener("click", (event) => {
    let clickedArrow = event.currentTarget;
    let parentDiv = clickedArrow.parentNode;
    parentDiv.classList.toggle("is_expanded");
  });
});
