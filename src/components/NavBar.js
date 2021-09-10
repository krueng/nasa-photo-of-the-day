import React from "react";
import styled from 'styled-components'

const StyledNavBar = styled.div`
    border-bottom: 1px solid #3333;
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #ffffff;
`

const NavBar = (props) => {

  return (
    <StyledNavBar>
      <h1>NASA's Astronomy Picture of the Day</h1>
    </StyledNavBar>
  );
};

export default NavBar;