var subset = function(nums) {
    let arrsubset = [];
    let res = [];
    let i = 0;
    let dfs = function(i, arrsubset) {
        if(i >= nums.length)
            return;
        
        res.push([].concat(arrsubset, nums[i]));
        dfs(i + 1, [].concat(arrsubset, nums[i]));
        dfs(i + 1, arrsubset);
    }
    dfs(i, arrsubset);
    res.push([]);
    return res;
}

const arr = [1, 2, 3];
const res = subset(arr);
console.log(res);