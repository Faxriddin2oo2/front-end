// const yosh = 10;
// const a = yosh > 18; // false
// const b = yosh < 20; // true

// // AND operatori 
// console.log(a && b); // false

// // OR operatori
// console.log(a || b); // true

// // NOT operatori
// console.log(!a); // true
// console.log(!b); // false


const htmlPassed = false;
const cssPassed = true;
let message = '';

if (htmlPassed && cssPassed) {
    message = 'Siz Bootstrap kursini boshlashingiz mumkin!';
} else if (htmlPassed || cssPassed) {
    message = 'Iltimos ikkinchi kursni ham tugating';
} else {
    message= 'Iltimos birinchi ikkala kursni tugating';
}

console.log(message )