// 202. Happy Number
// https://leetcode.com/problems/happy-number/
class Solution {
    public boolean isHappy(int n) {
        // if (n == 1) return true;
        // if (n == 4) return false;
        // String nToString = String.valueOf(n);
        // int sum = 0;
        // if (nToString.length() < 2) sum = (nToString.charAt(0) -
        // '0')*(nToString.charAt(0) - '0');
        // else {
        // for (int i=0; i< nToString.length(); i++) {
        // sum += (nToString.charAt(i) - '0')*(nToString.charAt(i) - '0');
        // }
        // }

        // return isHappy(sum);

        HashSet<Integer> set = new HashSet<Integer>();
        while (!set.contains(n)) {
            set.add(n);

            int sum = 0;

            while (n != 0) {
                sum += (n % 10) * (n % 10);
                n /= 10;
            }

            if (sum == 1)
                return true;
            else {
                n = sum;
            }

        }

        return false;

    }
}