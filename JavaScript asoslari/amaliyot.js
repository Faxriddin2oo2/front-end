'use strict';
// // Ko`rsatilgan chegaradagi raqamni toping
// const inRange = (min, max, number) => {
//     if (number >= min && number <= max){
//         console.log(`Berilgan ${number} soni  ${min} va ${max} orasida`);
//     } else {
//         console.log(`Berilgan son ${min} va ${max} orasida emas`);
//     }
// }

// const minRange = 10;
// const maxRange = 30;
// const givenNumber = 20;

// inRange(minRange, maxRange, givenNumber);


// // Berilgan ikki son ustida arifmetik amal bajarish
// const simpleCalculator = (num1, num2, oper) => {
//     switch(oper) {
//         case "add" :
//             console.log(`Yig'indisi: ${num1 + num2}`);
//             break;
//         case "subtract":
//             console.log(`Ayirmasi: ${num1 - num2}`);
//             break;
//         case "multiply":
//             console.log(`Ko'paytmasi: ${num1 * num2}`);
//             break;
//         case "divide":
//             console.log(`Bo'linmasi: ${num1 / num2}`);
//             break;
//         default:
//             console.log('Aniqlanmagan amal');
//     }
// }

// const a = 20;
// const b = 5;
// const opertion = "multiply";
// simpleCalculator(a, b, opertion);


// Berilgan massivdagi eng katta qiymatga ega element
const getLargestElement = (array) => {
    let largest = array[0];
    for (let i = 1; i < array.length; i++){
        if (array[i] > largest){
            largest = array[i];
        }
    }
    return largest;
}

const nums = [4, 23, 11, 54, 555, 223, 14, 22, 554, 126];
const result = getLargestElement(nums);
console.log(`Eng katta element: ${result}`);