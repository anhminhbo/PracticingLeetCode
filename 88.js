// 88. Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  //     let firstArrIndex = 0;
  //     let secondArrIndex = 0;

  //     let newArr = [...nums1];
  //     let indexOfNewArr = 0;

  //     while (firstArrIndex < m || secondArrIndex < n) {
  //         if (secondArrIndex >= n ) {
  //             nums1[indexOfNewArr] = newArr[firstArrIndex];
  //             firstArrIndex++;
  //             indexOfNewArr++;
  //             continue;
  //         }
  //         if (firstArrIndex >= m ) {
  //             nums1[indexOfNewArr] = nums2[secondArrIndex];
  //             secondArrIndex++;
  //             indexOfNewArr++;
  //             continue;
  //         }
  //         if (newArr[firstArrIndex] <= nums2[secondArrIndex]) {
  //             nums1[indexOfNewArr] = newArr[firstArrIndex];
  //             firstArrIndex++;
  //         } else {
  //             nums1[indexOfNewArr] = nums2[secondArrIndex];
  //             secondArrIndex++;
  //         }
  //         indexOfNewArr++;

  //     }

  // Two pointer solution
  // Start by comparing the largest numbers between the two arrays and add to the end of nums1
  while (n) {
    if (nums1[m - 1] >= nums2[n - 1]) nums1[m + n - 1] = nums1[--m];
    else nums1[m + n - 1] = nums2[--n];
  }
};
