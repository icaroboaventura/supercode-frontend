//----------------------------------------------------------------
// Dom-Elements-Level-1_2
//----------------------------------------------------------------

const changeBtn = document.querySelector(".dom-e-1-2 button");
const elements = document.querySelectorAll(".example");
changeBtn.addEventListener("click", () => {
  elements.forEach((element) => {
    element.classList.toggle("active");
  });
});

//----------------------------------------------------------------
// Dom-Elements-Level-1_3
//----------------------------------------------------------------

const list = document.querySelector(".game-list");
const outputGame = document.querySelector(".output-game");
const printGame = (game) => {
  switch (game) {
    case "first":
      outputGame.innerHTML = list.firstElementChild.textContent;
      break;
    case "last":
      outputGame.innerHTML = list.lastElementChild.textContent;
      break;
    case "first-next":
      outputGame.innerHTML = list.firstElementChild.nextElementSibling.textContent;
      break;
    case "last-prev":
      outputGame.innerHTML = list.lastElementChild.previousElementSibling.textContent;
      break;
    default:
      break;
  }
};
