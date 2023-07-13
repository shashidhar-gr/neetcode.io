const containsDuplicates = function(arr) {
    let window = new Set();
    let L = 0, R = 0;
    
    while(R < arr.length) {
        if(R - L <= k) {
            if(window.has(arr[R])) 
                return true;
                window.add(arr[R]);
            R++;
        }
        else {
            window.delete(arr[L]);
            L++;
        }
    }

    return false;
}

const arr = [1,2,3,1], k = 3;
const res = containsDuplicates(arr);
console.log(res);