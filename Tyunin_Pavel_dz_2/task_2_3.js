/*Объявить две целочисленные переменные — a и b и задать им произвольные начальные
значения. Затем написать скрипт, который работает по следующему принципу:
o если a и b положительные, вывести их разность;
o если а и b отрицательные, вывести их произведение;
o если а и b разных знаков, вывести их сумму;
Ноль можно считать положительным числом.*/

let a = 3;
let b = 4;

if (a >= 0 && b >= 0){
  console.log(a - b);
} else if (a < 0 && b < 0){
  console.log(a * b);
} else {
  console.log(a + b);
}