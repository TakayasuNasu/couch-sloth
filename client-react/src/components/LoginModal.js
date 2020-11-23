import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import { TextField, Button } from '@material-ui/core'

const ModalStyle = {
  content: {
    margin: '0 auto',
    width: '50%',
    maxWidth: '340px',
    height: '380px',
  }
}

const Div = styled.div`
  h2 {
    margin-top: 40px;
    font-size: 28px;
    font-family: 'Roboto Condensed', sans-serif;
    text-align: center;
  }
  div.box {
    margin-top: 70px;
  }
  div.button {
    text-align: right;
  }
`

Modal.setAppElement('div')

const LoginModal = props => {
  const [name, setName] = useState('')
  const [open, setOpen] = useState(true)

  const changeName = event => setName(event.target.value)

  const enter = () => {
    if (!name) return
    props.setUserName(name)
    setOpen(false)
    const color = ['#FFC312', '#C4E538',
    '#12CBC4', '#ED4C67', '#B53471',
    '#0652DD', '#009432', '#006266', '#1B1464']
    const i = Math.floor(Math.random() * color.length)
    props.setMyIconColor(color[i])
  }

  return (
    <Modal
    isOpen={open}
    style={ModalStyle}
    >
      <Div>
        <h2>Input Your Name</h2>
        <form>
          <div className="box">
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="Required"
              defaultValue="Your Name"
              variant="outlined"
              onChange={changeName}
            />
          </div>
          <div className="box button">
            <Button onClick={enter} variant="contained" color="primary">Enter</Button>
          </div>
        </form>
      </Div>
    </Modal>
  )
}

LoginModal.defaultProps = {
  open: true,
  setUserName: () => {},
  setMyIconColor: () => {},
}

export default LoginModal