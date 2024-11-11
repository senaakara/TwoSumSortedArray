/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let resultIndex = [];
  var index1 = 0;
  var index2 = numbers.length - 1;

  while (index1 < index2) {
    var result = numbers[index1] + numbers[index2];
    if (result > target) {
      index2 -= 1;
    } else if (result < target) {
      index1 += 1;
    } else {
      resultIndex[0] = index1 + 1;
      resultIndex[1] = index2 + 1;
      break;
    }
  }

  return resultIndex;
};
