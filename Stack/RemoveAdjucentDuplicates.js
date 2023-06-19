/**
 * 1209. Remove All Adjacent Duplicates in String II
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let stack = [];
    for(let i = 0; i < s.length; i++) {
        let n = k - 1, insert = true;
        while(stack.length && 
            (stack.at(-1)["char"] == s.charAt(i)) && 
            (stack.at(-1)["count"] == n)) {
                n--;
                stack.pop();
                insert = false;
        }
        if(insert) {
            if(stack.length && stack.at(-1)["char"] == s.charAt(i)) {
                let obj = stack.at(-1);
                stack.push({"char": s.charAt(i), "count": obj["count"] + 1});
            } 
            else {
                stack.push({"char": s.charAt(i), "count": 1});
            }
        }
    }

    let str = "";
    for(let i = 0; i < stack.length; i++) {
        str = str + stack[i]["char"];
    }
    return str;
};

const s = "pbbcggttciiippooaais";
const k = 2;
const res = removeDuplicates(s, k);
console.log(res);