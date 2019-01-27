class User {
  constructor(player = ' ') {
    this.player = player
    this.currentPosition = {
      x: 0,
      y: 0
    }

    this.initEvents()
  }

  initEvents() {
    const user = this
    document.getElementById('btnPlay').addEventListener('click', function() {
      const event = document.createEvent('putChip', {
        player: user.getPlayer(),
        position: user.getPosition()
      })

      document.dispatchEvent(event)
    })
  }

  getPosition() {
    return {...this.currentPosition}
  }

  setPlayer(player) {
    this.player = player
  }

  getPlayer() {
    return this.player
  }
}
