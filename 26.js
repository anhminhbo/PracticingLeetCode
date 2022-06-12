// 26. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 0;

  for (const num of nums) {
    if (nums[k] !== num) nums[++k] = num;
  }

  console.log(nums.filter((num, index, nums) => nums.indexOf(num) == index));

  return k + 1;
};
