export default class Fighter {
  constructor(name) {
    console.log(`${name} has entered the arena!`)
    this.name = name
    this.hits = 0
    this.health = 100
  }
}