// 1. Create a function that builds a tree like object given an array with object which
// contains parent and id properties.

const treeNodes = (arr) => {
    let result = {}
    for (let i of arr) {
        for (let j of arr) {
            if (i.id === j.parent) {
                result[i.id] = j.parent;
            }
        }
    }
    return result;
};

// 2. Write a JavaScript function to get all possible subsets of given length of the given
// array.
// Assume that all elements in the array are unique.

const subsets = (arr, num, el = arr[0]) => {
  let result = [];
  if (num === 1) {
    for (let i of arr) {
      result.push([i]);
    }
  }
  while (arr.length) {
    arr.shift();
    if (num > 1) {
      for (let i of arr) {
        result.push([el, i]);
      }
    }
    el = arr[0];
  }
  return result;
};


// 3. Write a recursive function to determine whether all digits of the number are odd or
// not.

const allOdd = (num, strnum = num + '') =>
  strnum[0] != num
    ? num % 2 === 1 && allOdd(Math.floor(num / 10)) % 2 === 1
    : num % 2 === 1;

// 4. Given an array of numbers. Write a recursive function to find its minimal positive element. (if
// such element does not exist, return -1)․

const minPositive = (
  arr,
  positives = arr.filter((el) => el > -1),
  index = positives.length - 1,
) => {
  if (index) {
    return Math.min(
      positives[index],
      minPositive(positives, undefined, --index),
    );
  }
  return positives[index];
};
