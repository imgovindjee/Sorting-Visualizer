import React from 'react'
import './SortingVisualizer.css' // CUSTOM CSS import
import mergesort from '../Sorting Algorithm/MergeSort';
import insertionsort from '../Sorting Algorithm/InsertionSort';
import quicksort from '../Sorting Algorithm/QuickSort';
import bubblesort from '../Sorting Algorithm/BubbleSort';
import selectionsort from '../Sorting Algorithm/SelectionSort';
import heapsort from '../Sorting Algorithm/HeapSort';


// User Screen Height and Width
const screenWidth = window.innerWidth;
// const screenHeight = window.innerHeight;


// This is the value which is used in display of number of bars
// let numberOfBars = 210; // Used as the Default Value
let numberOfBars = screenWidth / 4 - 20;

// This is the value which is used in the width of each bars
let barWidth = 2;

// Change this value for the speed of the animations.
let ANIMATION_SPEED_MS = 10;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'thistle';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';




export class SortingVisualize extends React.Component {
  // Default constructor
  constructor() {
    super()
    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  // function
  resetArray() {
    const array = [];
    for (let i = 0; i < numberOfBars; i++) {
      array.push(randomIntFromInterval(5, 530)); //function call to random number generation
    }
    this.setState({ array });
  }

  // Taking input from user
  handleUserValue() {
    let barCount = document.getElementById("bar-count").value;
    numberOfBars = (Number(barCount)) !== 0 ? Number(barCount) : numberOfBars;

    let userBarWidth = document.getElementById("bar-width").value;
    barWidth = userBarWidth !== 0 ? userBarWidth : barWidth;

    let Animationspeed = document.getElementById("speed").value;
    ANIMATION_SPEED_MS = Animationspeed !== 0 ? Animationspeed : ANIMATION_SPEED_MS;
    // console.log("Click");
    this.resetArray();
  }


  // Sorting Algorithm Import...
  mergeSort() {
    const animations = mergesort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }




  insertionSort() {
    // Handles displaying insertion sort animations
    const animations = insertionsort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = animations[i][0] === "comparison1" || animations[i][0] === "comparison2";
      const arrayBars = document.getElementsByClassName("array-bar");
      if (isColorChange) {
        const color = animations[i][0] === "comparison1" ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [, barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [, barIndex, newHeight] = animations[i];
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }




  quickSort() {
    const animations = quicksort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChanged = animations[i][0] === "comparision1" || animations[i][0] === "comparision2";
      const arrayBars = document.getElementsByClassName("array-bar");

      if (isColorChanged) {
        const color = animations[i][0] === "comparision1" ? SECONDARY_COLOR : PRIMARY_COLOR;

        const [, barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [, barOneIdx, newHeight] = animations[i];
        if (barOneIdx === -1) {
          continue;
        }
        const barOneStyle = arrayBars[barOneIdx].style;
        setTimeout(() => {
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }



  bubbleSort() {
    const animations = bubblesort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChanged = animations[i][0] === "comparision1" || animations[i][0] === "comparision2";
      const arrayBars = document.getElementsByClassName("array-bar");
      if (isColorChanged) {
        const color = animations[i][0] === "comparision1" ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [, barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [, barOneIdx, newHeight] = animations[i];
        if (barOneIdx === -1) {
          continue;
        }
        const barOneStyle = arrayBars[barOneIdx].style;
        setTimeout(() => {
          barOneStyle.height = `${newHeight}px`
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }



  selectionSort() {
    const animations = selectionsort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChanged = animations[i][0] === "comparsion1" || animations[i][0] === "comparsion2";
      const arrayBars = document.getElementsByClassName("array-bar");
      if (isColorChanged) {
        const color = animations[i][0] === "comparsion1" ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [, barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [, barOneIdx, newHeight] = animations[i];
        if (barOneIdx === -1) {
          continue;
        }
        const barOneStyle = arrayBars[barOneIdx].style;
        setTimeout(() => {
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }


  
  heapSort() {
    const animations = heapsort(this.state.array);
    for(let i=0; i<animations.length; i++){
      const isColorChanged = animations[i][0] === "comparsion1" || animations[i][0] === "comparsion2";
      const arrayBars = document.getElementsByClassName('array-bar');
      if(isColorChanged) {
        const color = animations[i][0] === "comparsion1" ? SECONDARY_COLOR:PRIMARY_COLOR;
        const[, barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(()=>{
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const[, barOneIdx, newHeight] = animations[i];
        if(barOneIdx === -1){
          continue;
        }
        const barOneStyle = arrayBars[barOneIdx].style;
        setTimeout(()=>{
          barOneStyle.height = `${newHeight}px`;
        }, i*ANIMATION_SPEED_MS);
      }
    }
  }


  // TESTING ALL THE SORTING ALGORITHM
  // NOTE: This method will only work if your sorting algorithms actually return
  // the sorted arrays; if they return the animations (as they currently do), then
  // this method will be broken.
  testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }

      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);

      // MergeSort Testing
      const mergeSortArray = mergesort(array.slice());
      // const heapSortedArray = heapsort(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortArray));
    }
  }










  // MAIN NODY RENDER FUNCTION
  render() {
    const { array } = this.state;

    return (
      <div className='container'>

        <div className='user-input'>
          <input type="text" className='bar-count' id='bar-count' placeholder='Enter number of Bar Count' />
          <input type="number" id="bar-width" className='bar-width' placeholder='Enter the Width of Bar' />
          <input type="number" id="speed" className='speed' placeholder='Animation Speed (in MS)' />
          <button className='submit' onClick={() => this.handleUserValue()}>Submit</button>
        </div>

        <div className='array-container'>
          {/*  BARS FOR SORTING.... */}
          {array.map((value, idx) => (
            <div
              className='array-bar'
              key={idx}
              style={{ height: `${value}px`, width: `${barWidth}px` }}>{/* value */}</div>
          ))
          }
        </div>


        {/* Buttons */}
        <div className='buttons'>
          <button onClick={() => this.resetArray()}>Generate New Array</button>
          <button onClick={() => this.quickSort()}>Quick Sort</button>
          <button onClick={() => this.mergeSort()}>Merge Sort</button>
          <button onClick={() => this.heapSort()}>Heap Sort</button>
          <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
          <button onClick={() => this.insertionSort()}>Insertion Sort</button>
          <button onClick={() => this.selectionSort()}>Selection Sort</button>
          <button onClick={() => this.testSortingAlgorithms()}>Test Algorithms</button>
        </div>

      </div>
    );

  }
}







// function to generate the random number
export function randomIntFromInterval(start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}


// Checker Function
function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

export default SortingVisualize
