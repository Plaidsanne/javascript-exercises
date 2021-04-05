const getTheTitles = function (array) {
  let newArray = [];
  array.map((item) => {
    newArray.push(item.title);
  });
  return newArray;
};

module.exports = getTheTitles;
