/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let maxHeap = new MaxHeap(points.length);
    let i = 0;
    while(i < k) {
        let x = points[i][0];
        let y =points[i][1];
        let node = new Node(x, y, getDistanceFromOrigin(x, y));
        maxHeap.insert(node);
        i++;
    }

    for(let j = i; j < points.length; j++) {
        let peekNode = maxHeap.peek();
        let node = new Node(points[j][0], points[j][1], getDistanceFromOrigin(points[j][0], points[j][1]));
        if( peekNode["distanceFromOrigin"] > node["distanceFromOrigin"]) {
            maxHeap.delete();
            maxHeap.insert(node);
        }
    }

    let res = [];
    i = 1;
    while( i <= maxHeap.size()) {
        let node = maxHeap.atIndex(i);
        res.push([node["x"], node["y"]]);
        i++;
    }

    return res;
};

class Node {
    constructor(x, y, distanceFromOrigin) {
        this.x = x;
        this.y = y;
        this.distanceFromOrigin = distanceFromOrigin;
    }
}

var MaxHeap = function(size) {
    this.data = new Array(size);
    this.index = 0;
}

MaxHeap.prototype.size = function() {
    return this.index;
}

MaxHeap.prototype.atIndex = function(i) {
    if(i > this.index || i < 1) 
        return null;

    return this.data[i];
}

MaxHeap.prototype.peek = function() {
    if(this.data.length <= 1)
        return null;

    return this.data[1];
}

MaxHeap.prototype.insert = function(value) {
    
    //Insert value to last postion.
    this.index++;
    this.data[this.index] = value;

    //Placing value to right position.
    let i = this.index;
    while(i > 0) {
        let parentPosition = Math.floor(i / 2);
        if(this.data[parentPosition] != undefined && this.data[i]["distanceFromOrigin"] > this.data[parentPosition]["distanceFromOrigin"]) {
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

MaxHeap.prototype.delete = function() {
    
    //Remove root node.
    this.data[1] = this.data[this.index];
    this.index--;
    this.heapify(1);
    return;
}

MaxHeap.prototype.heapify = function(index) {
    let i = index;
    while(i < this.index) {
        let left = i * 2;
        let right = i * 2 + 1;

        if(this.data[left] != undefined && this.data[right] != undefined 
            && this.data[left]["distanceFromOrigin"] > this.data[i]["distanceFromOrigin"]
            && this.data[left]["distanceFromOrigin"] >= this.data[right]["distanceFromOrigin"]) {
                let temp = this.data[i];
                this.data[i] = this.data[left];
                this.data[left] = temp;
                i = left;
        }
        else if(this.data[right] != undefined && this.data[left] != undefined
            && this.data[right]["distanceFromOrigin"] > this.data[i]["distanceFromOrigin"]
            && this.data[right]["distanceFromOrigin"] >= this.data[left]["distanceFromOrigin"]) {
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

var getDistanceFromOrigin = function(x, y) {
    return Number(Math.sqrt((x * x) + (y * y)).toFixed(2));
}

const points = [[1,3],[-2,2]], k = 1;
const res = kClosest(points, k);
console.log(res);