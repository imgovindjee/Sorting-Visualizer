function countSort(array, animations) {
    const len = array.length;

    let count = [];
    const k = 1000; // although the max-height of bar might get till "530"
    for (let i = 0; i < k; i++) {
        count[i] = 0;
    }

    // counting the frequency of each number(.ie. bar-count of height) occurence
    for (let i = 0; i < len; i++) {
        count[array[i]]++;
    }

    let idx = 0;
    for (let i = 0; i < k; i++) {
        for (let j = 0; j < count[i]; j++) {
            animations.push(["comparision1", idx]);
            animations.push(["comparision2", idx]);
            animations.push(["overwrite", idx, i]);

            array[idx] = i;
            idx++;
        }
    }
}




// Drive Function
export function countsort(array) {
    let animations = [];
    let auxillaryArray = array.slice();
    countSort(auxillaryArray, animations);

    const jsSortedArray = array.slice().sort((a, b) => a - b);
    console.log("Sort Works Correctly:- ", arrayAreEqual(auxillaryArray, jsSortedArray));

    return animations;
}



// To check whether the arrays are equal or not 
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


// swap of two number
function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
swap([1,2,3], 0, 1);