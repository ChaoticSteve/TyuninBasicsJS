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
  createBasket : function(basket, itemID){ // метод, который напонляет корзину по запросу польователя
    if (itemID in basket){
        basket[itemID] += 1
    }else{
        basket[itemID] = 1
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

products.addItem('001', 'Samsung', 150, 5);
products.addItem('002', 'Lenovo', 95, 10);
products.addItem('003', 'Haier', 70, 4);
products.addItem('004', 'Acer', 120, 8);

const container = document.getElementById('container')
const items = document.createElement('div')
items.classList.add('items')
container.append(items)
let ids = products.getAllIDs()
let basket = {}
let itemVars = []

for(let i = 0; i < ids.length; i++){
  const item = document.createElement('div');
  item.classList.add('item');
  item.id = ids[i]
  item.innerHTML = products.items[ids[i]]['название']
  items.append(item)
  itemVars[i] = document.getElementById(ids[i])
}
for (let i = 0; i < itemVars.length; i++){
    itemVars[i].addEventListener('click', () => {products.createBasket(basket, itemVars[i].id)} )
 }
