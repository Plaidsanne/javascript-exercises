const removeFromArray = function (array, ...args) {
  let newArray = array;
  args.map((removeMe) => {
    newArray = newArray.filter((keepMe) => keepMe !== removeMe);
  });
  return newArray;
};

removeFromArray([1, 2, 3, 4], 3, 2);
module.exports = removeFromArray;
