/*
С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть
сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в
зависимости от находящихся в ней товаров.
Товары в корзине хранятся в массиве. Задачи:
a. Организовать такой массив для хранения товаров в корзине;
b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/
function countBasketPrice(basket, products){
  let total_price = 0
  for (let key of Object.keys(products)){
    if (basket.includes(key)){
      total_price += products[key];
    }
  }
  return total_price
}

let products = {
  'футболка' : 500,
  'шорты' : 150,
  'джинсы' : 200,
  'худи' : 300,
  'свитшот' : 350,
  'носки' : 600
};

let basket = ["носки", "худи", "шорты"];


console.log(countBasketPrice(basket, products))