
// 169. Majority Element
// https://leetcode.com/problems/majority-element/
import java.util.*;

class Solution {
    public int majorityElement(int[] nums) {
        if (nums.length < 2)
            return nums[0];

        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();

        for (int i = 0; i < nums.length; i++) {
            if (!map.containsKey(nums[i]))
                map.put(nums[i], 1);
            else {
                map.put(nums[i], map.get(nums[i]) + 1);
                if (map.get(nums[i]) > nums.length / 2)
                    return nums[i];
            }
        }

        return 0;

        // int count = 0;
        // Integer candidate = null;

        // for (int num : nums) {
        // if (count == 0) {
        // candidate = num;
        // }
        // count += (num == candidate) ? 1 : -1;
        // }

        // return candidate;
        // }
        // }
    }
}