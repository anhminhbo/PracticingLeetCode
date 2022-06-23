// 69. Sqrt(x)
// https://leetcode.com/problems/sqrtx/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // 1,2,3,4,5,6,7,8,9
  // 1,4,9,16,25,36,49,64,81

  if (x === 0) return 0;
  if (x === 1) return 1;

  for (let i = 0; i <= x; i++) {
    let sqr = i * i;
    if (x === sqr) return i;
    if (x < sqr) return --i;
  }
};
