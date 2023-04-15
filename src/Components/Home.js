import React from "react";
import './bars.css'
import { SelectionSort } from './SelectionSort.js';
import { BubbleSort } from "./bubblesort";
import { QuickSort } from "./Quicksort";
import { InsertionSort } from "./Insertionsort";
import { HeapSort } from "./Heapsort";
import { MergeSort } from "./Mergesort";
import { GenerateBars } from "./GenerateBars.js";


export default class Generatebars extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 8,
      arr: [140, 268, 392, 140, 467, 191, 380, 274],
      sorted: false,
      sortedArr: null,
      selected: -1,
      cellCount: 6,
      selectedIndex: 0
    
    };
    this.handleSort = this.handleSort.bind(this);
    console.log("constructor");
  }
  async handleSort(sortType) {
    const delay = 10;
    let sortedArr;
    if (sortType === 'selection') {
      sortedArr = await SelectionSort(this.state.arr, delay, newState => this.setState(newState));
    } else if (sortType === 'bubble') {
      sortedArr = await BubbleSort(this.state.arr, delay, newState => this.setState(newState));
    } else if (sortType === 'quick') {
      sortedArr = await QuickSort(this.state.arr, delay, newState => this.setState(newState));
    } else if (sortType === 'insertion') {
      sortedArr = await InsertionSort(this.state.arr, delay, this.setState.bind(this));
    } else if (sortType === 'heap') {
      sortedArr = await HeapSort(this.state.arr, delay, this.setState.bind(this));
    } else if (sortType === 'merge') {
      sortedArr = await MergeSort(this.state.arr, delay, this.setState.bind(this));
    }
    this.setState({ arr: sortedArr, selected: -1 });
  }
  handleGenerate = () => {

    const newBars = GenerateBars(this.state.num);
    this.setState({ arr: newBars });
    console.log("GenerateBars");
    console.log(newBars);
  };

  //  carousel = document.querySelector('.carousel');
  
   rotateCarousel = () => {
    const { cellCount, selectedIndex } = this.state;
    const angle = (selectedIndex / cellCount) * -360;
    this.carousel.style.transform = `translateZ(-288px) rotateY(${angle}deg)`;
  };
  
  //  prevButton = document.querySelector('.previous-button');
  handlePreviousClick = () => {
    this.setState(
      (prevState) => ({
        selectedIndex: prevState.selectedIndex - 1
      }),
      this.rotateCarousel
    );
  };

  
  //  nextButton = document.querySelector('.next-button');
  handleNextClick = () => {
    this.setState(
      (prevState) => ({
        selectedIndex: prevState.selectedIndex + 1
      }),
      this.rotateCarousel
    );
  };

  componentDidMount() {
    this.carousel.style.transform = `translateZ(-288px) rotateY(0deg)`;
  }

  render() {
    console.log("render");
    return (
      <div>
      

       <div >
      
        <div className="box">
          <div className="bars">
            {this.state.arr.map((item, index) => (
              <div key={index} className="bar"
              style={{ height: item + "px", color: "white", backgroundColor: this.state.colorchange ? this.state.color : 'red' }}>
              </div>
            ))}


          </div>
        </div>
        <div>
            <input type="number" id="inp" placeholder="Enter the number of bars" 
                onChange={(e) => { this.setState({ num: e.target.value }) }} />
           <button id="btn" onClick={() => { this.handleGenerate() }}>Generate</button>
           </div>
           <div className="slider">
            <button  onClick={this.handlePreviousClick} id="PRV">
            &#9664;
            </button>
        <div className="scene">
        <div
          className="carousel"
          ref={(ref) => (this.carousel = ref)}
        >
          <div className="carousel__cell" onClick={()=>this.handleSort('selection')}>Selection Sort</div>
          <div className="carousel__cell" onClick={()=>this.handleSort('bubble')}>Bubble Sort</div>
          <div className="carousel__cell" onClick={()=>this.handleSort('merge')}>Merge Sort</div>
          <div className="carousel__cell" onClick={()=>this.handleSort('insertion')}>Insertion Sort</div>
          <div className="carousel__cell" onClick={()=>this.handleSort('quick')}>Quick Sort</div>
          <div className="carousel__cell" onClick={()=>this.handleSort('heap')}>Heap Sort</div>
        </div>
        
       
      </div>
            <button onClick={this.handleNextClick} id="NXT">&#9654;</button>
      </div>
      </div>
      {/* <SS></SS> */}
      </div>
    )
  }
}