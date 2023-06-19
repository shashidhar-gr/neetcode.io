/**
 * 49. Group Anagrams
    https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const group = [];
    const hmap = {};

    for(let i = 0; i < strs.length; i++) {
        if(hmap[i] == 1) {
            continue;
        }
        const arr = [];
        for(let j = i + 1; j < strs.length && j != i; j++) {
            if(hmap[j] == 1) {
                continue;
            }
            if(isAnagram(strs[i], strs[j])) {
                arr.push(strs[j]);
                hmap[j] = 1;
            }
        }
        arr.push(strs[i]);
        group.push(arr);
    }

    return group;
};

var isAnagram = function(s, t) {
    if(s.length != t.length) {
        return false;
    }

    const arr = Array(26).fill(0);

    for(let i = 0; i < s.length; i++) {
        arr[s.charCodeAt(i)- 97]++;
        arr[t.charCodeAt(i)- 97]--;
    }

    return arr.every((value) => value === 0);
}

const strs = ["", "", ""];

console.log(groupAnagrams(strs));
