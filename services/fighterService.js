import Fighter from "../models/fighter.js"
import Item from "../models/item.js"

let _fighter = {
  fighter: new Fighter("Goku", 100, 0, 5, 10, 50),
  fighter2: new Fighter("Frieza", 90, 0, 10, 5, 60)
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
      name: _fighter.name,
      health: _fighter.health,
      attacks: _fighter.health,
      items: _fighter.items,
      hits: _fighter.hits,
    }
  }

  addItem(itemIndex) {
    let targetItem = _items[itemIndex]
    _fighter.items.push(targetItem)
  }

  attackFighter(attackName) {
    let attackDamage = _fighter.attacks[attackName]
    _fighter.health -= attackDamage
    _fighter.hits++
  }

  punch(fighter2) {
    _fighter[fighter2].health -= 5
    _fighter[fighter2].hits++
  }
  kick(fighter2) {
    _fighter[fighter2].health -= 10
    _fighter[fighter2].hits++
  }
  kamehameha(fighter2) {
    _fighter[fighter2].health -= 50
    _fighter[fighter2].hits++
  }
  powerUp(fighter) {
    if (_fighter[fighter].health > 0) {
      _fighter[fighter].health *= _fighter[fighter].health;
    }
    if (_fighter[fighter].health == 1) {
      _fighter[fighter].health *= _fighter[fighter].health;
    }
    if (_fighter[fighter].hits > 0) {
      _fighter[fighter].hits = 0;
    }
  }



  knockOut(fighter2) {
    if (_fighter[fighter2].health <= 0) {
      alert("KO!!!");
    }
  }
  reset() {
    _fighter.fighter.health = 100;
    _fighter.fighter2.health = 100;
    _fighter.fighter.hits = 0;
    _fighter.fighter2.hits = 0;
  }
  //FIXME (the following three functions don't get called)
  negatives(fighter2) {
    if (_fighter[fighter2].health < 1) {
      _fighter[fighter2].health = 0;
    }
  }
}


// giveSensu() {
// if (_fighter.fighter.health < _fighter.fighter2.health) {
//   _fighter.fighter.health += sensu.modifier;

//   alert(sensu.description)
// } else if (fighter.frieza.health < fighter.goku.health) {
//   fighter.frieza.health += items.sensu.modifier;
//   fighter.frieza.items.push(items.sensu)
//   alert(items.sensu.description)
// }
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
