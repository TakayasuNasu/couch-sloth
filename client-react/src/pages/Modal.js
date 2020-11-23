import React from 'react'
import styled from 'styled-components'
import LoginModal from '../components/LoginModal'

const Div = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #181818;
`

const Modal = props => (
  <Div>
    <LoginModal />
  </Div>
)

export default Modal