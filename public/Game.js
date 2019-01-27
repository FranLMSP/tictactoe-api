class Chip {
  constructor(color = 'white', character = ' ') {
    this.color = color
    this.character = character
  }
}

class Ring extends Chip {
  constructor(color = 'blue', character = 'O') {
    this.constructor(color, character)
  }
}
class Cross extends Chip {
  constructor(color = 'red', character = 'X') {
    this.constructor(color, character)
  }
}

class Game {
  constructor() {
    this.initBoard()
  }

  initBoard() {
    this.board = Array(3).fill().map( () => {
      return Array(3).fill().map( () => new Chip())
    })
  }

}
