function selectionsort(array) {
    let animations = [];
    let helperArray = array.slice();
    helperSelectionSort(helperArray, animations);
    return animations;
}


const helperSelectionSort = (helperArray, animations) => {
    const length = helperArray.length;
    for (let i = 0; i < length; i++) {
        let idx = i;
        for (let j = i + 1; j < length; j++) {
            animations.push(["comparsion1", idx, j]);
            animations.push(["comparsion2", idx, j]);
            if (helperArray[j] < helperArray[idx]) {
                idx = j;
            }
        }

        animations.push(["swap", i, helperArray[idx]]);
        animations.push(["swap", idx, helperArray[i]]);
        swap(helperArray, i, idx);
    }
}



const swap = (helperArray, i, idx) => {
    let temp = helperArray[i];
    helperArray[i] = helperArray[idx];
    helperArray[idx] = temp;
}





// const selectionsort = (array, ANIMATION_SPEED_IN_MS) => {
//     let helperArray = array.map(item => item.val);
//     const arrayBars = document.getElementsByClassName('array-bar');

//     let count = 0;
//     for (let i = 0; i < helperArray.length; i++) {
//         let idx = i;
//         setTimeout(() => {
//             arrayBars[idx].style.backgroundColor = 'red';
//         }, i * ANIMATION_SPEED_IN_MS);
//         count++;

//         for(let j = i+1; j<helperArray.length; j++){
//             setTimeout(()=>{
//                 arrayBars[j].style.backgroundColor = 'thistle';
//             }, i*ANIMATION_SPEED_IN_MS);

//             let oldIdx;
//             if(helperArray[j] < helperArray[idx]){
//                 oldIdx = idx;
//                 idx = j;

//                 setTimeout(()=>{
//                     arrayBars[oldIdx].style.backgroundColor = 'thistle';
//                 }, (count+3)*ANIMATION_SPEED_IN_MS);
//             }

//             setTimeout(()=>{
//                 arrayBars[j].style.backgroundColor = "thistle";
//             }, i*(count+3)*ANIMATION_SPEED_IN_MS);
//             count++;
//         }

//         swap(helperArray, i, idx);
//         setTimeout(()=>{
//             let temp = arrayBars[i].style.height;
//             arrayBars[i].style.height = arrayBars[idx].style.height;
//             arrayBars[idx].style.height = temp;
//             arrayBars[i].style.backgroundColor = 'thistle';
//         }, i*ANIMATION_SPEED_IN_MS);
//         count++;
//     }
// }


// const swap = (helperArray, i, idx) => {
//     let temp = helperArray[i];
//     helperArray[i] = helperArray[idx];
//     helperArray[idx] = temp;
// }







export default selectionsort