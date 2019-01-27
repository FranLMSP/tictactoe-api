class Chip {
  constructor(color = 'white', character = ' ') {
    this.color = color
    this.character = character
  }

  isClean(){ return true }
}

class Ring extends Chip {
  constructor(color = 'blue', character = 'O') {
    super(color, character)
  }

  isClean(){ return false }
}
class Cross extends Chip {
  constructor(color = 'red', character = 'X') {
    super(color, character)
  }

  isClean(){ return false }
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
    this.initEvents()
  }

  initBoard() {
    this.board = Array(3).fill().map( () => Array(3).fill().map( () => new Chip() ) )
  }

  initEvents() {
    document.addEventListener('tempChip', e => {
      const data = {...e.detail}
      console.log(data)
      const position = {...data.position}
      if(this.board[position.x][position.y].isClean()) {
        this.board[position.x][position.y] = new this.players[data.player]()
        this.drawChip(position, data.element, true)
      }
    })
  }

  drawChip(position, element, temp = false) {
    const chip = this.board[position.x][position.y]
    element.innerHTML = chip.character
    element.style.color = chip.color
    element.style.opacity = temp ? "0.5" : "1.0"
  }

  play(position) {
    if(this.board[position.x][position.y].isClean()) {
      this.board[position.x][position.y] = new this.players[this.turn]()
      this.newTurn()
    }
  }

  newTurn() {
    if(this.turn == 'x') {
      this.turn = 'o'
    } else {
      this.turn = 'x'
    }
  }



}
