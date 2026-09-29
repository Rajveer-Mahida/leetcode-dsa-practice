// Track the cheapest day seen so far
// Given an array where prices[i] is the price of a stock on day i, maximize your profit by choosing one day to buy and a later day to sell. Return the maximum profit, or 0 if no profit is possible.

var maxProfit = function (prices) {

    let max_profit = 0; 
    let min_profit = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min_profit) {
            min_profit = prices[i];
        } else if (prices[i] - min_profit > max_profit) {
            max_profit = prices[i] - min_profit;
        }
    }

    console.log(max_profit);

};


prices = [7,1,5,3,6,4]

maxProfit(prices)