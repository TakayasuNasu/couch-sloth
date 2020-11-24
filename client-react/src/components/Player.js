import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const Div = styled.div`
  width: 912px;
  height: 516px;
`

const Player = props => (
  <Div><ReactPlayer 
  url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
  width='100%' 
  height='100%'
  onPlay={() => {
    props.playVideo()
    console.log(123)
  }}
  // onPause={() => onPlayerStateChange (
  //   this.constructUserPlayerState ( 'paused', videoPlayer ))}
    /></Div>
)

export default Player
