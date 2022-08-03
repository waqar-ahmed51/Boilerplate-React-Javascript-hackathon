import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  margin: 20px 0px 0px 0px;
  padding: 15px 0px 0px 0px;
  border-top: 1px solid #b7b7b7;
  margin-top: auto;
`;

const Copyrights = styled.div`
  height: 30px;
  background-color: #abe9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  margin-top: 20px;
`;

const Developer = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: center;
  cursor: pointer;
  margin-left: 5px;
  &:hover {
    color: #000000;
    transition: all 0.3s ease;
    font-size: 18px;
  }
`;


const Footer = () => {
  return (
    <Container>
      Footer content here
      <Copyrights>
        © All Rights Reserved. Designed & Developed by
        <Developer> WAQAR AHMED</Developer>
      </Copyrights>
    </Container>
  )
}

export default Footer;