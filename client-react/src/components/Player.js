import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const Div = styled.div`
  margin: 0 auto;
  width: 96%;
  max-width: 1200px;
  height: 100%;
`


// quoted from https://github.com/cookpete/react-player (react player)
const Player = props => (
  <Div><ReactPlayer 
  url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
  width='100%' 
  height='100%'
  controls='1'
  onPlay={() => {
    props.playVideo(playing, played)
    console.log(123)
  }}
  onPause={() => {
    props.stopVideo(playing, played)
    console.log(321)
  }}
    /></Div>
)

export default Player
