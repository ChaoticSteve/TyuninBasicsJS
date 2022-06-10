/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 — значения аргументов, operation — строка с названием операции. В
зависимости от переданного значения выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (применить switch).
*/

function summ(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function division(a, b) {
  return a / b
}
function math_calc(a, b, opr=''){
  switch (opr){
    case '+':
      return summ(a, b);
      break;
    case '-':
      return subtract(a, b);
      break;
    case '*':
      return multiply(a, b);
      break;
    case '/':
      return division(a, b);
      break;
    default:
      return 'Неизвестная операция'
  }
}
let a = 6
let b = 3

console.log(math_calc(a, b, '+'))
console.log(math_calc(a, b, '-'))
console.log(math_calc(a, b, '*'))
console.log(math_calc(a, b, '/'))
console.log(math_calc(a, b))