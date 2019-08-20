import fighterController from "./controllers/fighterController.js"

class Slapgame2 {
  constructor() {
    console.log("Slapgame2 Created")
    this.controllers = {
      fighterController: new fighterController()
    }
  }
}

window["slapgame2"] = new Slapgame2()


let items = {
  sensu: { name: "Sensu Bean", modifier: 100, description: "I feel way better!" },
  dragonBalls: { name: "Dragon Balls", modifier: 100, description: "Good to be back!" },
  fusion: { name: "Fusion Dance", modifier: 200, description: "I'm more powerful than ever!" },
  instantTransmission: { name: "Instant Transmission", modifier: 200, description: "Can't hit me if you can't see me!" }
}

//items to restore health
function giveSensu() {
  if (fighter.goku.health < fighter.frieza.health) {
    fighter.goku.health += items.sensu.modifier;
    fighter.goku.items.push(items.sensu)
    alert(items.sensu.description)
  } else if (fighter.frieza.health < fighter.goku.health) {
    fighter.frieza.health += items.sensu.modifier;
    fighter.frieza.items.push(items.sensu)
    alert(items.sensu.description)
  }
  negatives()
  update()
}

function giveDragonBalls() {
  if (fighter.goku.health < fighter.frieza.health) {
    fighter.goku.health += items.dragonBalls.modifier;
    fighter.goku.items.push(items.dragonBalls)
    alert(items.dragonBalls.description)
  }
  negatives()
  update()
}

function fusion() {
  if (fighter.goku.health < fighter.frieza.health) {
    fighter.goku.attacks.kamehameha += 15;
    fighter.goku.health += items.fusion.modifier;
    fighter.goku.items.push(items.fusion)
    alert(items.fusion.description)
  }
  negatives()
  update()
}
