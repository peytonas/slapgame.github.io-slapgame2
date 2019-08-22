//TODO (add alert with game instructions (controls, etc...))

import FighterService from "../services/fighterService.js";

let _fighterService = new FighterService()

function _draw() {
  let template = ''
  let fighters = _fighterService.Fighters

  fighters.forEach((fighter, index)) => {
    template += fighter.Template
  }

  document.querySelector("#fighters").innerHTML
}


export default class fighterController {
  constructor() {
    console.log("Ready to fight?")
    _draw
  }
  addItem(event) {
    event.preventDefault()
    let form = event.target
  }
}



  //TODO first create buttons on the DOM
  // then add onclick's that trigger the methods that live on the controller
  //then the controller methods will invoke methods on the service that will manipulate the data
