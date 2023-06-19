/**
 * 901. Online Stock Span
 * https://leetcode.com/problems/online-stock-span/description/
 */
var StockSpanner = function() {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let count = 1;
    while(this.stack.length && this.stack.at(-1)["element"] <= price) {
        let obj = this.stack.pop();
        count = count + obj["count"];
    }
    this.stack.push({"element": price, "count": count});
    return count;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */