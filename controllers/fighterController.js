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

  powerup(fighter) {
    _fighterService.powerUp(fighter)
    _draw()
  }

  // FIXME (doesn't get called, health goes negative)
  negatives(fighter2) {
    _fighterService.negatives(fighter2)
    _draw()
  }

  constructor() {
    console.log("Ready to fight?")
    _draw()
  }

  //TODO first create buttons on the DOM
  // then add onclick's that trigger the methods that live on the controller
  //then the controller methods will invoke methods on the service that will manipulate the data
}