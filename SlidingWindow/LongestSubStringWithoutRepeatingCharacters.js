/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let L = 0, res = 0, set = new Set();

    for(let R = 0; R < s.length; R++) {
        while(set.has(s.charAt(R))) {
            set.delete(s.charAt(L));
            L++;
        }
        set.add(s.charAt(R));
        res = Math.max(res, (R - L + 1));
    }

    return res;
};

const s = "pwwkew";
const res = lengthOfLongestSubstring(s);
console.log(res);