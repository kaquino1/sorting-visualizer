const bubbleSort = blocks => {
  const blocksCopy = blocks.slice();
  const order = [];

  let i, j;
  for (i = 0; i < blocksCopy.length; i++) {
    for (j = 0; j < blocksCopy.length - i - 1; j++) {
      // RECORD J & J+1 AS BEING COMPARED
      order.push([j, j + 1, null, null]);

      if (blocksCopy[j] > blocksCopy[j + 1]) {
        [blocksCopy[j], blocksCopy[j + 1]] = [blocksCopy[j + 1], blocksCopy[j]];

        // J & J+1 WERE SWAPPED, RECORD UPDATED ARRAY
        order.push([j, j + 1, blocksCopy.slice(), null]);
      }
    }
    // RECORD J AS BEING SORTED
    order.push([null, null, null, j]);
  }

  return order;
};

export default bubbleSort;
