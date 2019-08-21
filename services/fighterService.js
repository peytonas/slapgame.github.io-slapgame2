import Fighter from "../models/fighter.js"
import Item from "../models/item.js"

let _state = {
  fighter: [new Fighter({
    name: "Goku",
    health: 100,
    hits: 0,
    attacks: {

    },
    items: []
  })],
  fighter2: [new Fighter({
    name: "Frieza",
    health: 90,
    hits: 0,
    attacks: {

    },
    items: []
  })],
  fighter3: [new Fighter({
    name: "Cell",
    health: 110,
    hits: 0,
    attacks: {

    },
  })]
}

let _itemState = {
  item: [new Item({
    name: "Sensu Bean",
    modifier: 100,
    description: "I feel way better!"
  })],
  item2: [new Item({
    name: "Dragon Balls",
    modifier: 100,
    description: "Good to be back!"
  })],
  item3: [new Item({
    name: "Fusion Dance",
    modifier: 200,
    description: "I'm more powerful than ever!"
  })],
  item4: [new Item({
    name: "Instant Transmission",
    modifier: 200,
    description: "Can't hit me if you can't see me!"
  })]
}

export default class FighterService {
  constructor() {
    console.log("Fighters created!")
  }

  get Fighters() {
    return _state.fighter.map(fighter => new Fighter(fighter))
  }

  addItem(_itemState) {
    _itemState.item.push()
  }

} 