import React from 'react';

import classes from './Navbar.module.css';

const Navbar = ({ getRandomArray, handleChange, handleSort, isSorting, isCompleted, arraySize, speed, algorithm }) => {
  return (
    <nav className={classes.nav}>
      <a href='https://kaquino1.github.io/sorting-visualizer' className={classes.link}>
        Sorting Algorithm Visualizer
      </a>

      <div className={classes.items}>
        <div className={classes.inputGroup}>
          <div className={classes.group}>
            <label>Speed</label>
            <input
              name='speed'
              type='range'
              min='1'
              max='15'
              onChange={handleChange}
              value={15 - (speed - 100) / 100}
              disabled={isSorting}
            />

            <output className={`${classes.bubble} ${isSorting ? classes.disabled : ''}`}>
              {15 - (speed - 100) / 100}
            </output>
          </div>

          <div className={classes.group}>
            <label>Array Size</label>
            <input
              name='arraySize'
              type='range'
              min='5'
              max='100'
              step='5'
              onChange={handleChange}
              value={arraySize}
              disabled={isSorting}
            />

            <output className={`${classes.bubble} ${isSorting ? classes.disabled : ''}`}>{arraySize}</output>
          </div>

          <div className={classes.group}>
            <label>Algorithm</label>
            <div className={`${classes.select} ${isSorting ? classes.disabled : ''}`}>
              <select
                name='algorithm'
                onChange={handleChange}
                value={algorithm}
                disabled={isSorting}
                className={classes.custom}
              >
                <option value='bubbleSort'>Bubble Sort</option>
                <option value='selectionSort'>Selection Sort</option>
                <option value='insertionSort'>Insertion Sort</option>
                <option value='mergeSort'>Merge Sort</option>
                <option value='quickSort'>Quick Sort</option>
              </select>
            </div>
          </div>
        </div>

        <div className={classes.buttonGroup}>
          <button onClick={getRandomArray} disabled={isSorting}>
            Randomize
          </button>
          <button onClick={handleSort} disabled={isSorting || isCompleted}>
            Sort
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
