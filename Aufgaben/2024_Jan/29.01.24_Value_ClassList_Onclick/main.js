function calculateAge() {
  const bYear = document.querySelector("#year").value;
  const cYear = new Date().getFullYear();
  const age = cYear - bYear;
  const result = document.querySelector(".age-output");
  result.innerHTML = age;
}

function calculateAgeDif() {
  const ageOne = document.querySelector("#age-one").value;
  const ageTwo = document.querySelector("#age-two").value;
  let age = 0;
  if (ageOne > ageTwo) {
    age = ageOne - ageTwo;
  } else {
    age = ageTwo - ageOne;
  }
  const result = document.querySelector(".age-dif-output");
  result.innerHTML = age;
}

function bgGenerator() {
  let clrRed = document.querySelector("#red").value;
  let clrGreen = document.querySelector("#green").value;
  let clrBlue = document.querySelector("#blue").value;
  let bg = document.querySelector(".bg-generator");
  bg.style.backgroundColor = `rgb(${clrRed},${clrGreen},${clrBlue})`;
  const code = document.querySelector(".code-output");
  code.innerHTML = `rgb(${clrRed},${clrGreen},${clrBlue})`;
}

function stylen() {
  const addClassh3 = document.querySelector(".hl-3");
  addClassh3.classList.add("hl-3-style");
}

function remove() {
  const addClassh3 = document.querySelector(".hl-3");
  addClassh3.classList.remove("hl-3-style");
}
