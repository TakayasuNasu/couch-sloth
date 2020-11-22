import React from 'react'
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

const Index = props => (
  <Grid>
    <AreaHeader>
      <Header />
    </AreaHeader>
    <AreaPlayer>
      <Player />
    </AreaPlayer>
    <AreaChat>
      <Chats messages={data} />
    </AreaChat>
    <AreaMessages>
      <Messages />
    </AreaMessages>
  </Grid>
)

export default Index