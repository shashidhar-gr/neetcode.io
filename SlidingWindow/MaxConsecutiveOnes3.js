/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let zerocountinwindow = 0, max = 0, L = 0, R = 0, windowssize = 0;

    while(R < nums.length) {
        if(nums[R] == 1) {
            windowssize += 1;
            R++;
        }
        else {
            if(zerocountinwindow < k) {
                zerocountinwindow += 1;
                windowssize += 1;
                R++;
            }
            else {
                while(nums[L] != 0) {
                    L++;
                }
                L++;
                windowssize = R - L + 1;
                R++;
            }
        }

        max = Math.max(max, windowssize);
    }

    return max;
};

const nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3;
const res = longestOnes(nums, k);
console.log(res);