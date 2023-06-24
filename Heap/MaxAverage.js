var maxAverage = function(A, B) {
    let i = 0;
    let maxAverage = 0;
    let sum = 0;
    
    while(i < B) {
        sum = sum + A[i];
        i++;
    }
    
    maxAverage = Math.floor(sum / B);
    
    i = 1;
    let j = i + (B - 1);
    
    let windowAverage = 0;
    while(j < A.lenght) {
        sum = sum + A[j] - A[i - 1];
        windowAverage = Math.floor(sum / B);    
        if(windowAverage > maxAverage) {
            maxAverage = windowAverage;
        }
        i++;
        j++;
    }
    
    return maxAverage;
}

/*var maxAverage = function(A, B) {
    let i = 0;
    let maxAverage = 0;
    let sum = 0;
    while(i < B) {
        sum = sum + A[i];
        i++;
    }
    
    maxAverage = Math.floor(sum / B);

    i = 1;
    let j = i + (B - 1);
    
    let windowAverage = 0;
    
    while(j < A.length) {
        sum = sum + A[j] - A[i - 1];
        windowAverage = Math.floor(sum / B);    
        if(windowAverage > maxAverage) {
            maxAverage = windowAverage;
        }
        i++;
        j++;
    }
    
    return maxAverage;
} */

const A = [16, 3, 3, 6, 7, 8, 17, 13, 7], B = 2;
const res = maxAverage(A, B);
console.log(res);