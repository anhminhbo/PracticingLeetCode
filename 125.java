// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/
class Solution {
    public boolean isPalindrome(String s) {
        // s = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        // String newS = "";
        // for (int i= s.length() - 1; i>=0;i--) {
        // newS += s.charAt(i);
        // }
        // if (newS.equals(s)) {
        // return true;
        // }

        // return false;
        // }

        s = s.toLowerCase();

        // define 2 pointers
        int left = 0;
        int right = s.length() - 1;

        while (left < right) {

            char leftChar = s.charAt(left);
            char rightChar = s.charAt(right);

            // continue if the char is not valid Alphabet
            if (!isValidAlphaChar(leftChar)) {
                left++;
                continue;
            }

            if (!isValidAlphaChar(rightChar)) {
                right--;
                continue;
            }

            // when is valid => check if right == left
            if (leftChar == rightChar) {
                left++;
                right--;
            } else {
                return false;
            }
        }

        return true;
    }

    public boolean isValidAlphaChar(char c) {
        if (c >= 'a' && c <= 'z' || c >= '0' && c <= '9') {
            return true;
        }
        return false;
    }
}