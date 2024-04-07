const ExpressError = require("./myError");

function getNums(reqQuery) {
  if (!reqQuery.nums) {
    throw new ExpressError("nums are required", 400);
  }
  const numListComma = Object.values(reqQuery);
  const numList = numListComma[0]
    .split(",")
    .map((numStr) => parseInt(numStr.trim()));

  return numList;
}
function mean(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const average = sum / arr.length;
  return average;
}
function validateQString(reqQuery) {
  const numListComma = Object.values(reqQuery);
  const numList = numListComma[0].split(",").map((numStr) => numStr.trim());
  numList.forEach((element) => {
    if (isNaN(element)) {
      throw new ExpressError(
        `${element} is not a number. You must pass a query key of nums with a comma-separated list of numbers.`,
        400
      );
    }
  });
}
function median(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  if (sortedArr.length % 2 !== 0) {
    const index = Math.floor(sortedArr.length / 2);
    return sortedArr[index];
  } else {
    const index1 = Math.floor(sortedArr.length / 2);
    const index2 = index1 - 1;
    const result = (sortedArr[index1] + sortedArr[index2]) / 2;
    return result;
  }
}
function findMode(arr) {
  const frequency = {};

  arr.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
  });

  let maxFrequency = 0;
  for (let key in frequency) {
    if (frequency[key] > maxFrequency) {
      maxFrequency = frequency[key];
    }
  }

  const mode = [];
  for (let key in frequency) {
    if (frequency[key] === maxFrequency) {
      mode.push(Number(key));
    }
  }

  return mode;
}

module.exports = {
  mean: mean,
  median: median,
  getNums: getNums,
  findMode: findMode,
  validateQString: validateQString,
};
