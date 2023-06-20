var circularQueue = function(size) {
    this.size = size;
    this.data = new Array(this.size);
    this.front = -1;
    this.back = -1;
}

circularQueue.prototype.enqueue = function(value) {
    if(this.isFull()) {
        return false;
    }

    if(this.isEmpty()) {
        this.front++;
        this.back++;
        this.data[this.back] = value;
        return true;
    }

    this.back = (this.back + 1) % this.size;
    this.data[this.back] = value;
    return true;
}

circularQueue.prototype.dequeue = function() {
    if(this.isEmpty()) {
        return false;
    }

    if(this.front == this.back) {
        this.front = -1;
        this.back = -1;
        return true;
    }

    this.front = (this.front + 1) % this.size;
    return true;
}

circularQueue.prototype.isFull = function() {
    if((this.front == 0 && this.back == this.size - 1) || (this.back == this.front -1))
        return true;

    return false; 
}

circularQueue.prototype.isEmpty = function(element) {
    if(this.front == -1)
        return true;
    
    return false;
}

circularQueue.prototype.Front = function() {
    if(this.isEmpty())
        return -1;

    return this.data[this.front];
}

circularQueue.prototype.Rear = function() {
    if(this.isEmpty())
        return -1;

    return this.data[this.back];
}

