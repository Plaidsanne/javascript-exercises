const sumAll = function (...args) {
  let error = false;
  let sum = 0;
  let value1 = Math.min(...args);
  let value2 = Math.max(...args);

  args.map((item) => {
    typeof item !== "number"
      ? (error = true)
      : Math.sign(item) === -1
      ? (error = true)
      : null;
  });
  if (error) {
    return "ERROR";
  } else {
    for (i = value1; i <= value2; i++) {
      sum += i;
    }
    return sum;
  }
};
module.exports = sumAll;

/*
[].reduce() loops through an array;
[].reduce() takes 2 arguments;
[].reduce(reducer, initialValue)

initialValue is the starting point;
reducer is the callBack function;

Reducer;
reducer() takes 2 arguments;
total: value at end which the initialValue is set by the initialValue parameter
        NOTE: if no initialValue then the first item in the array is the initialValue;
currentValue(in the array)




*/
