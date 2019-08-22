export default class Fighter {
  constructor(data) {
    this.name = data.name
    this.health = data.health
    this.hits = 0
    this.items = []
    this.description = data.description || "Unknown Origin"
    this.imgURL = data.imgURL
    console.log(`${name} has entered the arena!`)
  }
  get Template() {
    return `
    <div class="col">
      <h1>${this.name}</h1>
      <h3>${this.health}</h3
      <h3>${this.hits}</h3>
      <h3>${this.items}</h3>
      <h3>${this.description}</h3>
      <h3>${this.imgURL}</h3> 
    `
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