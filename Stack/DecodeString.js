/** 394. Decode String
 * https://leetcode.com/problems/decode-string/
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    let res = "";
    for(let i =  0; i < s.length; i++) {
        let c = s.charAt(i);
        switch(c) {
            case '[' : stack.push(c);
                        break;

            case ']': 
                    let str = "";
                    while(stack.at(-1) != '[') {
                        let char = stack.pop();
                        str = str + char;
                    }   
                    stack.pop();
                    str = str.split('').reverse().join('');
                    let num = "";
                    while(stack.length && !isNaN(stack.at(-1))) {
                        num = num + stack.pop();
                    }
                    num = num.split('').reverse().join('');
                    str = str.repeat(num).split("");
                    stack.push(...str);
                    break;

            default: 
                    stack.push(c);
                    break;
        }
    }

    return stack.join("");
}

const s = "100[leetcode]";
const res = decodeString(s);
console.log(res);