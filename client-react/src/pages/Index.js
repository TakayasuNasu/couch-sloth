import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Player from '../components/Player'
import Header from '../components/Header'
import Messages from '../components/Messages'
import Chats from '../components/Chats'
import LoginModal from '../components/LoginModal'

const Grid = styled.main`
  display: grid;
  grid-gap: 2.5vw 2.5vw;
  justify-content: space-evenly;
  grid: "header header" 95px
        "player  chat"  calc(100vh - 280px)
        "input   input" 120px
      / 6.8fr      3.2fr;
  background-color: #181818;
`

const AreaHeader = styled.header`
  grid-area: header;
`

const AreaPlayer = styled.section`
  grid-area: player;
  justify-self: center;
  width: 100%;
  `

const AreaChat = styled.section`
  grid-area: chat;
  justify-self: center;
  overflow-x: scroll;
  width: 88%;
  color: #fff;
`

const AreaMessages = styled.section`
  grid-area: input;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  background-color: black;
`

const iconColor = () => {
  const color = ['#FFC312', '#C4E538',
  '#12CBC4', '#ED4C67', '#B53471',
  '#0652DD', '#009432', '#006266', '#1B1464']
  const i = Math.floor(Math.random() * color.length)
  return color[i]
}

const data = [
  {userName: 'Yasu', messages: 'that we here highly resolve', iconColor: iconColor()},
  {userName: 'Yuki', messages: 'that these dead shall not have died in vain—that this nation,', iconColor: iconColor()},
  {userName: 'Nico', messages: 'under God, shall have a new birth of freedom—and that government of the people, by the people,', iconColor: iconColor()},
  {userName: 'Derrick', messages: 'by the people, for the people, shall not perish from the earth.', iconColor: iconColor()},
  {userName: 'Shin', messages: 'that we here highly resolve', iconColor: iconColor()},
  {userName: 'Taro', messages: 'that these dead shall not have died in vain—that this nation,', iconColor: iconColor()},
  {userName: 'beckham', messages: 'under God, shall have a new birth of freedom—and that government of the people, by the people,', iconColor: iconColor()},
  {userName: 'amazon', messages: 'by the people, for the people, shall not perish from the earth.', iconColor: iconColor()},
  {userName: 'google', messages: 'that we here highly resolve', iconColor: iconColor()},
  {userName: 'facebook', messages: 'that these dead shall not have died in vain—that this nation,', iconColor: iconColor()},
  {userName: 'apple', messages: 'under God, shall have a new birth of freedom—and that government of the people, by the people,', iconColor: iconColor()},
  {userName: 'microsoft', messages: 'by the people, for the people, shall not perish from the earth.', iconColor: iconColor()},
]



const messageSocket = new WebSocket('ws://localhost:8080/say')

const playingSocket = new WebSocket('ws://localhost:8080/video/play')

const stopedSocket  = new WebSocket('ws://localhost:8080/video/stop')

// playingSocket.send(JSON.stringify({{playing:true,played:0.177}))

// stopedSocket.send(JSON.stringify({{playing:false,played:0.177}))


messageSocket.onopen = () => {
  console.log('Succesfully connected to chat server at ws://localhost:8080/say.')
}

playingSocket.onopen = () => {
  console.log('Succesfully connected to chat server at ws://localhost:8080/video/play.')
}

stopedSocket.onopen = () => {
  console.log('Succesfully connected to chat server at ws://localhost:8080/video/stop.')
}

const sendMessage = (message => {
  messageSocket.send(JSON.stringify(message))
})

// const playVideo = ((playing, played) => {
//   playingSocket.send(JSON.stringify({playing:true,played:played}))
// })

// const stopVideo = ((playing, played) => {
//   stopedSocket.send(JSON.stringify({playing:false,played:played}))
// })


const Index = props => {
  const [messages, setMessages] = useState(data)
  const [userName, setUserName] = useState('')
  const [myIconColor, setMyIconColor] = useState('#0652DD')

  messageSocket.onmessage = event => {
    setMessages([...messages, JSON.parse(event.data)])
  }

  const chatElement = useRef(null);
  useEffect(() => {
    chatElement.current.scrollIntoView({behavior: "smooth", block: "end"})
  }, [messages])

  return (
    <React.Fragment>
      <LoginModal open={open} setUserName={setUserName} setMyIconColor={setMyIconColor} />
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
          <Messages sendMessage={sendMessage} userName={userName} iconColor={myIconColor} />
        </AreaMessages>
      </Grid>
    </React.Fragment>
  )
}

export default Index