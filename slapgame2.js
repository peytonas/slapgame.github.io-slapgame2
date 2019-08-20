import FighterController from "./controllers/fighterController.js"
import ItemController from "./controllers/itemController.js"

class Slapgame2 {
  constructor() {
    console.log("Slapgame2 Created")
    this.controllers = {
      fighterController: new FighterController(),
      itemController: new ItemController
    }
  }
}

window["slapgame2"] = new Slapgame2()