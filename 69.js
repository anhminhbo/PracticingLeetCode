/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // 1,2,3,4,5,6,7,8,9
  // 1,4,9,16,25,36,49,64,81

  if (x < 2) return x;

  //     for (let i = 0; i <= x; i++) {
  //         let sqr = i * i
  //         if (x === sqr) return i;
  //         if (x < sqr) return --i
  //     }

  var left = 1;
  var right = x;
  var mid = 0;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (mid > x / mid) {
      right = mid - 1;
    } else if (mid + 1 > x / (mid + 1)) {
      return mid;
    } else {
      left = mid + 1;
    }
  }
};
