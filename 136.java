
// 136. Single Number
// https://leetcode.com/problems/single-number/
import java.util.*;

class Solution {
    public int singleNumber(int[] nums) {

        // HashMap<Integer,Integer> hm=new HashMap<Integer,Integer>();
        // if (nums.length == 1) {
        // return nums[0];
        // }

        // for (int i=0; i< nums.length; i++) {
        // if (!hm.containsKey(nums[i])) {
        // hm.put(nums[i],1);
        // } else {
        // hm.put(nums[i],2);
        // }
        // }

        // for(Map.Entry m:hm.entrySet()){
        // if ((int)m.getValue() == 1) {
        // return (int)m.getKey();
        // }
        // }

        // return 0;
        // }

        // ^ is XOR, so 0 ^ num1 = num1 and num1 ^ num1 = 0;
        // which means at the end only the single number get added.
        int result = 0;
        for (int i = 0; i < nums.length; i++) {
            result ^= nums[i];
        }
        return result;
    }
}