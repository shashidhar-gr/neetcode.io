/**
 * 438. Find All Anagrams in a String
    https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const arr = [];

    let i = 0, j = p.length-1;

    while(i <= s.length - (p.length)) {
        if(isAnagram(s.substring(i, j+1), p)) {
            arr.push(i);
        }
        i++;
        j++
    }

    return arr;
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

var s = "a";
var t = "a";

const arr = findAnagrams(s, t);

console.log(arr);