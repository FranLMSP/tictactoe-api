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
    const targets = document.querySelectorAll('td')
    const game = this
    for(let i = 0; i < targets.length; i++) {
      targets[i].addEventListener('click', function() {
        const position = {
          x: this.dataset.x,
          y: this.dataset.y
        }
        game.play(position)
        game.drawChip(position, this)
      })
    }
  }

  drawChip(position, element) {
    const chip = this.board[position.x][position.y]
    element.innerHTML = chip.character
    element.style.color = chip.color
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
