// 268. Missing Number
// https://leetcode.com/problems/missing-number/

import java.util.Arrays;

class Solution {
    public int missingNumber(int[] nums) {
        // // Sol 1
        // int n = nums.length;
        // Arrays.sort(nums); 0nlogn
        // for (int i = 0 ; i< n; i++) {
        // // Find the missing from range [0,n] for example: 0,1,2,4,5,6
        // if (i != nums[i]) return i;
        // // the missing number is at the end of array for example 0,1,2,3,4,5
        // if (i == n-1) return n;
        // }

        // return 0;

        // // Sol 2: range sum and actual sum => missing number = actualSum - rangeSum
        // // int rangeSum = 0;
        // int n = nums.length;
        // // Gauss's formula to calculate rangesum
        // int rangeSum = n*(n+1)/2;
        // int actualSum = 0;

        // // for (int i=0; i <= nums.length; i++) {
        // // rangeSum+= i;
        // // }
        // for (int i=0; i < nums.length; i++) {
        // actualSum += nums[i];
        // }

        // return rangeSum - actualSum;
        // }

        // Sol 3 Binary search
        Arrays.sort(nums);
        int l = 0, r = nums.length;
        while (l < r) {
            int m = (l + r) / 2;
            if (nums[m] > m) {
                r = m;
            } else {
                l = m + 1;
            }
        }

        return r;
    }
}