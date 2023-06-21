var maxHeapify = function(arr, size, index) {
    let largest = index;
    let leftChild = index * 2;
    let rightChild = index * 2 + 1;

    if(leftChild < size && arr[leftChild] > arr[largest]) {
        largest = leftChild;
    }
    if(rightChild < size && arr[rightChild] > arr[largest]) {
        largest = rightChild;
    }
    if(largest != index) {
        let temp = arr[largest];
        arr[largest] = arr[index];
        arr[index] = temp;
        maxHeapify(arr, size, largest);
    }
}

var heapSort = function(arr) {
    let i = 1;
    while(i < arr.length) {
        let temp = arr[arr.length - i];
        arr[arr.length - i] = arr[1];
        arr[1] = temp;
        maxHeapify(arr, arr.length - i, 1);
        i++;
    }
}

const arr = [-1, 70, 60, 55, 45, 50];
heapSort(arr);
console.log(arr);