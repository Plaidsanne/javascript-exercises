const fibonacci = function (number) {
  if (Math.sign(number) === -1) return "OOPS";
  let newNumber = number;
  if (typeof number === "string") {
    newNumber = parseInt(number);
  }
  let sum = 0;
  let previousValue = 0;
  let array = [1];
  for (i = 1; i <= newNumber; i++) {
    sum = array[i - 1] + previousValue;
    array.push(sum);
    previousValue = array[i - 1];
  }
  let answer = array[newNumber - 1];
  return answer;
};

module.exports = fibonacci;
