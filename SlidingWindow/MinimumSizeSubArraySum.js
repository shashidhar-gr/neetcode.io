/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let L = 0, R = 0, min = Number.POSITIVE_INFINITY, windowsum = 0;
    while(R < nums.length && L <= R) {
        windowsum += nums[R];
        while(windowsum >= target) {
            min = Math.min(R - L + 1, min);
            windowsum -= nums[L];
            L++;
        }
        R++;
    }

    return min == Number.POSITIVE_INFINITY ? 0: min;
};

const target = 7, nums = [2,3,1,2,4,3];
const res = minSubArrayLen(target, nums);
console.log(res);