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

  if (inputString.length > 0 && inputSlicing.length > 0) {
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
          inputString.indexOf(inputSlicing) + inputSlicing.length
        );
        const afterStringTwo = inputString.slice(
          inputString.indexOf(inputSlicing) + inputSlicing.length
        );
        beforeOutput.innerHTML = afterStringOne;
        afterOutput.innerHTML = afterStringTwo;
        errorOutput.textContent = "";
        console.log(afterStringOne);
        console.log(inputString.slice(0, inputString.indexOf(inputSlicing)));
        console.log(afterStringTwo);
      }
    } else {
      errorOutput.textContent = "Error: (Slice by:) not found in your string";
    }
  } else {
    errorOutput.textContent = "Error: not found a string or slice";
  }
}
