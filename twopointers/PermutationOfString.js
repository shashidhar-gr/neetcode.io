/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let hashmap = new Map();
    let countchars = new Map();
    for(let i = 0; i < s1.length; i++) {
        hashmap.set(s1.charAt(i), hashmap.get(s1.charAt(i)) == undefined? 1: hashmap.get(s1.charAt(i)) + 1);
    }

    let L = 0, R = 0, counter = 0;
    countchars = getcopy(hashmap);
    while(R < s2.length && counter != s1.length) {
        let c = s2.charAt(R);
        if(hashmap.has(c) && countchars.get(c)) {
            countchars.set(c, countchars.get(c) - 1);
            R++;
            counter++;
        }
        else {
            let char = s2.charAt(L);
            countchars.set(char, hashmap.get(char));
            L++;
            counter -= hashmap.get(char);
        }
    }

    return counter == s1.length ? true: false;
};

var getcopy = function(source) {
    return new Map(JSON.parse(JSON.stringify(Array.from(source))));
}



const s1 = "hello", s2 = "ooolleoooleh";
const res = checkInclusion(s1, s2);
console.log(res);
