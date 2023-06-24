var altitude = function(A) {
    let lastKnown = A[0];
    let max = Math.max(A[0], 0);
    
    for(let i = 1; i < A.length; i++) {
        lastKnown = lastKnown + A[i];
        if(lastKnown > max) {
            max = lastKnown;
        }
    }
    
    return max;
}

const A = [3, -4, 1, 1, -6, 4];
const res = altitude(A);