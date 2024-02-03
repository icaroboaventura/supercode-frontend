function slicing() {
  const inputString = document.body.querySelector("#string-input").value;
  const inputSlicing = document.body.querySelector("#slicing-input").value;
  const slicingPart = document.body.querySelector(
    'input[name="slicing-part"]:checked'
  ).value;
  const beforeOutput = document.body.querySelector(".before");
  const afterOutput = document.body.querySelector(".after");
  const errorOutput = document.body.querySelector("h4");

  console.log(slicingPart);

  if (inputString.includes(inputSlicing)) {
    if (slicingPart === "before") {
      const beforeStringOne = inputString.slice(
        0,
        inputString.indexOf(inputSlicing)
      );
      const beforeStringTwo = inputString.slice(
        inputString.indexOf(inputSlicing)
      );
      beforeOutput.innerHTML = beforeStringOne;
      afterOutput.innerHTML = beforeStringTwo;
      errorOutput.textContent = "";
    } else {
      const afterStringOne = inputString.slice(
        0,
        inputString.indexOf(inputSlicing)
      );
      const slicingAdd = afterStringOne + inputSlicing;
      const afterStringTwo = inputString.slice(
        inputString.indexOf(inputSlicing)
      );
      const slicingSub = afterStringTwo.replace(inputSlicing, "");
      beforeOutput.innerHTML = slicingAdd;
      afterOutput.innerHTML = slicingSub;
      errorOutput.textContent = "";
    }
  } else {
    errorOutput.textContent = "Error: (Slice by:) not found in your string";
  }
}
