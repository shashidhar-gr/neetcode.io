/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let arr = [];
    
    for(let i = 1; i <= n; i++) {
        arr.push(i); 
    }

    let countLostPlayers = 0;
    let play = function(i) {
        if(countLostPlayers > arr.length)
            return;
        
        let j = Math.floor((i + k - 1) % arr.length);
        j = j < 0 ? j * -1: j;
        arr.splice(j, 1);
        countLostPlayers += 1;
        play(j + 1);
    };

    play(0);

    return arr[0];
};

const res = findTheWinner(5, 2);
console.log(res);