function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function sum(array) {
  const sum = array.reduce((result, currentValue) => {
    return result + currentValue;
  }, 0);
  return sum;
}
function multiply(array) {
  const result = array.reduce((accumlator, currentValue) => {
    return accumlator * currentValue;
  });
  return result;
}

function power(base, exponent) {
  return base ** exponent;
}

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
