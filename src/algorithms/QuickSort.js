const order = [];

const partition = (blocksCopy, left, right) => {
  const pivot = left;
  let j = left;

  for (let i = left + 1; i <= right; i++) {
    // RECORD I & PIVOT AS BEING COMPARED
    order.push([i, pivot, null, null]);
    if (blocksCopy[i] < blocksCopy[pivot]) {
      j += 1;

      [blocksCopy[i], blocksCopy[j]] = [blocksCopy[j], blocksCopy[i]];

      // I & J WERE SWAPPED, RECORD UPDATED ARRAY
      order.push([i, j, blocksCopy.slice(), null]);
    }
  }

  [blocksCopy[pivot], blocksCopy[j]] = [blocksCopy[j], blocksCopy[pivot]];

  // PIVOT & J WERE SWAPPED, RECORD UPDATED ARRAY
  order.push([pivot, j, blocksCopy.slice(), null]);

  // RECORD J AS BEING SORTED
  order.push([null, null, null, j]);
  return j;
};

const helper = (blocksCopy, left, right) => {
  if (left >= right) {
    // RECORD LEFT AS BEING SORTED
    if (left === right) order.push([null, null, null, left]);
    return;
  }

  const mid = partition(blocksCopy, left, right);

  helper(blocksCopy, left, mid - 1);
  helper(blocksCopy, mid + 1, right);

  return;
};

const quickSort = blocks => {
  const blocksCopy = blocks.slice();
  helper(blocksCopy, 0, blocksCopy.length - 1);
  return order;
};

export default quickSort;
