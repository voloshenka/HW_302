'use strict';

// --------------------- Умовний оператор ------------------

// 1. If else -----------------

// if(умова) { блок виконаня} -------------
// else if(умова) { блок виконаня} 
// else { блок виконаня }


// let enterYourItAcademy = prompt('Enter your IT Academy');

// if (enterYourItAcademy === 'Beetroot' || enterYourItAcademy === 'beetroot' || enterYourItAcademy === 'BEETROOT') {
//     console.log(`Hello our student`);
// } else if (!enterYourItAcademy) {
//     console.log(`You nothing print`);
// } else {
//     console.log(`Go to Beetroot`);
// }

// 2. Оператор ? - тернарний оператор --------------

// умова ? дія_1 (true) : дія_2 (false) ;

// let userAge = +prompt('Enter your age?');

// userAge >= 18  ?  alert(`Ми ради вас бачити, насолоджуйтесь`) : alert(`Малиш, йди до мамки!`);

// 3. Switch Case ------------

let colorTrafficLight = prompt(`Enter color traffic light`);

switch(colorTrafficLight) {
    case 'red': alert(`Stop`);
    break
    case 'yellow': alert(`Ready to go, but Stop`);
    break
    case 'green': alert(`Go Home`);
    break
    default: alert(`Немає такого кольору, Лошара!`);
}



