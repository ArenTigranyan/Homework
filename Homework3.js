// 1. Given an array. Write a recursive function that removes the first element and returns the given
// array. (without using arr.unshift(),assign second element to first, third element to second...)

const removingTheFirstElement = (array, index = 1) =>
  index < array.length - 1
    ? [array[index]].concat(removingTheFirstElement(array, ++index))
    : array[index];

// 2. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function
// that concats arrays).

const flattening = (array, index = 0) =>
  index < array.length
    ? Array.isArray(array[index])
      ? flattening(array[index])
      : [array[index]].concat(flattening(array, ++index))
    : array[index];

// 3. Given an array and a number N.  Write a recursive function that rotates an array N places to the
// left. (Hint: to add element to the beginning use arr.unshift())

const rotating = (array, num) => {
  if (num) {
    array.push(array[0]);
    array.shift();
    return rotating(array, --num);
  }
  return array;
};

// 4. Given the list of the following readers:

function books(arr) {
  let result = [];
  arr.sort((a, b) => b.percent - a.percent);
  for (let i in arr) {
    if (arr[i].readStatus) {
      result.push(arr[i].book);
    }
  }
  return result;
}

// 5. Implement “map” method for plain objects (same as Array map method.)


