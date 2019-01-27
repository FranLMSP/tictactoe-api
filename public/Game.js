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

    this.turn = 'x'
  }

  initBoard() {
    this.board = Array(3).fill().map( () => Array(3).fill().map( () => new Chip() ) )
  }

  play(position) {
    this.board[position.x][position.y] = new this.players[this.turn]()
    this.newTurn()
  }

  newTurn() {
    if(this.turn == 'x') {
      this.turn = 'o'
    } else {
      this.turn = 'x'
    }
  }



}
