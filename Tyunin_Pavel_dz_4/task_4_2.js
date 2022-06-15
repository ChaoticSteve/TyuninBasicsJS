/*
Продолжить работу с интернет-магазином:
a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими
объектами можно заменить их элементы?
b. Реализуйте такие объекты.
c. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

let products = {
  'футболка' : 500,
  'шорты' : 150,
  'джинсы' : 200,
  'худи' : 300,
  'свитшот' : 350,
  'носки' : 600,
  countBasketPrice: function(basket) {
    let total_price = 0;
      for (let key of Object.keys(this)) {
        if (basket.includes(key)){
          total_price += products[key];
      }
    }
    return total_price
  }
};

let basket = ["носки", "худи", "шорты"];

console.log(products.countBasketPrice(basket))