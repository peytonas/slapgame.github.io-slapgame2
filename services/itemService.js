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


// function giveSensu() {
//   if (fighter.goku.health < fighter.frieza.health) {
//     fighter.goku.health += items.sensu.modifier;
//     fighter.goku.items.push(items.sensu)
//     alert(items.sensu.description)
//   } else if (fighter.frieza.health < fighter.goku.health) {
//     fighter.frieza.health += items.sensu.modifier;
//     fighter.frieza.items.push(items.sensu)
//     alert(items.sensu.description)
//   }
//   negatives()
//   update()
// }

// function giveDragonBalls() {
//   if (fighter.goku.health < fighter.frieza.health) {
//     fighter.goku.health += items.dragonBalls.modifier;
//     fighter.goku.items.push(items.dragonBalls)
//     alert(items.dragonBalls.description)
//   }
//   negatives()
//   update()
// }

// function fusion() {
//   if (fighter.goku.health < fighter.frieza.health) {
//     fighter.goku.attacks.kamehameha += 15;
//     fighter.goku.health += items.fusion.modifier;
//     fighter.goku.items.push(items.fusion)
//     alert(items.fusion.description)
//   }
//   negatives()
//   update()
// }
