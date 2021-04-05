const ftoc = function (temp) {
  //(F-32) * 5/9
  let result = 0;
  result = (temp - 32) * (5 / 9);
  result = Math.round(10 * result) / 10;
  return result;
};

const ctof = function (temp) {
  //C * (9/5) + 32
  let result = 0;
  result = temp * (9 / 5) + 32;
  result = Math.round(10 * result) / 10;

  return result;
};
module.exports = {
  ftoc,
  ctof,
};
