/**
 * 641. Design Circular Deque
 * https://leetcode.com/problems/design-circular-deque/description/
 * @param {Number} size 
 */
var circularDeQueue = function(size) {
    this.size = size;
    this.data = new Array(this.size);
    this.front = -1;
    this.back = -1;
}

circularDeQueue.prototype.insertFront = function(value) {
    if(this.isFull())
        return false;
    
    if(this.isEmpty()) {
        this.front = 0;
        this.back = 0;
        this.data[this.front] = value;
        return true;
    }
    
    if(this.front == 0 && this.back != this.size -1) {
        this.front = this.size - 1;
        this.data[this.front] = value;
        return true;
    }

    this.front = (this.front - 1) % this.size;
    this.data[this.front] = value;
    return true;
}

circularDeQueue.prototype.deleteFront = function() {
    if(this.isEmpty())
        return false;
    
    if(this.front == this.back) {
        this.front = -1;
        this.back = -1;
        return true;
    }
    
    if(this.front == this.size - 1) {
        this.front = 0;
        return true;
    }

    this.front = (this.front + 1) % this.size;
    return true;
}

circularDeQueue.prototype.insertLast = function(value) {
    if(this.isFull())
        return false;
    
    if(this.isEmpty()) {
        this.front = 0;
        this.back = 0;
        this.data[this.back] = value;
        return true;
    }

    if(this.back == this.size - 1 && this.front != 0) {
        this.back = 0;
        this.data[this.back] = value;
        return true;
    }

    this.back = (this.back + 1) % this.size;
    this.data[this.back] = value;
    return true;
}

circularDeQueue.prototype.deleteLast = function() {
    if(this.isEmpty())
        return false;
    
    if(this.front == this.back) {
        this.front = -1;
        this.back = -1;
        return true;
    }    

    if(this.back == 0) {
        this.back = this.size - 1;
        return true;
    }

    this.back = (this.back - 1) % this.size;
    return true;
}

circularDeQueue.prototype.isEmpty = function() {
    if((this.front == -1 && this.back == -1))
        return true;
    
    return false;
}

circularDeQueue.prototype.isFull = function() {
    if((this.front == 0 && this.back == this.size - 1) || (this.front != 0 && this.back == (this.front - 1) % (this.size - 1)))
        return true;
    
    return false;
}

circularDeQueue.prototype.getFront = function() {
    if(this.isEmpty())
        return -1;
    
    return this.data[this.front];
}

circularDeQueue.prototype.getRear = function() {
    if(this.isEmpty())
        return -1;

    return this.data[this.back];
}

let dequeue = new circularDeQueue(3);
dequeue.insertLast(1);  // return True
dequeue.insertLast(2);  // return True
dequeue.insertFront(3); // return True
console.log(dequeue.insertFront(4)); // return False
console.log(dequeue.getRear());      // return 2
console.log(dequeue.isFull());       // return True
dequeue.deleteLast();   // return True
dequeue.insertFront(4); // return True
console.log(dequeue.getFront());     // return 4