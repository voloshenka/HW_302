'use strict';


// 1. While(умова) --------------

let i = 0;  // Стартове значення

// while(i > 10) {  // умова перевірки
//     console.log(i);  // тіло циклу
//     i++;  //крок
// }

// 2. Do While ---------------

// do {
//     console.log(i);
//     i += 2;
// } while(i <= 10) 

// 3. For ---------------- 

// for(start; condition; step) {block loop}

// let iter = 5;

// for(let iter = 0; iter < 10; iter++) {
//     console.log(iter);
// }

// console.log(iter);

// ---------------- break continue------

let a = 0;

while(a <= 10) {
    a++;
    if(a % 2 !== 0) {
        continue
    }
    console.log(a);
}