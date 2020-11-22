import React from 'react'
import styled from 'styled-components'
import Player from '../components/Player'
import Header from '../components/Header'
import Messages from '../components/Messages'

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
  width: 402px;
  color: #fff;
`

const AreaMessages = styled.section`
  grid-area: input;
`

const Index = props => (
  <Grid>
    <AreaHeader>
      <Header />
    </AreaHeader>
    <AreaPlayer>
      <Player />
    </AreaPlayer>
    <AreaChat>
      <div>hoge</div>
    </AreaChat>
    <AreaMessages>
      <Messages />
    </AreaMessages>
  </Grid>
)

export default Index