/*
С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/

function check(num, flag){
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      flag = false;
      break;
    }
    flag = true
  }
  return flag
}

let num = 0;
let flag = true;

while (num <= 100) {
  if (check(num, flag)){
    console.log(num)
  }
  ++num;
}