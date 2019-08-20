import Item from "../models/item.js"

let _items = {
  item: new Item("Sensu Bean"),
  item2: new Item("Dragon Balls"),
  item3: new Item("Fusion Dance")
}

export default class ItemService {
  get Item() {
    return _items.item
  }
  get Item2() {
    return _items.item2
  }
  get Item3() {
    return _items.item3
  }
  constructor() {
    console.log("Look at all this stuff!")
  }
}