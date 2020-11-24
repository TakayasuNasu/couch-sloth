import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const Div = styled.div`
  width: 912px;
  height: 516px;
`


// quoted from https://github.com/cookpete/react-player (react player)
const Player = props => (
  <Div><ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width='100%' height='100%' controls='1'  /></Div>
)

export default Player
