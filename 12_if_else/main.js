function adult() {
  const age = document.body.querySelector("#age").value;
  const output = document.body.querySelector(".output-age");
  if (age >= 18) {
    output.innerHTML = "Above 18";
  } else {
    output.innerHTML = "Under 18";
  }
}

function shisha() {
  const age = document.body.querySelector("#age-shisha").value;
  const output = document.body.querySelector(".output-shisha");
  if (age >= 18) {
    output.innerHTML = "Du darfst Shisha rauchen!";
  } else {
    output.innerHTML = "Du darfst nicht Shisha rauchen!";
  }
}

function luftcheck() {
  const luftNumber = Number(document.body.querySelector("#luft").value);
  const luftQuality = document.body.querySelector(".luft-q");
  const concern = document.body.querySelector(".concern");
  const effect = document.body.querySelector(".effect");
  const bg = document.querySelector(".luft-bg");

  if (luftNumber <= 50) {
    bg.style.backgroundColor = "green";
    luftQuality.innerHTML = "Luftqualität: " + luftNumber;
    concern.innerHTML = "Level of health concern:  Good";
    effect.innerHTML = "Level of health effect: Little or no risk";
  } else if (luftNumber > 50 && luftNumber <= 100) {
    bg.style.backgroundColor = "yellow";
    luftQuality.innerHTML = "Luftqualität: " + luftNumber;
    concern.innerHTML = "Level of health concern:  Moderate";
    effect.innerHTML = "Level of health effect: Acceptable quality";
  } else {
    bg.style.backgroundColor = "orange";
    luftQuality.innerHTML = "Luftqualität: " + luftNumber;
    concern.innerHTML =
      "Level of health concern:  Unhealthy for sensitive groups";
    effect.innerHTML =
      "Level of health effect: Generable publics not likely affected";
  }
}

function diff27(number) {
  if (number > 27) {
    console.log((number - 27) * 2);
  } else {
    console.log(number - 27);
  }
}

diff27(35);
diff27(74);
diff27(123);

function add2(num1, num2) {
  if (num1 === num2) {
    console.log("Summe 5");
  } else {
    console.log(num1 + num2);
  }
}

add2(2, 4);
add2(10, 10);
add2(15, 60);
