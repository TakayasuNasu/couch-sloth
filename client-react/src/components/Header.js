import React from 'react';
import styled from "styled-components";
import font from './Fonts/OleoScript-Bold.ttf';
import logo from './icons/sloth.png'


// Styled CSS
  const Navbar = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 10px;
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
  
  


// Html Code
const Header = props => (
  <Wrapper>
  <Navbar>
      <img src={logo} alt="Logo"></img>
    <Brand>Couch-Sloth</Brand>
  </Navbar>
</Wrapper>
)

export default Header