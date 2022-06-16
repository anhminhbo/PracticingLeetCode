// 35. Search Insert Position
// https://leetcode.com/problems/search-insert-position/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  //     O(n)
  // for (let i=0; i< nums.length; i++) {
  //     if (nums[i] === target) return i;
  //     else {
  //         if (nums[i] >= target) return 0;
  //         if (nums[i] < target && nums[i+1] >= target || nums[i+1] === undefined) return i+1;
  //     }
  // }

  //    [1,2,3,4,6]
  // Binary Search
  let left = 0;
  let right = nums.length;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] < target) left = mid + 1;
    else right = mid;
  }

  return left;
};
