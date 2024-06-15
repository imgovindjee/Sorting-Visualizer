// Function to merge the array
function merge(array, start, mid, end, auxillary_Array, animations) {
    // Starting of array l_arr where element are from (start to mid) 
    let i = start;
    // starting of the array r_arr where element are from (mid+1 to end)
    let j = mid + 1;
    // As the previous all the element are sorted  
    let idx = start;
    while (i <= mid && j <= end) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([i, j]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([i, j]);
        if (auxillary_Array[i] < auxillary_Array[j]) {
            // We overwrite the value at index k in the original array with the
            // value at index i in the auxiliary array.
            animations.push([idx, auxillary_Array[i]]);
            array[idx++] = auxillary_Array[i++];
        } else {
            // We overwrite the value at index k in the original array with the
            // value at index j in the auxiliary array.
            animations.push([idx, auxillary_Array[j]]);
            array[idx++] = auxillary_Array[j++];
        }
    }


    // if any element is left inside the l_arr
    while (i <= mid) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([i, i]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([i, i]);
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([idx, auxillary_Array[i]]);
        array[idx++] = auxillary_Array[i++];
    }


    // if any element id left inside the r_arr
    while (j <= end) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([j, j]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([j, j]);
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([idx, auxillary_Array[j]]);
        array[idx++] = auxillary_Array[j++];
    }
}




function mergeSortHelper(array, start, end, auxillary_Array, animations) {
    // Base Case
    if (start === end) return;

    const mid = Math.floor((end + start) / 2);
    mergeSortHelper(auxillary_Array, start, mid, array, animations);
    mergeSortHelper(auxillary_Array, mid + 1, end, array, animations);
    merge(array, start, mid, end, auxillary_Array, animations);

}


function mergesort(array) {
    // Algorithm Testing
    // const jsSortedArray = array.slice().sort((a, b) => a - b);
    // console.log("Sort Works correctly:-", arrayAreEqual(array, jsSortedArray));


    // Base Case
    if (array.length <= 1) {
        return array;
    }

    const animations = [];
    const auxillary_Array = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxillary_Array, animations);

    // Some Final Test-Run
    const jsSortedArray = array.slice().sort((a, b) => a - b);
    console.log("Sort Works correctly:-", arrayAreEqual(array, jsSortedArray));

    return animations;
}


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





// const mergesort = array =>{
//     if(array.length === 1) return array;

//     const mid = Math.floor(array.length/2);
//     const first_half = mergesort(array.slice(0, mid));
//     const second_half = mergesort(array.slice(mid));

//     const sortedArray = [];
//     let i=0, j=0;
//     while(i<first_half.length && j<second_half.length){
//         if(first_half[i] < second_half[j]){
//             sortedArray.push(first_half[i++]);
//         } else{
//             sortedArray.push(second_half[j++]);
//         }
//     }

//     while(i<first_half.length) {
//         sortedArray.push(first_half[i++]);
//     }
//     while(j<second_half.length){
//         sortedArray.push(second_half[j++]);
//     }

//     return sortedArray;
// }


export default mergesort