/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack = [];
    let i = 0, j = 0;
    while(i < popped.length) {
        if(stack.length && stack.at(-1) == popped[i]) {
            stack.pop();
            i++;
            continue;
        }
        else {
            while(pushed[j] != popped[i] && j < pushed.length) {
                stack.push(pushed[j]);
                j++;
            }

            if(j < pushed.length && pushed[j] == popped[i]) {
                stack.push(pushed[j]);
                j++;
            }
            else {
                return false;
            }
        }
    }

    return stack.length == 0 ? true: false;
};

const pushed = [1,2,3,4,5];
const popped = [4,3,5,1,2];
console.log(validateStackSequences(pushed, popped));