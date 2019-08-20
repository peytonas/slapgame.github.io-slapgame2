let fighter = {
  goku: {
    health: 100,
    hits: 0,
    attacks: {
      punch: 5,
      kick: 10,
      kamehameha: 85
    },
    items: []
  },
  frieza: {
    health: 100,
    hits: 0,
    attacks: {
      punch: 5,
      kiBlast: 5,
      tailWhip: 15,
      deathComet: 90
    },
    items: []
  }
}

let items = {
  sensu: { name: "Sensu Bean", modifier: 100, description: "I feel way better!" },
  dragonBalls: { name: "Dragon Balls", modifier: 100, description: "Good to be back!" },
  fusion: { name: "Fusion Dance", modifier: 200, description: "I'm more powerful than ever!" },
  instantTransmission: { name: "Instant Transmission", modifier: 200, description: "Can't hit me if you can't see me!" }
}

//decrease total health
function punch(targetName) {
  if (fighter[targetName].health > 0 && fighter[targetName].health < 9000) {
    fighter[targetName].health -= 5
  } else if (fighter[targetName].health > 9000) {
    fighter[targetName].health -= 500
  }
  fighter[targetName].hits++
  negatives()
  update()
  knockOut()
}

function kick(targetName) {
  if (fighter[targetName].health > 0 && fighter[targetName].health < 9000) {
    fighter[targetName].health -= 10
  } else if (fighter[targetName].health > 9000) {
    fighter[targetName].health -= 1000
  }
  fighter[targetName].hits++
  negatives()
  update()
  knockOut()
}

function kamehameha(targetName) {
  if (fighter.goku.health > 0 && fighter.goku.health < 9000) {
    fighter[targetName].health -= fighter.goku.attacks.kamehameha;
  } else if (fighter.goku.health > 9000) {
    fighter[targetName].health -= fighter.goku.attacks.kamehameha * 10;
  }
  fighter[targetName].hits++
  negatives()
  update()
  knockOut()

}

function powerUp(targetName) {
  if (fighter[targetName].health > 0) {
    fighter[targetName].health *= fighter[targetName].health;
  }
  if (fighter[targetName].health == 1) {
    fighter[targetName].health *= fighter[targetName].health;
  }
  if (fighter[targetName].hits > 0) {
    fighter[targetName].hits = 0;
  }
  negatives()
  update()
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

// update health after taking damage
function update() {
  let gokuHealthElement = document.getElementById("gokuHealth");
  let friezaHealthElement = document.getElementById("friezaHealth");
  let gokuHitsElement = document.getElementById("gokuHits")
  let friezaHitsElement = document.getElementById("friezaHits")

  gokuHealthElement.textContent = "Health: " + fighter.goku.health.toString()
  friezaHealthElement.textContent = "Health: " + fighter.frieza.health.toString()
  gokuHitsElement.textContent = "Hits: " + fighter.goku.hits.toString()
  friezaHitsElement.textContent = "Hits: " + fighter.frieza.hits.toString()
}

function negatives() {
  if (fighter.goku.health < 1) {
    fighter.goku.health = 0;
  }
  if (fighter.frieza.health < 1) {
    fighter.frieza.health = 0;
  }
}

function knockOut() {
  if (fighter.goku.health == 0) {
    alert("KO!!!");
  }
  if (fighter.frieza.health == 0) {
    alert("KO!!!");
  }
}

// reset game
function reset() {
  fighter.goku.health = 100;
  fighter.frieza.health = 100;
  fighter.goku.hits = 0;
  fighter.frieza.hits = 0;
  update()
}