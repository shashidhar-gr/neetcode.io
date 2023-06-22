/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.minHeap = new MinHeap(nums.length);
    this.k = k;

    let j = 0;
    while(nums.length && j < k && j < nums.length) {
        this.minHeap.insert(nums[j]);
        j++;
    }

    for(let i = j; i < nums.length; i++) {
        if(nums[i] > this.minHeap.data[1]) {
            this.minHeap.delete();
            this.minHeap.insert(nums[i]);
        }
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if(this.minHeap.data[1] == undefined || this.minHeap.index < this.k) {
        this.minHeap.insert(val);
    }
    else if(val > this.minHeap.data[1]) {
        this.minHeap.delete();
        this.minHeap.insert(val);
    }

    return this.minHeap.data[1];
};

var MinHeap = function(size) {
    this.data = new Array(size);
    this.index = 0;
}

MinHeap.prototype.delete = function() {
    this.data[1] = this.data[this.index];
    this.index--;

    let i = 1;

    while(i < this.index) {
        let left = i * 2;
        let right = i * 2 + 1;

        if(this.data[left] !== undefined && this.data[right] != undefined && this.data[left] < this.data[i] && this.data[left] <= this.data[right]) {
            let temp = this.data[left];
            this.data[left] = this.data[i];
            this.data[i] = temp;
            i = left;
        }
        else if(this.data[left] !== undefined && this.data[right] != undefined && this.data[right] < this.data[i] && this.data[right] <= this.data[left]) {
            let temp = this.data[right];
            this.data[right] = this.data[i];
            this.data[i] = temp;
            i = right;
        }
        else {
            return;
        }
    }
}

MinHeap.prototype.insert = function(value) {
    this.index++;

    this.data[this.index] = value;

    let i = this.index;
    
    while(i > 0) {
        let parentIndex = Math.floor(i / 2);
        if(this.data[parentIndex] != undefined && this.data[i] < this.data[parentIndex]) {
            let temp = this.data[i];
            this.data[i] = this.data[parentIndex];
            this.data[parentIndex] = temp;
        }
        else {
            return;
        }

        i = parentIndex;
    }
}

var obj = new KthLargest(2, [0]);
var param_1 = obj.add(-1);

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */