/*
Написать функцию, преобразующую число в объект.
Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
Если число превышает 999, необходимо выдать соответствующее
сообщение с помощью console.log и вернуть пустой объект.

*/
function setNumtoText(num){
  num = String(num);
  let dict = {};
  if (num > 999) {
    dict = {}
  }
  else {
    if (num.length === 3){
      dict.единицы = Number(num[2])
      dict.десятки = Number(num[1])
      dict.сотни = Number(num[0])
    } else if (num.length === 2) {
      dict.единицы = Number(num[1])
      dict.десятки = Number(num[0])
      dict.сотни = 0
    } else {
      dict.единицы = Number(num[0])
      dict.десятки = 0
      dict.сотни = 0
    }
  }
  return dict
}

let num = 3;
console.log(setNumtoText(num))