import FighterController from "./controllers/fighterController.js"

class Slapgame2 {
  constructor() {
    console.log("Slapgame2 Created")
    this.controllers = {
      fighterController: new FighterController()
    }
  }
}

window["slapgame2"] = new Slapgame2()