import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Bars from './components/Bars/Bars';
import Footer from './components/Footer/Footer';

import bubbleSort from './algorithms/BubbleSort';
import selectionSort from './algorithms/SelectionSort';
import insertionSort from './algorithms/InsertionSort';
import mergeSort from './algorithms/MergeSort';
import quickSort from './algorithms/QuickSort';

const getRandomArray = arraySize => {
  // ARRAY FROM 1 TO ARRAY SIZE
  const randomArray = Array.from(Array(arraySize)).map((e, i) => i + 1);
  // SHUFFLE
  for (let i = randomArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [randomArray[i], randomArray[j]] = [randomArray[j], randomArray[i]];
  }
  return randomArray;
};

const App = () => {
  const [algorithm, setAlgorithm] = useState('bubbleSort');
  const [arraySize, setArraySize] = useState(20);
  const [blocks, setBlocks] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(true);
  const [speed, setSpeed] = useState(500);
  const [compare, setCompare] = useState([]);
  const [swap, setSwap] = useState([]);
  const [sortedIndex, setSortedIndex] = useState([]);

  useEffect(() => {
    setIsCompleted(false);
    setIsSorting(false);
    setSortedIndex([]);
    setBlocks(getRandomArray(arraySize));
  }, [arraySize]);

  const handleRandomize = () => {
    setIsCompleted(false);
    setIsSorting(false);
    setSortedIndex([]);
    setBlocks(getRandomArray(arraySize));
  };

  const handleChange = e => {
    if (e.target.name === 'speed') return setSpeed((15 - e.target.value) * 100 + 100);
    if (e.target.name === 'arraySize') return setArraySize(Number(e.target.value));
    if (e.target.name === 'algorithm') return setAlgorithm(e.target.value);
  };

  const handleSort = () => {
    const showSteps = order => {
      (function loop(i) {
        setTimeout(() => {
          const [j, k, arr, index] = order[i];
          setCompare([j, k]);
          setSwap([]);

          if (index !== null) {
            setSortedIndex(previousState => [...previousState, index]);
          }

          if (arr) {
            setBlocks(arr);
            if (j !== null || k != null) setSwap([j, k]);
          }

          if (++i < order.length) {
            loop(i);
          } else {
            setIsSorting(false);
            setIsCompleted(true);
          }
        }, speed);
      })(0);
    };

    setIsSorting(true);
    if (algorithm === 'bubbleSort') return showSteps(bubbleSort(blocks));
    if (algorithm === 'selectionSort') return showSteps(selectionSort(blocks));
    if (algorithm === 'insertionSort') return showSteps(insertionSort(blocks));
    if (algorithm === 'mergeSort') return showSteps(mergeSort(blocks));
    if (algorithm === 'quickSort') return showSteps(quickSort(blocks));
    setIsSorting(false);
    setIsCompleted(true);
  };

  return (
    <React.Fragment>
      <Navbar
        getRandomArray={handleRandomize}
        handleChange={handleChange}
        handleSort={handleSort}
        isSorting={isSorting}
        isCompleted={isCompleted}
        arraySize={arraySize}
        speed={speed}
        algorithm={algorithm}
      />
      <Bars blocks={blocks} compare={isSorting && compare} swap={isSorting && swap} sorted={sortedIndex} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
