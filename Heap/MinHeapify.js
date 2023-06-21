var minHeapify = function(arr, size, index) {
    let smallest = index;
    let leftChild = index * 2;
    let rightChild = index * 2 + 1;

    if(leftChild < size && arr[leftChild] < arr[smallest]) {
        smallest = leftChild;
    }
    if(rightChild < size && arr[rightChild] < arr[smallest]) {
        smallest =rightChild;
    }
    if(smallest != index) {
        let temp = arr[smallest];
        arr[smallest] = arr[index];
        arr[index] = temp;
        minHeapify(arr, size, smallest);
    }
}

const arr = [-1, 50, 60, 55, 45];

for(let i = Math.floor(arr.length / 2); i > 0; i--) {
    minHeapify(arr, arr.length, i);
}

console.log(arr);