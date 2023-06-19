/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];
    for(let  i = 0; i < asteroids.length; i++) {
        while(stack.length && stack.at(-1) > 0 && asteroids[i] < 0) {
            let diff = asteroids[i] + stack.at(-1);
            if(diff == 0) {
                stack.pop();
                asteroids[i] = 0;
            }
            else if(diff < 0) {
                stack.pop();
            }
            else {
                asteroids[i] = 0;
            }
        }

        if(asteroids[i]) {
            stack.push(asteroids[i]);
        }
    }

    return stack;
};

const asteroids = [10,2,-5];
const res = asteroidCollision(asteroids);
console.log(res);