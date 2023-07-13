const maxSum = function(nums) {
    if(nums.length == 0)
        return 0;

    let cursum = 0;
    let maxsum = nums[0];

    for(let i = 0; i < nums.length; i++) {
        for(let j = i; j < (i + nums.length); j = Math.floor((j + 1) % nums.length)) {
            cursum = Math.max(cursum, 0);
            cursum += nums[j];
            maxsum = Math.max(maxsum, cursum);
        }
    }

    return maxsum;
}

const arr = [1, -2, 3, -2];
const res = maxSum(arr);
console.log(res);