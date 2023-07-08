'use strict';

//--------------------Минимум--------------------------//
//------Задание 1------//
let yourAge = prompt('Добрый день. Укажите, пожалуйста, Ваш возраст');
let userAge = yourAge;
if (userAge <0){
  console.log(`Товарисч, ты ешо не родился!`);
  alert('Товарисч, ты ешо не родился!')
}else if(userAge >=0 && userAge <=11){
  console.log(`Привет, малыш!`);
  alert('Привет, малыш!')
}else if (userAge >=12 && userAge <= 17){
  console.log(`Привет, подросток!`);
  alert('Привет, подросток!')
} else if(userAge>=18 && userAge <= 59){
  console.log(`Здравствуйте, взрослый человек`);
  alert('Здравствуйте, взрослый человек');
}
else if(userAge>=60 && userAge<=99 ){
  console.log(`Здравствуйте, пожилой человек`);
  alert('Здравствуйте, пожилой человек');
}
else if (userAge>=100){
  console.log(`Здарова, чахлик-невмирущий!`);
  alert('Здарова, чахлик-невмирущий!');
}
else{
  console.log(`Столько лет не бывает. Ты чёт напортачил!`);
  alert('Столько лет не бывает. Ты чёт напортачил!');
}


//----------Задание 2--------//
let yourNumber = prompt('Введите число от 0 до 9');
let userNumber = yourNumber;

switch(userNumber){
  case '1': alert('!');
  break
  case '2': alert('@');
  break
  case '3': alert('#');
  break
  case '4': alert('$');
  break
  case '5': alert('%');
  break
  case '6': alert('^');
  break
  case '7': alert('&');
  break
  case '8': alert('*');
  break
  case '9': alert('(');
  break
  case '0': alert(')');
  break
  case '-': alert('_');
  break
  case '=': alert('+');
  break
  default: alert('Не выполнено условие. Ты чёт напортачил!')
}

//-----------Задание 3--------//
let first = +prompt('Введите число');
let second = +prompt('Введите число, которое больше первого');
let summ = 0;
while (first <= second) {

  summ += first;

  first++;

}

console.log(`Сумма чисел в заданном диапазоне:, summ`); 

//---------Задание 4------//
//---------Задание 5------//
//-------------------------НОРМА-----------------------//
//---------Задание 1------//
let chisloProiz = +promt('Введите число из 5 цифр')




//---------Задание 2------//
let summaPokupki = +prompt('Добрый день. Укажите, пожалуйста, сумму вашей покупки и мы сделаем Вам скидку.'   );
let summa = summaPokupki;
let procent1 = summa/100;
let itogo = 0;

if (summa>0 && summa<= 199.99){
  console.log(`К оплате: ${summa} грн`);
  alert(`К оплате: ${summa} грн`);
}
else if (summa >= 200 && summa<= 299.99){
  itogo = summa - (procent1*3)
  console.log(`К оплате: ${itogo} грн`);
  alert(`К оплате: ${itogo} грн`);
}
else if (summa >= 300 && summa<= 499.99){
  itogo = summa - (procent1*5);
  console.log(`К оплате: ${itogo} грн`);
  alert(`К оплате: ${itogo} грн`);
}
else if (summa >= 500){
  itogo = summa - (procent1*7);
  console.log(`К оплате: ${itogo} грн`);
  alert(`К оплате: ${itogo} грн`);
}
else {
  console.log(`Такой суммы не бывает. Ты чёт напортачил! `);
  alert('Такой суммы не бывает. Ты чёт напортачил! ');
}

//------------------Задание 3--------------------//
let chislo1 = +prompt('Введите число'  );
let chislo2 = +prompt('Введите число'  );
let chislo3 = +prompt('Введите число'  );
let chislo4 = +prompt('Введите число'  );
let chislo5 = +prompt('Введите число'  );
let chislo6 = +prompt('Введите число'  );
let chislo7 = +prompt('Введите число'  );
let chislo8 = +prompt('Введите число'  );
let chislo9 = +prompt('Введите число'  );
let chislo10 = +prompt('Введите число'  );
let chislo11 = +prompt('Введите число'  );
let chisla = [chislo1, chislo2, chislo3, chislo4, chislo5, chislo6, chislo7, chislo8,  chislo9, chislo10, chislo11 ];
console.log(chisla);
