const selectionSort = blocks => {
  const blocksCopy = blocks.slice();
  const order = [];

  let i, j;
  for (i = 0; i < blocksCopy.length; i++) {
    for (j = i + 1; j < blocksCopy.length; j++) {
      // RECORD i & J AS BEING COMPARED
      order.push([i, j, null, null]);

      if (blocksCopy[i] > blocksCopy[j]) {
        [blocksCopy[i], blocksCopy[j]] = [blocksCopy[j], blocksCopy[i]];

        // I & J WERE SWAPPED, RECORD UPDATED ARRAY
        order.push([i, j, blocksCopy.slice(), null]);
      }
    }
    // RECORD I AS BEING SORTED
    order.push([null, null, null, i]);
  }
  return order;
};

export default selectionSort;
