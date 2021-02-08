function c2f(c) {
  return (9 / 5) * c + 32;
}
function f2c(f) {
  return (5 / 9) * (f - 32);
}

const celsius = document.getElementById("degC");
const fahrenheit = document.getElementById("degF");
fahrenheit.value = c2f(celsius.value);

celsius.oninput = function c2f2(e) {
  fahrenheit.value = c2f(e.target.value);
};

fahrenheit.oninput = function f2c2(e) {
  celsius.value = f2c(e.target.value);
};
