'use strict';
// // Sonning juft yoki toqligini aniqlash
// // Function declaration
// function evenOrOddDec(number) {
//     if (number % 2 === 0) {
//         console.log(`${number} is even`);
//     } else {
//         console.log(`${number} is odd`);
//     }
// }
// evenOrOddDec(3);

// // Funtion expression
// const evenOrOddExp = function(number) {
//     if (number % 2 === 0) {
//         console.log(`${number} is even`);
//     } else {
//         console.log(`${number} is odd`);
//     }
// }
// evenOrOddExp(2);

// // Arrow function
// const evenOrOddArrow = number => {
//     if (number % 2 === 0) {
//         console.log(`${number} is even`);
//     } else {
//         console.log(`${number} is odd`);
//     }
// }
// evenOrOddArrow(54);

// Berilgan ikki sondan kattasini aniqlash
// Function declaration
// function maxDec(number1, number2) {
//     if (number1 >= number2){
//         return number1;
//     }
//     return number2;
// }
// console.log(maxDec(2,1));


// // Function expression 
// const maxExp = function(number1, number2){
//     if (number1 >= number2){
//         return number1;
//     }
//     return number2;
// }

// // Arrow function
// const maxArrow = (number, number2) => {
//     if (number1 >= number2){
//         return number1;
//     }
//     return number2;
// }


// Berilgan sonni teskarisiga o'girish
// Function declaration
function reverseDec(number){
    const numberStr = String(number);
    const reversedStr = numberStr.split('').reverse().join('');
    return Number(reversedStr)
} 
console.log(reverseDec(2321))


// Function expression 
const reverseExp = function(number) {
    const numberStr = String(number);
    const reversedStr = numberStr.split('').reverse().join('');
    return Number(reversedStr)
}

// Arrow function
const reverseArrow = number => {
    const numberStr = String(number);
    const reversedStr = numberStr.split('').reverse().join('');
    return Number(reversedStr)
}