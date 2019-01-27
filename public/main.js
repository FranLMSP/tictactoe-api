const socket = io();
messages = document.getElementById('messages')

function appendMessage(msg) {
  const node = document.createElement('li')
  const text = document.createTextNode(msg)
  node.appendChild(text)

  messages.appendChild(node)
}

function send(e) {
  event.preventDefault()
  message = document.getElementById('m')
  appendMessage(message.value)
  socket.emit('chat message', message.value)
  message.value = ''
}

socket.on('new message', function(msg) {
  appendMessage(msg)
})
