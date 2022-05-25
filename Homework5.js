// 1. Create a function that builds a tree.



// 2. Write a JavaScript function to get all possible subsets of given length of the given
// array.
// Assume that all elements in the array are unique.

const getsubsets = (
  arr,
  count,
  previousSubsets = [],
  isTheFirstCycle = true,
) => {
  if (isTheFirstCycle) {
    for (let i of arr) {
      previousSubsets.push([i]);
    }
    count--;
  }
  let result = [];
  if (count) {
    for (let i of previousSubsets) {
      for (let j of arr) {
        result.push([...i, j]);
      }
    }
    return getsubsets(arr, --count, result, (isTheFirstCycle = false));
  }
  for (let i of previousSubsets) {
    i.sort((a, b) => a - b);
  }
  for (let i in previousSubsets) {
    for (let j in previousSubsets) {
      if (
        i != j &&
        previousSubsets[i].toString() === previousSubsets[j].toString()
      ) {
        previousSubsets.splice(j, 1);
      }
    }
  }
  return previousSubsets.filter((el, index) => {
    for (let i in el) {
      for (let j in el) {
        if (el[i] === el[j] && i != j) {
          return false;
        }
      }
    }
    return true;
  });
};

// 3. Create a decorator delay(f, ms) that delays each call of ‘f’ by ‘ms’ milliseconds.

const delay = (fn, ms) => {
  return function () {
    setTimeout(() => fn.call(this, ...arguments), ms);
  };
};

// 4. Implement Debounce decorator

