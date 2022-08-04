import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Alert from 'react-bootstrap/Alert';

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

  //React-Redux getting the store
  const StateStore = useSelector((state) => state.AppReducerStore);
  // console.log(StateStore);

  const dispatch = useDispatch();

  const dummyobject={
    id:1,
    title:"Title here",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aut quisquam iure quae neque commodi autem maiores nobis doloremque deleniti, praesentium eos ea fugit perferendis sapiente ipsa error laudantium consectetur."
  }

  const toastShow =() =>{
    toast.success('Toast Message', {
      position: toast.POSITION.TOP_RIGHT
    });
    toast.error('Toast Message', {
      position: toast.POSITION.TOP_RIGHT
    });
    toast('Toast Message', {
      position: toast.POSITION.TOP_LEFT
    });
  }
  return (
    <Container>
      <ResourcesContainer>
        <h4>Packages Installed</h4>
          <p>material UI</p>
          <p>material UI - Icons</p>
          <p>styled-components</p>
          <p>react-routers</p>
          <p>redux</p>
          <p>react-redux</p>
          <p>react-toastify</p>
          <p>gh-pages</p>
      </ResourcesContainer>
      <ResourcesContainer>
        <h4>Important Resources Links</h4>
        <a href="https://mui.com/material-ui/getting-started/overview/" target="_blank" rel="noreferrer">Material UI</a>
        <a href="https://mui.com/material-ui/material-icons/#main-content" target="_blank" rel="noreferrer">Material UI Icons</a>
        <a href="https://react-bootstrap.github.io/components/alerts/" target="_blank" rel="noreferrer">React Bootstrap</a>
      </ResourcesContainer>
      <ResourcesContainer>
        <h4>React Toastify</h4>
        <Button variant="secondary" onClick={toastShow}>Toast</Button>
      </ResourcesContainer>
      <ResourcesContainer>
        <h4>React Redux</h4>
        <Button variant="secondary"  
        onClick={() =>
            dispatch({
              type: "increment"
            })
          }>Increment Counter</Button>
        <br/>
        <Button variant="secondary" onClick={() =>
            dispatch({
              type: "addObject",
              payload: dummyobject,
            })
          }>Add Object to Store</Button>
          <br/>
          {StateStore.ObjectData.map((obj)=>(<Alert key="success" variant="success">Object Added</Alert>))}
           
      </ResourcesContainer>
      <ResourcesContainer>
        <h4>Ready RestAPI - Node.js Express.js MongoDB</h4>
        <p>GET, POST, DELETE, PUT - test all these</p>
        <p>Add UI(buttons, forms etc) Here and Test</p>
       
      </ResourcesContainer>
      <ResourcesContainer>
        <h4>Custom fonts are integrated</h4>
        <p>This app have custom fonts overall</p>
        <p>To change get links and css from Google fonts add into public/index.html </p>
      </ResourcesContainer>
      <ToastContainer/>
    </Container>
  )
}
export default Resources;