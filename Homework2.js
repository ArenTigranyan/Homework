// Excersise 1
let sumOfDigits;
let number = +prompt("Enter a number");
while (number) {
  sumOfDigits = sumOfDigits + (number % 10);
  number = Math.floor(number / 10);
}
console.log(sumOfDigits);

// Excersise 2
let number1 = +prompt("Enter a number");
let number2 = +prompt("Enter a number more than the last one");
let number3 = +prompt("Enter a number more than the last one");
if (number1 + number2 > number4) {
  console.log("yes");
} else {
  console.log("no");
}
// Excersise 3
let digitCount;
let number4 = +prompt("Enter a number");
while (number4) {
  number4 = Math.floor(number4 / 10);
  digitCount++;
}
console.log(digitCount);
// Excersise 4
let _9_in_number;
let number5 = +prompt("Enter a number");
while (number5) {
  if (number5 % 10 === 9) {
    _9_in_number++;
  }
}
console.log(_9_in_number);
// Excersise 5
let reverse = "";
let number6 = +prompt("Enter a number");
while (number6) {
  if (Math.floor(number6 / 10) != 0) {
    reverse = reverse + (number6 % 10);
  }
}
console.log(reverse);
