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
  {userName: 'c', messages: 'How to use.', iconColor: iconColor()},
  {userName: 'o', messages: 'You can chat with your friends while watching youtube!', iconColor: iconColor()},
  {userName: 'u', messages: 'Synchronize video start, pause and sequence position changes with your friends.', iconColor: iconColor()},
  {userName: 'c', messages: 'Enter the url of the video you want to watch in the header or enter your youtube id to change the video you want to watch.', iconColor: iconColor()},
  {userName: 'h', messages: 'Thanks for visiting. Enjoy the video with your friend.', iconColor: iconColor()},
]

const messageSocket = new WebSocket('ws://localhost:8080/say')
const urlSocket  = new WebSocket('ws://localhost:8080/video/url')

messageSocket.onopen = () => {
  console.log('Succesfully connected to chat server at ws://localhost:8080/say.')
}

const sendMessage = (message => {
  messageSocket.send(JSON.stringify(message))
})

const Index = props => {
  const [messages, setMessages] = useState(data)
  const [userName, setUserName] = useState('')
  const [myIconColor, setMyIconColor] = useState('#0652DD')
  const [youtube, setYoutube] = useState('https://www.youtube.com/watch?v=ysz5S6PUM-U')
  const [connection, setConnection] = useState(true)

  // for chatting
  messageSocket.onmessage = event => {
    setMessages([...messages, JSON.parse(event.data)])
  }

  messageSocket.onerror = event => {
    console.error(event)
    setConnection(false)
  }

  const chatElement = useRef(null);
  useEffect(() => {
    chatElement.current.scrollIntoView({behavior: "smooth", block: "end"})
  }, [messages])

  // changed youtube url
  const isFirstRender = useRef(false)
  useEffect(() => {
    if (isFirstRender.current) {
      urlSocket.send(JSON.stringify({url:youtube}))
    } else {
      isFirstRender.current = true
    }
  }, [youtube])

  urlSocket.onmessage = event => {
    const {url} = JSON.parse(event.data)
    if (url != youtube) {
      setYoutube(url)
    }
  }

  return (
    <React.Fragment>
      <LoginModal open={open} setUserName={setUserName} setMyIconColor={setMyIconColor} connection={connection} />
      <Grid>
        <AreaHeader>
          <Header setYoutube={setYoutube} />
        </AreaHeader>
        <AreaPlayer>
          <Player url={youtube} setUrl={setYoutube} />
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