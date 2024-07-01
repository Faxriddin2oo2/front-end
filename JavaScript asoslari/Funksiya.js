'use strict';
// function meningFunksiyam(son1, son2){
//     return son1 + son2;
// }

// console.log(meningFunksiyam(10, 20));
// const result = meningFunksiyam(30, 40);
// console.log(result + 20);

// Function declaration
// console.log(kvadrat(2));

//  function  kvadrat(son){
//     return son*son;
//  }

//  console.log(kvadrat(10))


// Function expression
// kvadrat(2);

// const kvadrat = function(son) {
//     return son*son;
// }

// console.log(kvadrat(10));


// Arrow function
// 1
const kvadrat = (son) => {
    return son*son;
}
console.log(kvadrat(12));

// 2
// const kvadrat = son => son*son;
// console.log(kvadrat(11));

// 3
const print = () => console.log("Printing...");
print();

// 4
const volume = (a, b, c) => a * b * c;
console.log(volume(1, 2, 3));