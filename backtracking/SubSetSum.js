let SubSetSum = function(arr, sum) {
    let res = [];
    let subset = [];

    let dfs = function(i, subset, sum) {
        if(i > arr.length || sum <= 0)
            return;

        if(arr[i] == sum) {
            res.push([].concat(subset, arr[i]));
            return;
        }
        else {
            res.push([].concat(subset, arr[i]));
            dfs(i + 1, [].concat(subset, arr[i]), sum - arr[i]);
            dfs(i + 1, subset, sum);
        }
    }

    dfs(0, subset, sum);
}

const arr = [2, 3, 6, 7];
const res = SubSetSum(arr, 9);