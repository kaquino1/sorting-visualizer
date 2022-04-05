const order = [];

const merge = (blocksCopy, left, mid, right) => {
  let i = left,
    j = mid + 1;

  const arr = [];

  while (i <= mid && j <= right) {
    // RECORD I & J AS BEING COMPARED
    order.push([i, j, null, null]);

    if (blocksCopy[i] <= blocksCopy[j]) {
      arr.push(blocksCopy[i++]);
    } else {
      arr.push(blocksCopy[j++]);
    }
  }

  while (i <= mid) {
    // RECORD I & MID AS BEING COMPARED
    order.push([i, mid, null, null]);
    arr.push(blocksCopy[i++]);
  }

  while (j <= right) {
    // RECORD J & RIGHT AS BEING COMPARED
    order.push([j, right, null, null]);

    arr.push(blocksCopy[j++]);
  }

  for (i = left; i <= right; i++) {
    blocksCopy[i] = arr[i - left];

    // I & I-LEFT WERE SWAPPED, RECORD UPDATED ARRAY
    order.push([i, i - left, blocksCopy.slice(), null]);
  }
};

const helper = (blocksCopy, left, right) => {
  if (left >= right) return;

  const mid = Math.floor((left + right) / 2);

  helper(blocksCopy, left, mid);
  helper(blocksCopy, mid + 1, right);

  merge(blocksCopy, left, mid, right);
};

const mergeSort = blocks => {
  const blocksCopy = blocks.slice();

  helper(blocksCopy, 0, blocksCopy.length - 1);

  for (let i = 0; i < blocksCopy.length; i++) {
    // RECORD I AS BEING SORTED
    order.push([null, null, null, i]);
  }

  return order;
};

export default mergeSort;
