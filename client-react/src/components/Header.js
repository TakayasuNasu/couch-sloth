import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import logo from '../img/sloth.png'
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles"
import {TextField} from "@material-ui/core"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

// Styled CSS
const Navbar = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 24px;
  height: 100%;
figure {
  align-self: flex-start;
  width: 40px;
  height: 40px;
  padding-top: 6px;
}
img {
  max-width: 100%;
}
`

const Wrapper = styled.div`
  width: 100%;
  height: 56px;
  background-color: #000;
`

const Brand = styled.h2`
  font-size: 32px;
  font-family: 'Oleo Script', cursive;
  color: white;
  font-weight: 800;
  padding-left: 20px;
  width: 170px;
`

const Form = styled.form`
  width: 70%;
  margin: 0 auto;
`

const SubmitButton = styled.button`
    margin-left: -44px;
    width: 50px;
    background-color: transparent;
    cursor: pointer;
    border: none;
    transition: .2s;
    z-index: 10;
    &:hover {
        transform: scale(1.4, 1.4);
    }
    svg {
      font-size: 1.5em;
    }
`

const FlexBox = styled.div`
    display: flex;
    position: relative;
`

// Html Code
const Header = props => {
  const [url, setUrl] = useState('https://www.youtube.com/watch?v=ysz5S6PUM-U')

  const handleChange = e => {
    setUrl(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const pattern = /https:\/\/www\.youtube\.com\/watch\?v=[\w\d/~_-]{11}/
    if (url.match(pattern)) {
      props.setYoutube(url)
    } else if(url.length == 11) {
      const youtubeUrl = `https://www.youtube.com/watch?v=${url}`
      props.setYoutube(youtubeUrl)
    } else {
      alert('invalid url.')
    }
  }

  useEffect(() => {
    if (props.youtube != url) {
      setUrl(props.youtube)
    }
  }, [props.youtube])

  return (
    <Wrapper>
      <Navbar>
        <figure>
          <img src={logo} alt="Logo" />
        </figure>
        <Brand>Couch-Sloth</Brand>
        <Form>
          <ThemeProvider theme={createMuiTheme({palette:{type:'dark'}})}>
            <FlexBox>
              <TextField
                fullWidth
                label="Input URL here..."
                id="filled-basic"
                value={url}
                onChange={handleChange}
              />
              <SubmitButton
                className="search"
                type="submit"
                onClick={handleSubmit}
                onSubmit={handleSubmit}
              >
                <FontAwesomeIcon icon={["fas","search"]} size="2x" color="#fff" />
              </SubmitButton>
            </FlexBox>
          </ThemeProvider>
        </Form>
      </Navbar>
    </Wrapper>
  )
}

Header.defaultProps = {
  youtube: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  setYoutube: url => console.log(url)
}

export default Header