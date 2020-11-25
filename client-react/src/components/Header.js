import React from 'react'
import styled from "styled-components"
import logo from '../img/sloth.png'
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {TextField} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


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
  `;

  const Wrapper = styled.div`
  width: 100%;
  height: 56px;
  background-color: #000;

  `;

  const Brand = styled.h2`
    font-size: 32px;
    font-family: 'Oleo Script', cursive;
    color: white;
    font-weight: 800;
    padding-left: 20px;
    width: 170px;
  `;

  const Form = styled.form`
    width: 70%;
    margin: 0 auto;
  `;




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
  `;

  const FlexBox = styled.div`
      display: flex;
      position: relative;
  `;



// Html Code
const Header = props => (
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
            />
            <SubmitButton
                className="search"
                type="submit"

            >
              <FontAwesomeIcon icon={["fas","search"]} size="2x" color="#fff" />
            </SubmitButton>
          </FlexBox>
        </ThemeProvider>
      </Form>
    </Navbar>


  </Wrapper>
)



export default Header