// // 1. Given an array of numbers which is almost sorted in ascending order.  Find the index
// // where sorting order is violated.

function sortingOrder(array) {
    for (let i in array) {
        if (array[+i] > array[+i + 1]) {
            return +i + 1;
        }
    }
}

// // 2. Given an array consisting from the arrays of numbers (like a two-dimensional array).
// // Find sum of each row and print them as an array

function sumOfEachRow(array) {
    let result = [];
    for (let i in array) {
        let sum = 0;
        for (let j in array[i]) {
            sum += array[i][j];
        }
        result.push(sum);
    }
    return result;
}

// 3. Given an array of integers. Write a function that return new array from first array,
// where removed even numbers, and odd numbers was multiplied with new array length

function newArray(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1) {
            result.push(array[i]);
        }
    }
    for (let j = 0; j < result.length; j++) {
        result[j] *= result.length;
    }
    return result;
}

// 4. Given a number. Write a function that calculates its sum of the digits and if that sum
// has more than 1 digit find the sum of digits of that number. Repeat that process if needed and
// return the result.

function sumOfDigits(num) {
    num += '';
    let sum = 0;
    while (num.length > 1) {
        for (let i = 0; i < num.length; i++) {
            sum += +num[i];
        }
        num = sum + '';
        sum = 0;
    }
    return +num;
}

// 5. Write a recursive function which receives  a number as arguments and returns the
// fibonacci sequence as array.

const fibonacciSequence = (num1, num2, index) => index ? [num1].concat(fibonacciSequence(num2, num1 + num2, --index)) : num1;
