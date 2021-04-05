let findTheOldest = function (array) {
  let oldest;
  let currentDate = parseInt(new Date().getFullYear());

  oldest = array.reduce((accumulator, currentValue) => {
    let accumAge =
      (accumulator.yearOfDeath === undefined
        ? currentDate
        : accumulator.yearOfDeath) - accumulator.yearOfBirth;
    let currValueAge =
      (currentValue.yearOfDeath === undefined
        ? currentDate
        : currentValue.yearOfDeath) - currentValue.yearOfBirth;
    if (accumAge > currValueAge) {
      return accumulator;
    } else {
      return currentValue;
    }
  });
  console.log(oldest);
  return oldest;
};

module.exports = findTheOldest;
