//TODO (add alert with game instructions (controls, etc...))

import FighterService from "../services/fighterService.js";

let _fighterService = new FighterService()

function _draw() {
  let fighters = _fighterService.Fighters

  document.querySelector("#fighters").innerHTML
}


export default class FighterController {
  constructor() {
    console.log("Ready to fight?")
    _draw
  }
  addItem(itemIndex) {
    _fighterService.addItem(itemIndex)
  }
}





  //TODO first create buttons on the DOM
  // then add onclick's that trigger the methods that live on the controller
  //then the controller methods will invoke methods on the service that will manipulate the data
