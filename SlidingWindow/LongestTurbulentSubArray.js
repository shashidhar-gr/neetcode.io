/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
    let L = 0, R = 1, res = 1, prev = "";

    while(R < arr.length) {
        if(arr[R - 1] < arr[R] && prev != '>') {
            res = Math.max(res, R - L + 1);
            R = R + 1;
            prev = ">";
        }
        else if(arr[R - 1] > arr[R] && prev != '<') {
            res = Math.max(res, R - L + 1);
            R = R + 1;
            prev = "<";
        }
        else {
            R = arr[R] === arr[R-1] ? R + 1: R;
            L = R - 1;
            prev = "";
        }
    }
    return res;
};

const arr = [9];
const res = maxTurbulenceSize(arr);
console.log(res);