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
    if (_fighters[fighter].health > 0) {
      _fighters[fighter].health *= _fighters[fighter].health;
    }
    if (_fighters[fighter].health == 1) {
      _fighters[fighter].health *= _fighters[fighter].health;
    }
    if (_fighters[fighter].hits > 0) {
      _fighters[fighter].hits = 0;
    }
  }
  knockOut(fighter2) {
    if (_fighters[fighter2].health <= 0) {
      alert("KO!!!");
    }
  }
  reset() {
    _fighters.fighter.health = 100;
    _fighters.fighter2.health = 100;
    _fighters.fighter.hits = 0;
    _fighters.fighter2.hits = 0;
  }
  //FIXME (the following three functions don't get called)
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