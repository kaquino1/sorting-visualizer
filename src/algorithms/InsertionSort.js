const insertionSort = blocks => {
  const blocksCopy = blocks.slice();
  const order = [];

  let i, j;

  for (i = 0; i < blocksCopy.length; i++) {
    j = i - 1;
    while (j >= 0 && blocksCopy[j] > blocksCopy[j + 1]) {
      [blocksCopy[j], blocksCopy[j + 1]] = [blocksCopy[j + 1], blocksCopy[j]];
      // RECORD J & J+1 AS BEING COMPARED
      order.push([j, j + 1, null, null]);

      // J & J+1 WERE SWAPPED, RECORD UPDATED ARRAY
      order.push([j, j + 1, blocksCopy.slice(), null]);
      j -= 1;
    }
  }

  for (i = 0; i < blocksCopy.length; i++) {
    // RECORD i AS BEING SORTED
    order.push([null, null, null, i]);
  }

  return order;
};

export default insertionSort;
