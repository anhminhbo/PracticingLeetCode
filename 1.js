// 1. Two Sum
// https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] || map[target - nums[i]] === 0)
      return [map[target - nums[i]], i];
    else map[nums[i]] = i;
  }

  //     for (let i=0; i< nums.length ; i++) {
  //         const result = target - nums[i]
  //         for (let j=i+1; j< nums.length; j++){
  //             if (nums[j] === result) return [i,j]
  //         }

  //     }
};
