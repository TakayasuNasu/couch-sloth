import React from 'react'
import styled from 'styled-components'
import bgMovie from '../img/bg-movie.png'

const Div = styled.div`
  width: 912px;
  height: 516px;
  img {
    max-width: 100%;
  }
`

const Player = props => (
  <Div><img src={bgMovie} alt="back ground image."/></Div>
)

export default Player
