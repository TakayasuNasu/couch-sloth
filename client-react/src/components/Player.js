import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const Div = styled.div`
  margin: 0 auto;
  width: 96%;
  max-width: 1200px;
  height: 100%;
`

const playingSocket = new WebSocket('ws://localhost:8080/video/play')
const pauseSocket  = new WebSocket('ws://localhost:8080/video/pause')



const Player = props => {
  const [playing, setPlaying] = useState(false)
  const [played, setPlayed] = useState(0)
  const player = useRef(null)

  // about play
  const playVideo = (() => {
    if (!playing) {
      playingSocket.send(JSON.stringify({isPlay:true,progress:played,type:'onPlay'}))
    }
    setPlaying(true)
  })
  playingSocket.onmessage = event => {
    const {isPlay, progress} = JSON.parse(event.data)
    if (!playing) {
      setPlaying(isPlay)
    }
    if (played != progress) {
      player.current.seekTo(parseFloat(progress))
    }
  }

  // about pause
  const pauseVideo = (() => {
    if (playing) {
      pauseSocket.send(JSON.stringify({isPlay:false,progress:played,type:'onPause'}))
    }
  })
  pauseSocket.onmessage = event => {
    const {isPlay, progress} = JSON.parse(event.data)
    if (playing) {
      setPlaying(false)
    }
  }

  return (
    <Div>
      <ReactPlayer
        ref={player}
        url={props.url}
        width='100%'
        height='100%'
        playing={playing}
        controls={true}
        onPlay={playVideo}
        onPause={pauseVideo}
        onProgress={state => setPlayed(state.played)}
      />
    </Div>
  )
}

Player.defaultProps = {
  url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
}

export default Player
