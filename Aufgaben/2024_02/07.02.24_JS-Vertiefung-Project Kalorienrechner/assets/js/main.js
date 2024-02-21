const calculate = () => {
  const körperGrößer = Number(document.querySelector("#körper-größer-input").value);
  const alter = Number(document.querySelector("#alter-input").value);
  const gewicht = Number(document.querySelector("#gewicht-input").value);
  const geschlecht = document.querySelector("input[name='geschlecht-input']:checked").value;
  const pal = Number(document.querySelector("option:checked").value);
  const grundUmsatzKcal = document.querySelector(".pFour");
  const grundUmsatzKj = document.querySelector(".pFive");
  const gesamtUmsatzKcal = document.querySelector(".pEight");
  const gesamtUmsatzKj = document.querySelector(".pNine");

  if (geschlecht === "männlich") {
    const kcal = (66.47 + 13.7 * gewicht + 5 * körperGrößer - 6.8 * alter).toFixed(2);
    grundUmsatzKcal.innerHTML = kcal;
    grundUmsatzKj.innerHTML = (kcal * 4.184).toFixed(2);
    gesamtUmsatzKcal.innerHTML = (kcal * pal).toFixed(2);
    gesamtUmsatzKj.innerHTML = (kcal * pal * 4.184).toFixed(2);
  } else {
    const kcal = (655.1 + 9.6 * gewicht + 1.8 * körperGrößer - 4.7 * alter).toFixed(2);
    grundUmsatzKcal.innerHTML = kcal;
    grundUmsatzKj.innerHTML = (kcal * 4.184).toFixed(2);
    gesamtUmsatzKcal.innerHTML = (kcal * pal).toFixed(2);
    gesamtUmsatzKj.innerHTML = (kcal * pal * 4.184).toFixed(2);
  }
};
