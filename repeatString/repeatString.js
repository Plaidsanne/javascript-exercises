const repeatString = function (string, multiplier) {
  let result =
    Math.sign(multiplier) === -1 ? "ERROR" : string.repeat(multiplier);
  return result;
};

module.exports = repeatString;
