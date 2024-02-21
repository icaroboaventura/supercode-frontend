//---------------------------------------------------------------------------------
// BOM-Level-1_1
//---------------------------------------------------------------------------------

const start = () => {
  console.log("Start: Warten für 3 Sekunden.");
  setTimeout(() => console.log("Erledigt: Du hast 3 Sekunden verschwendet."), 3000);
};

let number = 11;

const counter = () => {
  start();
  const interval = setInterval(() => {
    number--;
    console.log(number);

    if (number <= 0) {
      clearInterval(interval);
    }
  }, 1000);
};

counter();

//---------------------------------------------------------------------------------
// BOM-Level-1_2
//---------------------------------------------------------------------------------

const outputPercentage = document.querySelector(".zeit");
let percents = 100;
const counterPer = () => {
  const interval = setInterval(() => {
    percents--;
    outputPercentage.textContent = `${percents}%`;

    if (percents === 0) {
      clearInterval(interval);
    }
  }, 50);
};
document.querySelector(".btn").addEventListener("click", counterPer);
