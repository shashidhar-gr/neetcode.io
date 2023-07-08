/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let maxHeap = new MaxHeap();
    
    stones.map((value) => {
        maxHeap.push(value);
    });

    while(maxHeap.size() > 1) {
        let x = maxHeap.pop();
        let y =maxHeap.pop();

        if(x == y) {
            continue;
        }
        else if(x < y) {
            y = y - x;
            maxHeap.push(y);
        }
        else {
            x = x - y;
            maxHeap.push(x);
        }
    }

    return maxHeap.peek() == null ? 0 : maxHeap.peek();
};

var MaxHeap = function() {
    this.index = 0;
    this.data = [];
}

MaxHeap.prototype.size = function() {
    return this.index; 
}

MaxHeap.prototype.peek = function() {
    return this.index == 0 ? null : this.data[this.index]; 
}

MaxHeap.prototype.pop = function() {
    let res = this.data[1];
    this.data[1] = this.data[this.index];
    this.data[this.index] = null;
    this.index--;

    let i = 1;
    while(i < this.index) {
        let left = i * 2;
        let right = (i * 2) + 1;

        if(this.data[left] && this.data[right] && this.data[left] > this.data[i] && this.data[left] > this.data[right]) {
            let temp = this.data[i];
            this.data[i] = this.data[left];
            this.data[left] = temp;
            i = left;
        }
        else if(this.data[left] && this.data[right] && this.data[right] > this.data[i] && this.data[right] > this.data[left]) {
            let temp = this.data[i];
            this.data[i] = this.data[right];
            this.data[right] = temp;
            i = right;
        }
        else 
            return res;
    }

    return res;
}

MaxHeap.prototype.push = function(value) {
    this.index++;
    this.data[this.index] = value;

    let i = this.index;
    while(i > 0) {
        let parentIndex = Math.floor(i / 2);
        if(this.data[parentIndex] < this.data[i]) {
            let temp = this.data[parentIndex];
            this.data[parentIndex] = this.data[i];
            this.data[i] = temp;
            i = parentIndex;
        }
        else {
            return;
        }
    }
}

const stones = [9, 3, 2, 10];
const res = lastStoneWeight(stones);
console.log(res);