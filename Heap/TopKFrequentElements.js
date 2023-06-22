/**
 * 347. Top K Frequent Elements
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let minHeap = new MinHeap(nums.length);
    let frequency = getFrequency(nums);

    let set = new Set(nums);
    let elements = [...set];

    let i = 0;
    while(i < k) {
        let node = new Node(elements[i], frequency.get(elements[i]));
        minHeap.insert(node);
        i++;
    }

    for(let j = i; j < nums.length; j++) {
        let peekNode = minHeap.peek();
        let node = new Node(elements[j], frequency.get(elements[j]));
        if( peekNode["frequency"] < node["frequency"]) {
            minHeap.delete();
            minHeap.insert(node);
        }
    }

    let res = [];
    i = 1;
    while( i <= minHeap.size()) {
        let node = minHeap.atIndex(i);
        res.push(node["value"]);
        i++;
    }

    return res;
}

class Node {
    constructor(value, frequency) {
        this.value = value;
        this.frequency = frequency;
    }
}

var getFrequency = function(arr) {
    let frequencyMap = new Map();
    arr.forEach(value => {
        if(frequencyMap.get(value) == undefined)
            frequencyMap.set(value, 1);
        else
            frequencyMap.set(value, frequencyMap.get(value) + 1);
    });

    return frequencyMap;
}

var MinHeap = function(size) {
    this.data = new Array(size);
    this.index = 0;
}

MinHeap.prototype.size = function() {
    return this.index;
}

MinHeap.prototype.atIndex = function(i) {
    if(i > this.index || i < 1) 
        return null;

    return this.data[i];
}

MinHeap.prototype.peek = function() {
    if(this.data.length <= 1)
        return null;

    return this.data[1];
}

MinHeap.prototype.insert = function(value) {
    
    //Insert value to last postion.
    this.index++;
    this.data[this.index] = value;

    //Placing value to right position.
    let i = this.index;
    while(i > 0) {
        let parentPosition = Math.floor(i / 2);
        if(this.data[parentPosition] != undefined && this.data[i]["frequency"] < this.data[parentPosition]["frequency"]) {
            let temp = this.data[i];
            this.data[i] = this.data[parentPosition];
            this.data[parentPosition] = temp;
            i = parentPosition;
        }
        else {
            return;
        }
    }
}

MinHeap.prototype.delete = function() {
    
    //Remove root node.
    this.data[1] = this.data[this.index];
    this.index--;
    this.heapify(1);
    return;
}

MinHeap.prototype.heapify = function(index) {
    let i = index;
    while(i < this.index) {
        let left = i * 2;
        let right = i * 2 + 1;

        if(this.data[left] == undefined && this.data[right] && this.data[i] <= this.data[right]) {
            let temp = this.data[i];
            this.data[i] = this.data[right];
            this.data[right] = temp;
            i = right;
        }
        else if(this.data[right] == undefined && this.data[left] && this.data[i] <= this.data[left]) {
            let temp = this.data[i];
            this.data[i] = this.data[left];
            this.data[left] = temp;
            i = left;
        }
        else if(this.data[left] != undefined && this.data[right] != undefined && 
            this.data[left]["frequency"] <= this.data[i]["frequency"]
            && this.data[left]["frequency"] <= this.data[right]["frequency"]) {
                let temp = this.data[i];
                this.data[i] = this.data[left];
                this.data[left] = temp;
                i = left;
        }
        else if(this.data[left] != undefined && this.data[right] != undefined &&
            this.data[right]["frequency"] <= this.data[i]["frequency"]
            && this.data[right]["frequency"] <= this.data[left]["frequency"]) {
                let temp = this.data[i];
                this.data[i] = this.data[right];
                this.data[right] = temp;
                i = right;
        }
        else {
            return;
        }
    }

    return;
}
