import React from "react";
import styled from 'styled-components'
import { API_KEY, BASE_URL } from "../constants";
import moment from 'moment';

const StyledFooter = styled.div`
  border-top: 1px solid #3333;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #ffffff;
`

const Footer = (props) => {
  const today = new Date()
  const yesterday = new Date(today)

  yesterday.setDate(yesterday.getDate() - 1)

  var dateString = yesterday.getFullYear() + "-" + (yesterday.getMonth() + 1) + "-" + yesterday.getDate();

  const href = `&date=${dateString}`;
  return (
    <StyledFooter>
      <a href={href} >Yesterday`s Picture</a>
    </StyledFooter>
  );
};

export default Footer;