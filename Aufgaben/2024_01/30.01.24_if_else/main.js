function adult() {
  const age = number(document.querySelector("#age").value);
  if (age >= 18) {
    console.log("Above 18");
  } else {
    console.log("Under 18");
  }
}
