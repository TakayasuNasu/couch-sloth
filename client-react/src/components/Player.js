import React from 'react'
import styled from 'styled-components'
import bgMovie from '../img/bg-movie.png'
import ReactPlayer from 'react-player'

const Div = styled.div`
  width: 912px;
  height: 516px;
  img {
    max-width: 100%;
  }
`

const Player = props => (
  // <Div><img src={bgMovie} alt="back ground image."/></Div>
  <Div><ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width='100%' height='100%'/></Div>
)

export default Player
