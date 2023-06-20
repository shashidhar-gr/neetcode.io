/** 42. Trapping Rain Water
 * https://leetcode.com/problems/trapping-rain-water/description/
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let maxr = 0;
    let maxinleft = new Array(height.length).fill(0);
    for(let i = 0; i < height.length; i++) {
        if(height[i] < maxr) {
            maxinleft[i] = maxr;
        }
        else {
            maxinleft[i] = maxr;
            maxr = height[i];
        }
    }

    let maxl = 0;
    let maxinright = new Array(height.length).fill(0);
    for(let i = height.length - 1; i >= 0; i--) {
        if(height[i] < maxl) {
            maxinright[i] = maxl;
        }
        else {
            maxinright[i] = maxl;
            maxl = height[i];
        }
    }

    let totalCount = 0;
    for(let i = 0; i < height.length; i++) {
        let min = Math.min(maxinleft[i], maxinright[i]);
        let count = min - height[i];
        if(count <= 0) {
            count = 0;
        }
        totalCount =  totalCount + count;
    }

    return totalCount;
}

const height = [4,2,0,3,2,5];
const res = trap(height);

/*
var trap = function(height) {
    let stack = [], prevGreater = new Array(height.length).fill(-1), nextGreater = new Array(height.length).fill(-1);

    for(let i = 0; i < height.length; i++) {
        while(stack.length && height[stack.at(-1)] < height[i]) {
            let stackTop = stack.pop();
            nextGreater[stackTop] = i;
        }
        stack.push(i);
    }

    stack = [];
    for(let i = 0; i < height.length; i++) {
        while(stack.length && height[stack.at(-1)] <= height[i]) {
            stack.pop();
        }
        if(stack.length) {
            let stackTop = stack.at(-1);
            prevGreater[i] = stackTop;
        }
        stack.push(i);
    }
    
    let totalUnits = 0;
    let hashMap = {};
    for(let i = 0; i < height.length; i++) {
        let previousGreaterVal = prevGreater[i] == -1 ? 0: height[prevGreater[i]];
        let nextGreaterVal = nextGreater[i] == -1 ? 0: height[nextGreater[i]];
        if(hashMap[[prevGreater[i], nextGreater[i]]] == 1)
            continue;
        
        let units = 0;
        if(previousGreaterVal != 0 && nextGreaterVal != 0) {
            let width = nextGreater[i] - prevGreater[i] - 1;
            let minHeight = Math.min(previousGreaterVal, nextGreaterVal);
            units = width * (minHeight - height[i]);
            totalUnits = totalUnits + units;
            hashMap[[prevGreater[i], nextGreater[i]]] = 1;
        }
    }

    return totalUnits;
}; */