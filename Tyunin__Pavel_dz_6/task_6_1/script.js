let products = {
  'items' : {},
  'basket' : {},
  addItem : function(id, name, cost, imgs){ //метод, который добавляет предмет
    this['items'][id] = {
      'название' : name,
      'цена' : cost,
      'imgs' : imgs
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
  getBasketCost: function(itemID){ // метод, который возвращает цену корзины
    this.createBasket(itemID)
    let total_price = 0;
    let amount = 0;
    for (let id of Object.keys(this.basket)){
      if (id  in this['items']){
        total_price += (this['items'][id]['цена'] * this.basket[id]);
        amount += this.basket[id];
      }
    }
    return `В корзине: ${amount} товаров на сумму ${total_price} рублей`
  },
  clearBasket : function(){
    this.basket = {}
    return 'Корзина пуста'
  }
}

products.addItem('001', 'Samsung', 150, ['img/samsung1.png', 'img/samsung2.png']);
products.addItem('002', 'Lenovo', 95, ['img/lenovo1.png', 'img/lenovo2.png']);
products.addItem('003', 'Haier', 70, ['img/haier1.png', 'img/haier2.png']);
products.addItem('004', 'Acer', 120, ['img/acer1.png', 'img/acer2.png']);

const container = document.getElementById('container');
const items = document.createElement('div');
const basket = document.createElement('div');
const clearButton = document.createElement('button');

items.classList.add('items');
container.append(items);

basket.classList.add('basket');
basket.innerHTML = 'Корзина пуста';
container.append(basket);

clearButton.classList.add('button');
clearButton.innerHTML = 'Очистить корзину';
container.append(clearButton);

let ids = products.getAllIDs();
let buttonVars = [];

for(let i = 0; i < ids.length; i++){
  const item = document.createElement('div');
  const card = document.createElement('div');
  const button = document.createElement('button');
  const img = document.createElement('img');
  const text = document.createElement('h3');
  text.classList.add('text');
  text.innerHTML = products.items[ids[i]]['название'];
  img.classList.add('image_card');
  img.src = products.items[ids[i]]['imgs'][0];
  button.classList.add('button');
  button.innerHTML = 'Купить';
  card.classList.add('card');
  button.id = ids[i];
  card.append(img);
  card.append(text);
  item.append(card);
  card.append(img);
  item.append(button);
  items.append(item);
  buttonVars[i] = document.getElementById(ids[i]);
}
//обработка событий для добавления товаров в корзину
for (let i = 0; i < buttonVars.length; i++){
    buttonVars[i].addEventListener('click', () => {basket.innerHTML=products.getBasketCost(buttonVars[i].id)});
 }

 //обработка события для очистки корзины
clearButton.addEventListener('click', () => (basket.innerHTML = products.clearBasket()));
