var isPowerOfTwo = function(n) {
    let power = function(lastval, i) {
        let res = 0;
        
        if(i == 0)
            res = 1;
        else
            res = lastval * 2;

        if(res > n)
            return false;
        if(res == n)
            return true;

        return power(res, i + 1);
    }

    let ans = power(2, 0);
    return ans;
};

let res = isPowerOfTwo(3);
console.log(res);