export default class Item {
  constructor(name, modifier, description) {
    console.log(`You found ${name}!`)
    this.name = name
    this.modifier = modifier
    this.description = description
  }
}