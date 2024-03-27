function heapsort(array) {
    let animations = [];
    let helperArray = array.slice();
    helperHeapSort(helperArray, animations);
    return animations; 
}

const helperHeapSort = (helperArray, animations) => {
    var len = helperArray.length; // heapSize

    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        heapify(helperArray, len, i, animations);
    }

    for (let i = len - 1; i > 0; i--) {
        animations.push(["swap", i, helperArray[0]]);
        animations.push(["swap", 0, helperArray[i]]);

        swap(helperArray, i, 0);

        heapify(helperArray, i, 0, animations);
    }
    animations.push(["comparsion1", 0, len-1]);
    animations.push(["comparsion2", 0, len-1]);
}


const heapify = (helperArray, len, idx, animations) => {
    let largest = idx;
    let left = Math.floor(2 * idx) + 1;
    let right = Math.floor(2 * idx) + 2;

    if (left < len && helperArray[left] > helperArray[largest]) {
        animations.push(["comparsion1", largest, left]);
        animations.push(["comparsion2", largest, left]);
        largest = left;
    }

    if (right < len && helperArray[right] > helperArray[largest]) {
        animations.push(["comparsion1", largest, right]);
        animations.push(["comparsion2", largest, right]);
        largest = right;
    }

    if (largest !== idx) {
        animations.push(["swap", largest, helperArray[idx]]);
        animations.push(["swap", idx, helperArray[largest]]);

        swap(helperArray, idx, largest);

        animations.push(["comparsion1", idx, largest]);
        animations.push(["comparsion2", idx, largest]);

        heapify(heapify, len, largest, animations);
    }
}

const swap = (helperArray, i, j) => {
    let temp = helperArray[i];
    helperArray[i] = helperArray[j];
    helperArray[j] = temp;
}


export default heapsort



// const heapsort = (array) => {
//     let animations = [];
//     const leftIdx = (i) => 2 * i + 1;
//     const rightIdx = (i) => 2 * i + 2;

//     const heapify = (array, i, heapSize) => {
//         const left = leftIdx(i);
//         const right = rightIdx(i);

//         // animations.push(["comparsion1", i, left]);

//         let largest = left < heapSize && array[left] > array[i] ? left : i;

//         // animations.push(["comparsion1", largest, right]);

//         if (right < heapSize && array[right] > array[largest]) {
//             largest = right;
//         }
//         if (largest !== i) {
//             animations.push(["swap", i, array[largest]]);
//             animations.push(["swap", largest, array[i]]);

//             swap(array, i, largest);

//             animations.push(["comparsion1", largest, heapSize]);
//             heapify(array, largest, heapSize);
//         }
//     };

//     const buildMaxHeap = (array) => {
//         const len = array.length;
//         for (let i = Math.floor(len / 2); i >= 0; i--) {
//             heapify(array, i, len);
//         }

//         animations.push(["comparsion1", 0, len]);
//     };

//     const swap = (helperArray, i, j) => {
//         let temp = helperArray[i];
//         helperArray[i] = helperArray[j];
//         helperArray[j] = temp;
//     };

//     const helperHeapSort = (array) => {
//         buildMaxHeap(array);

//         let heapSize = array.length;
//         for (let i = array.length - 1; i > 0; i--) {
//             animations.push(["swap", 0, array[i]]);
//             animations.push("swap", i, array[0]);

//             swap(array, 0, i);
//             heapSize--;

//             animations.push(["comparsion1", 0, heapSize]);

//             heapify(array, 0, heapSize);

//             // animations.push(["comparsion1", 0, heapSize]);
//         }

//         // animations.push(["comparsion1", 0, heapSize]);
//     };

//     helperHeapSort(array);
//     return animations;
// }

// export default heapsort