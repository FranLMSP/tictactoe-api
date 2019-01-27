class Chip {
  constructor(color = 'white', character = ' ') {
    this.color = color
    this.character = character
  }
}

class Ring extends Chip {
  constructor(color = 'blue', character = 'O') {
    super(color, character)
  }
}
class Cross extends Chip {
  constructor(color = 'red', character = 'X') {
    super(color, character)
  }
}

class Game {
  constructor() {
    this.initBoard()
    this.players = {
      'x': Cross,
      'o': Ring,
      ' ': Chip
    }
  }

  initBoard() {
    this.board = Array(3).fill().map( () => Array(3).fill().map( () => new Chip() ) )
  }

  play(position, player = ' ') {
    this.board[position.x][position.y] = new this.players[player.toLowerCase()]()
  }

}
