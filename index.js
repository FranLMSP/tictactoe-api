const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.static('public'))

io.on('connection', socket => {
  console.log('a user connected')


  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('chat message', msg => {
    socket.broadcast.emit('new message', msg)
  })

})

http.listen(3000, () =>   {
  console.log('listening on *:3000')
})
