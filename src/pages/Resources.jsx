import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const Container = styled.div`
min-height: calc(100vh - 59px - 66px);
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const ResourcesContainer=styled.div`
background-color: #e4e4e4;
display: flex;
flex-direction: column;
width: 40%;
border-radius: 10px;
padding: 20px;
align-items: center;
margin: 10px;
`;
const Resources = () => {
  return (
    <Container>
      <ResourcesContainer>
        <h4>Important Resources Links</h4>
        <a href="https://mui.com/material-ui/getting-started/overview/" target="_blank" rel="noreferrer">Material UI</a>
        <a href="https://mui.com/material-ui/material-icons/#main-content" target="_blank" rel="noreferrer">Material UI Icons</a>
        <a href="https://react-bootstrap.github.io/components/alerts/" target="_blank" rel="noreferrer">React Bootstrap</a>
      </ResourcesContainer>
      <ResourcesContainer>
        <h4>React Toastify</h4>
        <Button variant="secondary">Toast</Button>
      </ResourcesContainer>
    </Container>
  )
}
export default Resources;