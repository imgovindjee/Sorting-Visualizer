function getMaximum(array, len) {
    let max = array[0];
    for (let i = 1; i < len; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}


function countSort(array, len, exp, animations) {
    let output = new Array(len);

    let count = new Array(10); // store the count of digits
    for (let i = 0; i < 10; i++) {
        count[i] = 0;
    }

    // from the array(given)
    for (let i = 0; i < len; i++) {
        animations.push(["comparision1", i]);
        animations.push(["comparision2", i]);

        count[Math.floor(array[i] / exp) % 10]++;
    }

    // prefix Sum
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (let i = len - 1; i >= 0; i--) {
        animations.push(["comparision1", i]);
        animations.push(["comparision2", i]);
        animations.push(["overwrite", count[Math.floor(array[i] / exp) % 10] - 1, array[i]]);

        output[count[Math.floor(array[i] / exp) % 10] - 1] = array[i];
        count[Math.floor(array[i] / exp) % 10]--;
    }

    for (let i = 0; i < len; i++) {
        array[i] = output[i];
    }
}


function radixSort(array, animations) {
    let len = array.length;
    let max = getMaximum(array, len);
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countSort(array, len, exp, animations);
    }
}




// Drive Function
export function radixsort(array) {
    let animations = [];
    let auxillaryArray = array.slice();
    radixSort(auxillaryArray, animations);
    
    const jsSortedArray = array.slice().sort((a, b) => a - b);
    console.log("Sort Works correctly:-", arrayAreEqual(auxillaryArray, jsSortedArray));
    
    // return [animations, array]
    return animations;
}


// TO check whether the arrays are equal or not 
function arrayAreEqual(rsArray, jsArray) {
    if (rsArray.length !== jsArray.length) {
        return false;
    }
    
    for (let i = 0; i < rsArray.length; i++) {
        if (rsArray[i] !== jsArray[i]) {
            return false;
        }
    }
    return true;
}

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
swap([1,2,3], 0, 1);
