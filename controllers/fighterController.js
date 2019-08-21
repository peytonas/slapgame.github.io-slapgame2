import FighterService from "../services/fighterService.js";

let _fighterService = new FighterService()

function _draw() {
  let fighter = _fighterService.Fighter

  //TODO (What is this for and where is it called?)
  let template = `
  <div class="card">
    <h2>${fighter.name}</h2>
    <h4>Health: ${fighter.health}</h4>
  </div>
  `
  let fighterNameElement = document.querySelector("#fighter-name").innerHTML
  let fighterHitsElement = document.querySelector("#fighter-hits").innerHTML
  let fighterHealthElement = document.querySelector("#fighter-health").innerHTML;

  let fighter2NameElement = document.querySelector("#fighter2-name")
  let fighter2HitsElement = document.querySelector("#fighter2-hits")
  let fighter2HealthElement = document.querySelector("#fighter2-health");

  //FIXME (determine what textContent needs to be changed to after innerHTML)
  fighterNameElement.textContent = fighter.name.toString()
  fighterHitsElement.textContent = "Hits: " + fighter.hits.toString()
  fighterHealthElement.textContent = "Health: " + fighter.health.toString()

  fighter2NameElement.textContent = fighter.fighter2.name
  fighter2HitsElement.textContent = "Hits: " + fighter.fighter2.hits.toString()
  fighter2HealthElement.textContent = "Health: " + fighter.fighter2.health.toString()
}

export default class FighterController {
  constructor() {
    console.log("Ready to fight?")
  }

  addItem(itemIndex) {
    _fighterService.addItem(itemIndex)
  }

  attackFighter(attackName) {
    _fighterService.attackFighter(attackName)
    _draw()
  }

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
    _fighterService.knockOut(fighter2)
  }

  reset() {
    _fighterService.reset()
    _draw()
  }



  //TODO first create buttons on the DOM
  // then add onclick's that trigger the methods that live on the controller
  //then the controller methods will invoke methods on the service that will manipulate the data
}