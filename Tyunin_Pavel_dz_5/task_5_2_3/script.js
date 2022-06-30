let products = {
  'items' : {},
  'basket' : {},
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
  takeItem : function(id, amount){ // метод, который извлекает предмет
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
  createBasket : function(itemID){ // метод, который напонляет корзину по клику на товар
    if (itemID in this.basket){
        this.basket[itemID] += 1
    }else{
        this.basket[itemID] = 1
    }
  },
  getBasketCost: function(){ // метод, который возвращает цену корзины
    let total_price = 0;
    let amount = 0;
    for (let id of Object.keys(this.basket)){
      if (id  in this['items']){
        total_price += (this['items'][id]['цена'] * this.basket[id]);
        amount += this.basket[id];
      }
    }
    return `В корзине: ${amount} товаров на сумму ${total_price} рублей`
  }
}

products.addItem('001', 'Samsung', 150, 5);
products.addItem('002', 'Lenovo', 95, 10);
products.addItem('003', 'Haier', 70, 4);
products.addItem('004', 'Acer', 120, 8);

const container = document.getElementById('container')
const items = document.createElement('div')
const basket = document.createElement('div')
const text = document.createElement('p')

text.classList.add('text')
text.innerHTML = 'Клик по карточке товара, добавляет товар в корзину. Клик по корзине выводит количество и сумму товаров.'
container.append(text)
items.classList.add('items')
container.append(items)

basket.classList.add('basket')
basket.innerHTML = 'Корзина пуста'
container.append(basket)
let ids = products.getAllIDs()
let itemVars = []

for(let i = 0; i < ids.length; i++){
  const item = document.createElement('div');
  item.classList.add('item');
  item.id = ids[i];
  item.innerHTML = products.items[ids[i]]['название'];
  items.append(item);
  itemVars[i] = document.getElementById(ids[i]);
}
//обработка событий для добавления товаров в корзину
for (let i = 0; i < itemVars.length; i++){
    itemVars[i].addEventListener('click', () => {products.createBasket(itemVars[i].id)});
 }
 // обработка событий для вывода товаров в корзине
basket.addEventListener('click', () => {basket.innerHTML=products.getBasketCost()});
