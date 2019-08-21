export default class Item {
  constructor(name, modifier, description) {
    console.log(`You found ${name}!`)
    this.name = name
    this.modifier = modifier
    this.description = description
  }
}


// let items = {
//   sensu: { name: "Sensu Bean", modifier: 100, description: "I feel way better!" },
//   dragonBalls: { name: "Dragon Balls", modifier: 100, description: "Good to be back!" },
//   fusion: { name: "Fusion Dance", modifier: 200, description: "I'm more powerful than ever!" },
//   instantTransmission: { name: "Instant Transmission", modifier: 200, description: "Can't hit me if you can't see me!" }
// }