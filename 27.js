// 27. Remove Element
// https://leetcode.com/problems/remove-element/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;

  for (const num of nums) {
    if (num != val) {
      nums[k] = num;
      k++;
    }
  }

  return k;
};
