import ItemService from "../services/itemService.js"

let _itemService = new ItemService()

function _drawItem() {
  let item = _itemService.Item
  let item2 = _itemService.Item2
  let item3 = _itemService.Item3

  let itemNameElement = document.querySelector("#sensu")
  let item2NameElement = document.querySelector("#dragon-balls")
  let item3NameElement = document.querySelector("#fusion-dance")


}







export default class ItemController {
  constructor() {
    console.log("How does this thing work?")
    _drawItem()
  }
}