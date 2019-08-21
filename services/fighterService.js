import Fighter from "../models/fighter.js"
import Item from "../models/item.js"

let _fighters = {
  fighter: new Fighter("Goku", 100, 0, 5, 10, 50)
}
let sensu = new Item("Sensu Bean", 100, "I feel way better!")
let dragonBalls = new Item("Dragon Balls", 100, "Good to be back!")
let fusionDance = new Item("Fusion Dance", 100, "I'm more powerful than ever!")
let instantTransmission = new Item("Instant Transmission", 200, "Can't hit me if you can't see me!")

let _items = [sensu, dragonBalls, fusionDance, instantTransmission]


export default class FighterService {
  constructor() {
    console.log("Fighters created!")
  }
  get Fighter() {
    return {
      name: _fighters.name,
      health: _fighters.health,
      attacks: _fighters.health,
      items: _fighters.items,
      hits: _fighters.hits,
    }
  }

  addItem(itemIndex) {
    let targetItem = _items{ }
  }

  punch(fighter2) {
    _fighters[fighter2].health -= 5
    _fighters[fighter2].hits++
  }
  kick(fighter2) {
    _fighters[fighter2].health -= 10
    _fighters[fighter2].hits++
  }
  kamehameha(fighter2) {
    _fighters[fighter2].health -= 50
    _fighters[fighter2].hits++
  }
  powerUp(fighter) {
    if (_fighters[fighter].health > 0) {
      _fighters[fighter].health *= _fighters[fighter].health;
    }
    if (_fighters[fighter].health == 1) {
      _fighters[fighter].health *= _fighters[fighter].health;
    }
    if (_fighters[fighter].hits > 0) {
      _fighters[fighter].hits = 0;
    }
  }
  knockOut(fighter2) {
    if (_fighters[fighter2].health <= 0) {
      alert("KO!!!");
    }
  }
  reset() {
    _fighters.fighter.health = 100;
    _fighters.fighter2.health = 100;
    _fighters.fighter.hits = 0;
    _fighters.fighter2.hits = 0;
  }
  //FIXME (the following three functions don't get called)
  negatives(fighter2) {
    if (_fighters[fighter2].health < 1) {
      _fighters[fighter2].health = 0;
    }
  }
}