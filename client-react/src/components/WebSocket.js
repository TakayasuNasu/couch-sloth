import React from 'react'

let socket = new WebSocket('ws://localhost:8080/say')
socket.onopen = () => {
  console.log('Succesfully connected to chat server at ws://localhost:8080/say.')
}

socket.onmessage  = event => console.log(event.data)

const send = (() => {
  socket.send("Here's some text that the server is urgently awaiting!");
})

const WebSocketComponent = props => (
    <p><a onClick={send}>send message</a></p>
)

export default WebSocketComponent