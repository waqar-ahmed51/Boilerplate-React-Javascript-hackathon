import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
min-height: calc(100vh - 59px - 66px);
display: flex;
justify-content: center;
align-items: center;
`;
const Home = () => {
  return (
    <Container>
      <h4>Boilerplaer Homes - Go to resources</h4>
    </Container>
  )
}

export default Home;