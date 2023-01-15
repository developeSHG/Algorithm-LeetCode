/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    return prices.reduce((a, c, i) => {
        if (prices.length > i + 1 && 0 < prices[i + 1] - c) {
            a += prices[i + 1] - c  ;
        }
        return a;
    }, 0);
};