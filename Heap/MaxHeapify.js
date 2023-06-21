var maxHeapify = function(arr, size, index) {
    let largest = index;
    let leftChild = index * 2;
    let rightChild = index * 2 + 1;

    if(leftChild < size && arr[leftChild] > arr[largest]) {
        largest = leftChild;
    }
    if(rightChild < size && arr[rightChild] > arr[largest]) {
        largest =rightChild;
    }
    if(largest != index) {
        let temp = arr[largest];
        arr[largest] = arr[index];
        arr[index] = temp;
        maxHeapify(arr, size, largest);
    }
}

const arr = [-1, 54, 53, 55, 52, 50];

for(let i = Math.floor(arr.length / 2); i > 0; i--) {
    maxHeapify(arr, arr.length, i);
}

console.log(arr);