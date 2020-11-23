import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Player from '../components/Player'
import Header from '../components/Header'
import Messages from '../components/Messages'
import Chats from '../components/Chats'

const Grid = styled.main`
  display: grid;
  grid-gap: 2.5vw 2.5vw;
  justify-content: space-evenly;
  grid-template-rows   : 95px 516px 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas  : "header header"
                        "player chat"
                        "input input";

  background-color: #181818;
`

const AreaHeader = styled.header`
  grid-area: header;
`

const AreaPlayer = styled.section`
  grid-area: player;
  margin-left: 2.5vw;
  width: 912px;
  `

const AreaChat = styled.section`
  grid-area: chat;
  justify-self: center;
  overflow-x: scroll;
  width: 402px;
  color: #fff;
`

const AreaMessages = styled.section`
  grid-area: input;
`

const data = [
  {userName: 'Yasu', messages: 'that we here highly resolve'},
  {userName: 'Yuki', messages: 'that these dead shall not have died in vain—that this nation,'},
  {userName: 'Nico', messages: 'under God, shall have a new birth of freedom—and that government of the people, by the people,'},
  {userName: 'Derrick', messages: 'by the people, for the people, shall not perish from the earth.'},
  {userName: 'Shin', messages: 'that we here highly resolve'},
  {userName: 'Taro', messages: 'that these dead shall not have died in vain—that this nation,'},
  {userName: 'beckham', messages: 'under God, shall have a new birth of freedom—and that government of the people, by the people,'},
  {userName: 'amazon', messages: 'by the people, for the people, shall not perish from the earth.'},
  {userName: 'google', messages: 'that we here highly resolve'},
  {userName: 'facebook', messages: 'that these dead shall not have died in vain—that this nation,'},
  {userName: 'apple', messages: 'under God, shall have a new birth of freedom—and that government of the people, by the people,'},
  {userName: 'microsoft', messages: 'by the people, for the people, shall not perish from the earth.'},
]



const messageSocket = new WebSocket('ws://localhost:8080/say')

messageSocket.onopen = () => {
  console.log('Succesfully connected to chat server at ws://localhost:8080/say.')
}

const sendMessage = (message => {
  messageSocket.send(JSON.stringify(message))
})

const Index = props => {
  const [messages, setMessages] = useState(data)

  messageSocket.onmessage = event => {
    setMessages([...messages, JSON.parse(event.data)])
  }

  const chatElement = useRef(null);
  useEffect(() => {
    chatElement.current.scrollIntoView({behavior: "smooth", block: "end"})
  }, [messages])

  return (
    <Grid>
    <AreaHeader>
      <Header />
    </AreaHeader>
    <AreaPlayer>
      <Player />
    </AreaPlayer>
    <AreaChat>
      <Chats messages={messages} />
      <div ref={chatElement} style={{visibility: "hidden"}} />
    </AreaChat>
    <AreaMessages>
      <Messages sendMessage={sendMessage} />
    </AreaMessages>
  </Grid>
  )
}

export default Index