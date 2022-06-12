// 1480. Running Sum of 1d Array
// https://leetcode.com/problems/running-sum-of-1d-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var runningSum = function(nums) {
//     const result = [];
//     for (let i=0; i< nums.length;i++) {
//         if (i==0) result.push(nums[i])
//         else {
//             let sum = 0;
//             for (let j=0; j<=i;j++) {
//                 sum+= nums[j]
//         }
//                 result.push(sum);
//         }

//     }
//     return result;
// };

var runningSum = function (nums) {
  const result = nums.reduce((previousValue, currentValue, currentIndex) => {
    let sum = 0;
    if (previousValue.length !== 0)
      sum += currentValue + previousValue[currentIndex - 1];
    else sum = currentValue;
    return [...previousValue, sum];
  }, []);

  return result;
};
