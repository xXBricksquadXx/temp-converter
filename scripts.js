import convert from "./temp-lib.js";

console.log(convert);

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("input", function handleKeyUp() {
    if (this.id === "degF") {
      inputs[0].value = convert(this.value, "toCelsius");
    } else {
      inputs[1].value = convert(this.value, "toFahrenheit");
    }
  });
});
