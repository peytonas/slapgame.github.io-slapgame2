import ItemService from "../services/itemService.js";

let _itemService = new ItemService()

function _draw() {
  let item = _itemService.Item
  let item2 = _itemService.Item2
  let item3 = _itemService.Item3

  let itemNameElement = document.querySelector("#sensu")
  let item2NameElement = document.querySelector("#dragon-balls")
  let item3NameElement = document.querySelector("#fusion-dance")

  itemNameElement.textContent = item.name
  item2NameElement.textContent = item2.name
  item3NameElement.textContent = item3.name


}







export default class ItemController {
  constructor() {
    console.log("How does this thing work?")
    _draw()
  }
}