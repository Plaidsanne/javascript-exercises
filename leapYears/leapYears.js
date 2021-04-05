const leapYears = function (year) {
  if (year % 400 === 0 && year % 100 === 0) return true;
  else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  }
  return false;
};

module.exports = leapYears;

// Leaps Are:
// divisible by 4.

// if it is divisble by 100
// and 400 it is a leap year
