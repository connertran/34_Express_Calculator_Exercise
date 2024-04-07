const { mean, median, findMode } = require("./functions");

describe("test mean, median, and mode", function () {
  const numList1 = [30, 40, 70, 70, 80];
  const numList2 = [1, 3, 4, 4];
  test("return mean", function () {
    const result = mean(numList1);
    const result2 = mean(numList2);
    expect(result).toEqual(58);
    expect(result2).toEqual(3);
  });
  test("return median", function () {
    const result = median(numList1);
    const result2 = median(numList2);
    expect(result).toEqual(70);
    expect(result2).toEqual(3.5);
  });
  test("return mode", function () {
    const result = findMode(numList1);
    const result2 = findMode(numList2);
    const numList3 = [1, 2, 3];
    const result3 = findMode(numList3);
    expect(result).toEqual([70]);
    expect(result2).toEqual([4]);
    expect(result3).toEqual([1, 2, 3]);
  });
});
