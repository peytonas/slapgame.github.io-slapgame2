import FighterService from "../services/fighterService.js";

let _fighterService = new FighterService()

function _draw() {
  let fighter = _fighterService.Fighter
  let fighter2 = _fighterService.Fighter2

  let fighterNameElement = document.querySelector("#fighter-name")
  let fighterHitsElement = document.querySelector("#fighter-hits")
  let fighterHealthElement = document.querySelector("#fighter-health");

  let fighter2NameElement = document.querySelector("#fighter2-name")
  let fighter2HitsElement = document.querySelector("#fighter2-hits")
  let fighter2HealthElement = document.querySelector("#fighter2-health");


  fighterNameElement.textContent = fighter.name
  fighterHitsElement.textContent = "Hits: " + fighter.hits.toString()
  fighterHealthElement.textContent = "Health: " + fighter.health.toString()

  fighter2NameElement.textContent = fighter2.name
  fighter2HitsElement.textContent = "Hits: " + fighter2.hits.toString()
  fighter2HealthElement.textContent = "Health: " + fighter2.health.toString()
}

export default class FighterController {
  punch(fighter2) {
    _fighterService.punch(fighter2)
    _draw()
  }

  kick(fighter2) {
    _fighterService.kick(fighter2)
    _draw()
  }

  kamehameha(fighter2) {
    _fighterService.kamehameha(fighter2)
    _draw()
  }

  powerUp(fighter) {
    _fighterService.powerUp(fighter)
    _draw()
  }

  // FIXME (the following three functions don't get called)
  negatives(fighter2) {
    _fighterService.negatives(fighter2)
    _draw()
  }

  knockOut(fighter2) {
    if (_fighterService[fighter2].health == 0) {
      alert("KO!!!");
    }
  }

  reset(fighter, fighter2) {
    _fighterService[fighter].health = 100;
    _fighterService[fighter2].health = 100;
    _fighterService[fighter].hits = 0;
    _fighterService[fighter2].hits = 0;
  }

  constructor() {
    console.log("Ready to fight?")
    _draw()
  }

  //TODO first create buttons on the DOM
  // then add onclick's that trigger the methods that live on the controller
  //then the controller methods will invoke methods on the service that will manipulate the data
}