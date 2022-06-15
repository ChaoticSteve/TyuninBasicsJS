/*
Подумать над глобальными сущностями.
К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога.
Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.
*/
// не совсем понял, что от меня требуется, поэтому реализовал что-то вроде склада
let products = {
  'items' : {},
  addItem : function(id, name, cost, amount){ //метод, который добавляет предмет
    this['items'][id] = {
      'название' : name,
      'цена' : cost,
      'количество' : amount
    }
  },
  infoItem : function(id){ // метод, который выдаёт инфу по предмету
    return `Название: ${this['items'][id]['название']}. Цена: ${this['items'][id]['цена']}. Количество: ${this['items'][id]['количество']}`
  },
  delItem : function(id){ // метод который полностью удаляет предмет
    delete this['items'][id]
    return 'Товар удалён'
  },
  takeItem : function(id, amount){ // метод, который извлекате предмет
    this['items'][id]['количество'] -= amount
    return `Был взят: ${this.infoItem(id)}`
  },
  appendItem : function(id, amount){ // метод, который добавляет количетсво предметов
    this['items'][id]['количество'] += amount
    return `Был добавлен: ${this.infoItem(id)}`
  },
  getAllIDs : function(){ // метод, который возвращает все ID
    let ids = []
    for (let key of Object.keys(this['items']))
      ids.push(key);
    return ids
  },
  createBasket : function(basket){ // метод, который напонляет корзину по запросу польователя
    let amount = 0
    let id = prompt('Введите ID(off - завершить):')
    while (id != 'off'){ // решил задачу через while со стоп-словом, не додумал как остановить цикл по кнопке отмена из prompt
      amount = Number(prompt('Количество:'))
      if (this.getAllIDs().includes(id)){
        if (this['items'][id]['количество'] >= amount){
          alert(this.takeItem(id, amount));
          if (id in basket){
            basket[id] += amount
          } else{
            basket[id] = amount
          }
        } else {
            alert('Количество превышает остатки');
        } 
      } else {
        alert('Такого ID нет');
      }
      id = prompt('Введите ID(off - завершить):');
    }
    return basket
  },
  getBasketCost: function(basket){ // метод, который возвращает цену корзины
    let total_price = 0
    for (let id of Object.keys(basket)){
      if (id  in this['items']){
        total_price += (this['items'][id]['цена'] * basket[id])
      }
    }
    return total_price
  }
}

let basket = {}
products.addItem('001', 'Samsung', 134, 5);
products.addItem('002', 'Lenovo', 95, 10);
console.log(products);
//console.log(products.infoItem('001'));
//console.log(products.takeItem('001', 2));
//console.log(products.appendItem('001', 3));
//console.log(products.getAllIDs())
//console.log(products.createBasket(basket))
//console.log(products.getBasketCost(basket))
/*
Будет здорово, если скажите насколько читаем код,
так же, если есть советы по оптимизации можно написать в t.me/chaoticsteve
*/