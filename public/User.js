class User {
  constructor(player = ' ') {
    this.player = player
    this.currentPosition = null
    this.lastPosition = null

    this.initEvents()
  }

  initEvents() {
    const user = this
    this.preparePlayEvent()
    this.playEvent()
  }

  playEvent() {
    const user = this
    document.getElementById('btnPlay').addEventListener('click', function() {
      const event = new CustomEvent('putChip', {
        detail: {
          player: user.getPlayer(),
          position: user.getPosition()
        }
      })

      document.dispatchEvent(event)

      user.currentPosition = null
      user.lastPosition = null
    })
  }

  preparePlayEvent() {
    const targets = document.querySelectorAll('td')
    const user = this
    for(let i = 0; i < targets.length; i++) {
      targets[i].addEventListener('click', function() {

        const position = {
          x: this.dataset.x,
          y: this.dataset.y
        }

        user.lastPosition = user.getPosition()
        user.currentPosition = position

        const event = new CustomEvent('tempChip', {
          detail: {
            player: user.getPlayer(),
            position: user.getPosition(),
            lastPosition: user.getLastPosition(),
            user: user
          }
        })


        document.dispatchEvent(event)

      })
    }
  }

  revertPosition() {
    this.currentPosition = this.getLastPosition()
    this.lastPosition = null
  }

  getPosition() {
    return this.currentPosition ? {...this.currentPosition} : null
  }

  getLastPosition() {
    return this.lastPosition ? {...this.lastPosition} : null
  }

  setPlayer(player) {
    this.player = player
  }

  getPlayer() {
    return this.player
  }
}
