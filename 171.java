// 171. Excel Sheet Column Number
// https://leetcode.com/problems/excel-sheet-column-number/
class Solution {
    public int titleToNumber(String columnTitle) {
        int result = 0;
        for (int i = 0; i < columnTitle.length(); i++) {
            result = result * 26 + (columnTitle.charAt(i) - 'A' + 1);
        }

        return result;

    }
}