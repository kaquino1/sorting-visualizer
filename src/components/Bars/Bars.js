import React from 'react';

import classes from './Bars.module.css';

const Bars = ({ blocks, compare, sorted, swap }) => {
  return (
    <div className={classes.bars}>
      {blocks.map((block, i) => {
        const height = (block * 500) / blocks.length;
        let bg = '#333';

        // YELLOW
        if (compare && (i === compare[0] || i === compare[1])) {
          bg = '#FFEF00';
        }

        // RED
        if (swap && (i === swap[0] || i === swap[1])) {
          bg = '#CB4154';
        }
        // GREEN
        if (sorted && sorted.includes(i)) {
          bg = '#3EB489';
        }

        const style = {
          backgroundColor: bg,
          height: height
        };
        return <div key={i} className={classes.block} style={style}></div>;
      })}
    </div>
  );
};

export default Bars;
