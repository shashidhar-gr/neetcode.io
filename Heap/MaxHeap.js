var maxHeap = function(size) {
    this.size = size;
    this.index = 0;
    this.data = new Array(size);
}

maxHeap.prototype.insert = function(value) {
    this.index++;
    //Place in last position of array.
    this.data[this.index] = value;

    //Place in right postion of array.
    let parentPostion = Math.floor(this.index / 2);
    let childPosition = this.index;

    while(this.data.length && parentPostion >= 1) {
        if(this.data[childPosition] > this.data[parentPostion]) {
            let temp = this.data[parentPostion];
            this.data[parentPostion] = this.data[childPosition];
            this.data[childPosition] = temp;
            childPosition = parentPostion;
            parentPostion = Math.floor(parentPostion / 2);
        }
        else {
            return;
        }
    }
}

maxHeap.prototype.delete = function() {

    if(this.index == 0)
        return false;
    
    if(this.index == 1) {
        this.index--;
        return true;
    }

    //Swap root node with last element.
    this.data[1] = this.data[this.index];
    
    //Decrement the index.
    this.index--;

    let parentPostion = 1;

    while(parentPostion <= this.index) {
        let leftChild = parentPostion * 2, rightChild = parentPostion * 2 + 1;
        if(this.data[rightChild] > this.data[parentPostion] && this.data[rightChild] > this.data[leftChild]) {
            let temp = this.data[parentPostion];
            this.data[parentPostion] = this.data[rightChild];
            this.data[rightChild] = temp;
            parentPostion = rightChild;
        } else if(this.data[leftChild] > this.data[parentPostion] && this.data[leftChild] > this.data[rightChild]) {
            let temp = this.data[parentPostion];
            this.data[parentPostion] = this.data[leftChild];
            this.data[leftChild] = temp;
            parentPostion = leftChild;
        }
        else {
            return;
        }
    }
}

const arr = [400, 30, 20, 10];
const heap = new maxHeap(arr.length);
arr.forEach((value) => {
    heap.insert(value);
})

heap.delete();
