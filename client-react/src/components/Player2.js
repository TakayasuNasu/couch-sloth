import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const Div = styled.div`
  margin: 0 auto;
  width: 96%;
  max-width: 1200px;
  height: 100%;
`


const playingSocket = new WebSocket('ws://localhost:8080/video/play')

const stopedSocket  = new WebSocket('ws://localhost:8080/video/stop')


const playVideo = (played => {
    console.log(123)
    playingSocket.send(JSON.stringify({playing:true,played:played}))
  })
  
  const stopVideo = (played => {
      console.log(456)
    stopedSocket.send(JSON.stringify({playing:false,played:played}))
  })
  const Player2 = props => {
      const [played, setPlayed] = useState(0)
      playingSocket.onmessage = event => {
          const data = JSON.parse(event.data)
          setPlayed(data.played)
        //   console.log(player.current)
        console.log(parseFloat(played))
          player.current.seekTo(parseFloat(100))
      }
      const player = useRef(null);
      return (
        <Div>
            <ReactPlayer 
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
            ref={player}

            width='100%' 
            height='100%'
            controls={true}
            onPlay={() => {
                playVideo(played)
            }}
            // onPause={() => {
            //     stopVideo(played)
            // }}
            onProgress={state => setPlayed(state.played)}
                />
        </Div>
    )
}

export default Player2
