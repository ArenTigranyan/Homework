let number1 = +prompt('Input a number')
let number2 = +prompt('Input another number')
let divisibility1 = number1 % number2
let divisibility2 = number2 % number1
if(divisibility1 === 0) {
    console.log('1')
} else if(divisibility2 === 0) {
    console.log('1')
} else {
    console.log('0')
}