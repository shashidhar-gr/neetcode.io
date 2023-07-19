/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let count = 0, max = Number.NEGATIVE_INFINITY;
    for(let i = 0; i < k; i++)  {
        count += nums[i];
    }

    max = count;
    let L = 0, R = k;
    while(k < nums.length) {
        count = (count - nums[L]) + nums[R];
        if(count > max) {
            max = count;
        }
        k++;
        L++;
    }

    return max;
};