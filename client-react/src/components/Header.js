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
  align-items: flex-start;
  padding-left: 24px;
  padding-top: 10px;
  background-color: #000;
  `;

  const Wrapper = styled.div`
  display: inline-block;
  width: 100%;

  `;

  const Brand = styled.h2`
    font-size: 40px;
    font-family: 'Oleo Script', cursive;
    color: white;
    font-weight: 800;
    padding: 20px;
    margin-top: 5px;
  `;

  const Form = styled.form`
    float: right;
    width: 500px;
  `;




  const SubmitButton = styled.button`
      margin-left: -44px;
      width: 500px;
      background-color: transparent;
      cursor: pointer;
      border: none;
      transition: .2s;
      &:hover {
          transform: scale(1.4, 1.4);
      }
  `;

  const FlexBox = styled.div`
      display: flex;
      position: relative;
      float: right;
      }
  `;



// Html Code
const Header = props => (
  <Wrapper>
    <Navbar>
      <img src={logo} alt="Logo"></img>
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