export default class Fighter {
  constructor(name, health, hits, punch, kick, kamehameha) {
    console.log(`${name} has entered the arena!`)
    this.name = name
    this.health = health
    this.hits = 0
    this.attacks = {
      "punch": punch,
      "kick": kick,
      "kamehameha": kamehameha,
    },
      this.items = []
  }
}

// goku: {
//   health: 100,
//     hits: 0,
//       attacks: {
//     punch: 5,
//       kick: 10,
//         kamehameha: 85
//   },
//   items: []
// },
// frieza: {
//   health: 100,
//     hits: 0,
//       attacks: {
//     punch: 5,
//       kiBlast: 5,
//         tailWhip: 15,
//           deathComet: 90
//   },
//   items: []
// }