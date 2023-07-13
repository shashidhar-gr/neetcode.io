const maxSum = function(nums) {
    if(nums.length == 0)
        return 0;

    let cursum = 0;
    let maxsum = nums[0];

    for(const n of nums) {
        cursum = Math.max(cursum, 0);
        cursum += n;
        maxsum = Math.max(maxsum, cursum);
    }

    return maxsum;
}

const arr = [-2,-1,-3];
const res = maxSum(arr);
console.log(res);