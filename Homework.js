// 1. Given an object. Invert it (keys become values and values become keys). If there is
// more than key for that given value create an string.

// 2. Given two objects. Write a function that performs shallow compare.

function shallowCompare(obj1, obj2) {
    let keys = Object.keys(obj1);
    for (let i = 0; i < keys.length; i++) {
        if (obj1[keys[i]] !== obj2[keys[i]]) {
            return false;
        }
    }
    return true;
}

// 3. Given an string. Determine whether it consists only from uniques or not.

function isUnique(string) {
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (i != j) {
                if (string[i] === string[j]) {
                    return false;
                }
            }
        }
    }
    return true;
}

// 4. Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern")
// is a word or phrase without a repeating letter.

function isIsogram(string) {
    string = string.trim();
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (i != j) {
                if (string[i] === string[j]) {
                    return false;
                }
            }
        }
    }
    return true;
}

// 5. Given an array of integers. All numbers are unique. Find the count of missing numbers
// between minimum and maximum elements to make integers sequence.

function missingNumbers(array) {
    let max = -Infinity;
    let min = Infinity;
    let i;
    // finding the max number
    for (i = 0; i < array.length; i++) {
        max = Math.max(max, array[i]);
    }
    // finding the min number
    for (i = 0; i < array.length; i++) {
        min = Math.min(min, array[i]);
    }
    return Math.ceil(max) - Math.floor(min) - 1;
}
