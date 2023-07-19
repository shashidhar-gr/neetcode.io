/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let L = 0, R = 0, count = 0, sum = 0;

    while(R < arr.length) {
        if(R - L + 1 <= k) {
            sum += arr[R];
            R++;
        }
        else if(1) {

        }
        else {
            if((R - 1 ) - L + 1 == k && Math.floor(sum / k) >= threshold) {
                count += 1;
            }
            sum -= arr[L];
            L++;
            R++;
        }
    }

    if(R < arr.length && R - L + 1 == k && Math.floor(sum / k) >= threshold) {
        count += 1;
    }

    return count;
};

const arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4;
const res = numOfSubarrays(arr, k, threshold);
console.log(res);