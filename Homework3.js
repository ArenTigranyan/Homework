// Excersise 1

function lenghtOfArray(array) {
  let lenghtCount = 0;
  while (array[lenghtCount] != undefined) {
    lenghtCount += 1;
  }
  return lenghtCount;
}

// Excersise 2

function sumOfNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// Excersise 3

function powersOf2(min, max) {
  let result = [];
  let powersOf2 = 2;
  while (min >= powersOf2) {
    powersOf2 *= 2;
  }
  while (powersOf2 <= max) {
    result.push(powersOf2);
    powersOf2 *= 2;
  }
  return result;
}

// Excersise 4 ?

function insertDashes(number) {
  let lastDigit = number % 10;
  let penaltimateDigit = Math.floor(number / 10) % 10;
  while (number) {
    if (lastDigit % 2 === 0 && penaltimateDigit % 2 === 0) {
      // ?
      number = Math.floor(number / 10);
    }
    lastDigit = number % 10;
    penaltimateDigit = Math.floor(number / 10) % 10;
  }
}

// Excersise 5

function isPrime(number) {
  if (number === 2 || number === 3) {
    return true;
  } else {
    return (number + 1) % 6 === 0 || (number - 1) % 6 === 0;
  }  
}

function primeNumbers(number) {
  let result;
  let primeCount = 0;
  for (let i = 2; primeCount <= number; i++) {
    if (isPrime(i)) {
      result = i;
      primeCount++;
    }
  }
  return result;
}
