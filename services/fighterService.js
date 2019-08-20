import Fighter from "../models/fighter.js"

let _fighters = {
  fighter: new Fighter("Goku"),
  fighter2: new Fighter("Frieza")
}



export default class FighterService {
  punch(fighter2) {
    _fighters[fighter2].health -= 5
    _fighters[fighter2].hits++
  }
  kick(fighter2) {
    _fighters[fighter2].health -= 10
    _fighters[fighter2].hits++
  }
  kamehameha(fighter2) {
    _fighters[fighter2].health -= 75
    _fighters[fighter2].hits++
  }
  powerUp(fighter) {
    if (fighter[fighter].health > 0) {
      fighter[fighter].health *= fighter[fighter].health;
    }
    if (fighter[fighter].health == 1) {
      fighter[fighter].health *= fighter[fighter].health;
    }
    if (fighter[fighter].hits > 0) {
      fighter[fighter].hits = 0;
    }

    //FIXME (doesn't get called, health goes negative)
    negatives(fighter2) {
      if (_fighters[fighter2].health < 1) {
        _fighters[fighter2].health = 0;
      }
    }

    get Fighter() {
      return _fighters.fighter
    }
    get Fighter2() {
      return _fighters.fighter2
    }

    constructor() {
      console.log("Fighters created!")
    }
  }