
// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/
import java.util.HashMap;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        if (nums.length < 2)
            return false;

        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();

        for (int i = 0; i < nums.length; i++) {
            if (!map.containsKey(nums[i]))
                map.put(nums[i], 1);
            else {
                return true;
            }
        }

        return false;

    }
}