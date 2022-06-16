// 66. Plus One
// https://leetcode.com/problems/plus-one/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let overflow = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (overflow === 1) {
      digits[i] += 1;
      if (digits[i] > 9) {
        digits[i] = 0;
        if (i === 0) digits.unshift(1);
      } else break;
    }

    if (i === digits.length - 1) {
      digits[i] += 1;
      if (digits[i] > 9) {
        overflow = 1;
        digits[i] = 0;
        if (i === 0) digits.unshift(1);
      } else break;
    }
  }

  return digits;
};
