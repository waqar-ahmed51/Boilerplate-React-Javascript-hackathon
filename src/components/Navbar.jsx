import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import styled from "styled-components";

const Wrapper=styled.div`
padding: 7px 40px;
background-color: #abe9f9;
`;

const NavbarTop = () => {
  return (
    <Wrapper>
      <Navbar collapseOnSelect expand="md" >
      <Link to="/" className="CustomRouterLink"><Navbar.Brand >Home</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/resources" className="CustomRouterLink mynavlink">resources</Link>
          </Nav>
          <Nav>
          <Badge badgeContent={4} color="primary">
              <MailIcon color="action" />
          </Badge>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </Wrapper>
  )
}

export default NavbarTop;