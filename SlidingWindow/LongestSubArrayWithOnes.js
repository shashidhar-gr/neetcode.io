/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let L = 0, R = 0, window = 0, max = 0, zerocountinwindow = 0;

    while(R < nums.length) {
        if(nums[R] == 1) {
            window += 1;
            R++;
        }
        else {
            if(zerocountinwindow < 1) {
                window += 1;
                R++;
                zerocountinwindow += 1;
            }
            else {
                while(nums[L] != 0) {
                    L++;
                }
                L++;
                window = R - L + 1;
                R++;
            }
        }
        max = Math.max(max, window - 1);
    }

    return max;
};

const nums = [1,1,0,1];
const res = longestSubarray(nums);
console.log(res);