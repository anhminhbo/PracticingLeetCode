// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let largestSum = -Infinity;
  let prevSum = 0;
  for (let i = 0; i < nums.length; i++) {
    prevSum = Math.max(prevSum + nums[i], nums[i]);

    largestSum = Math.max(prevSum, largestSum);
  }

  return largestSum;
};
