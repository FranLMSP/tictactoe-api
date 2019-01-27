class User {
  constructor(player = ' ') {
    this.player = player
    this.lastPosition = {
      x: 0,
      y: 0
    }
    this.currentPosition = {
      x: 0,
      y: 0
    }

    this.initEvents()
  }

  initEvents() {
    const user = this
    this.preparePlayEvent()
    this.playEvent()
  }

  playEvent() {
    document.getElementById('btnPlay').addEventListener('click', function() {
      const event = new CustomEvent('putChip', {
        detail: {
          player: user.getPlayer(),
          position: user.getPosition()
        }
      })

      document.dispatchEvent(event)
    })
  }

  preparePlayEvent() {
    const targets = document.querySelectorAll('td')
    const user = this
    for(let i = 0; i < targets.length; i++) {
      targets[i].addEventListener('click', function() {
        user.lastPosition = {...user.currentPosition}
        const position = {
          x: this.dataset.x,
          y: this.dataset.y
        }
        user.currentPosition = position

        const event = new CustomEvent('tempChip', {
          detail: {
            player: user.getPlayer(),
            position: user.getPosition(),
            lastPosition: user.getLastPosition(),
            element: targets[i]
          }
        })

        document.dispatchEvent(event)

      })
    }
  }

  getPosition() {
    return {...this.currentPosition}
  }

  getLastPosition() {
    return {...this.lastPosition}
  }

  setPlayer(player) {
    this.player = player
  }

  getPlayer() {
    return this.player
  }
}
