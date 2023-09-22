// (function calculator() {
//   const add = (a, b) => a + b;
//   const subtract = (a, b) => a - b;
//   const multiply = (a, b) => a * b;
//   const divide = (a, b) => a / b;

//   return { add, subtract, multiply, divide };
// })();

const calculator = (() => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  return { add, subtract, multiply, divide };
})();

console.log(calculator.add(1, 2));
console.log(calculator.multiply(10, 2));
console.log(calculator.divide('str', 2));

module.exports = calculator;
