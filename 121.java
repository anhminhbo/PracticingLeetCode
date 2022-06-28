// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
class Solution {
    public int maxProfit(int[] prices) {
        // int maxPro = 0;

        // for (int i = 0 ; i< prices.length ; i++) {
        // int buy = prices[i];
        // for (int j = i + 1; j< prices.length; j++) {
        // int sell = prices[j];
        // if (sell - buy >= maxPro ) {
        // maxPro = sell - buy;
        // }
        // }
        // }

        // return maxPro;

        int maxPro = 0;
        if (prices.length <= 1) {
            return maxPro;
        }

        int buy = prices[0];
        int sell = 0;

        for (int i = 1; i < prices.length; i++) {
            // // check if has not buy yet
            // if (buy == -1) {
            // if (i == prices.length - 1) return maxPro;

            // buy = prices[i];
            // sell = prices[i+1];

            // // check if maxPro is not good --> not buying this
            // if (maxPro < sell - buy) {
            // maxPro = sell - buy;
            // } else {
            // buy = -1;
            // }

            // // if already buy now we sell
            // } else {
            sell = prices[i];

            if (maxPro < sell - buy) {
                maxPro = sell - buy;
            }

            if (buy > sell) {
                buy = sell;
            }

            // }

        }

        return maxPro;
    }
}