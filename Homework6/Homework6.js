// 1. Get array of node ids from tree (keys).

const getIds = () => {

}

// 2. Get array of nodes from tree.

const getArray = () => { 

}

// 3. Implement binary search.

const binarySearch = (arr, el) => {
  arr = arr.sort((a, b) => a - b);
  let min = 0;
  let max = arr.length - 1;
  while (max >= min) {
    let middle = Math.floor((max + min) / 2);
    if (arr[middle] === el) return middle;
    else if (el > arr[middle]) min = middle + 1;
    else {
      max = middle - 1;
    }
  }
  return -1;
};


