// String-Methods-Level-1_1

let firstName = "Max";
let lastName = "Müller";
let fullName = firstName + lastName;

console.log(firstName.length);
console.log(lastName.length);
console.log(fullName.length);

// String-Methods-Level-1_7

const mainString = "Sam is good at codingschool";
const replaceOne = document.body.querySelector(".sm_1_7 p:nth-of-type(2)");
const replaceTwo = document.body.querySelector(".sm_1_7 p:nth-of-type(3)");
const replaceThree = document.body.querySelector(".sm_1_7 p:nth-of-type(4)");
console.log(mainString);
console.log(replaceOne);
console.log(replaceTwo);
console.log(replaceThree);

mainString.replace("good at codingschool", "bad at school");
mainString.replace("good at codingschool", "good at school");
mainString.replace("good at codingschool", "good at tennis");

replaceOne.innerHTML = `Replace One: ${mainString.replace(
  "good at codingschool",
  "bad at school"
)}`;

replaceTwo.innerHTML = `Replace Two: ${mainString.replace(
  "good at codingschool",
  "good at school"
)}`;
replaceThree.innerHTML = `Replace Three: ${mainString.replace(
  "good at codingschool",
  "good at tennis"
)}`;

// String-Methods-Level-1_8

const mainStringTwo = "SAM IS GOING TO SCHOOL";
const changeOne = document.body.querySelector(".sm_1_8 p:nth-of-type(2)");
const changeTwo = document.body.querySelector(".sm_1_8 p:nth-of-type(3)");
const changeThree = document.body.querySelector(".sm_1_8 p:nth-of-type(4)");

const one = mainStringTwo.toLowerCase();
changeOne.innerHTML = `Change One: ${one}`;
changeTwo.innerHTML = `Change Two: ${
  one.slice(0, 3).toUpperCase() +
  one.slice(3, 15) +
  one.slice(15, 22).toUpperCase()
}`;
changeTwo.innerHTML = `Change Two: ${
  one.slice(0, 3) + one.slice(3, 15).toUpperCase() + one.slice(15, 22)
}`;

let sentence;

const words = one.split(" ");
for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}

let makeString = words.toString();
sentence = makeString.replaceAll(",", " ");
changeThree.innerHTML = `Change Three: ${sentence}`;

// String-Methods-Level-2_3

const find = () => {
  const text = document.body.querySelector(".sm_2_3 article").innerText;
  const sValue = document.body.querySelector("#search-input").value;
  document.querySelector("article").innerHTML = text.replaceAll(
    sValue,
    `<span class="bg">${sValue}</span>`
  );
};

// Functions-Vertiefung-Level-1_7

const multi = (num) => {
  result = num * 2;
  return result;
};

console.log(multi(2));

// Functions-Vertiefung-Level-1_8

const checkAge = (yearBorn) => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - yearBorn;
  return age;
};

console.log(checkAge(1999));

const checkTwoAges = (ageOne, ageTwo) => {
  let ageDiff;
  if (ageOne > ageTwo) {
    ageDiff = ageOne - ageTwo;
  } else {
    ageDiff = ageTwo - ageOne;
  }
  return ageDiff;
};

console.log(checkTwoAges(20, 13));
