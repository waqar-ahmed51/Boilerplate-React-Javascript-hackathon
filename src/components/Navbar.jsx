import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const NavbarHeader = () => {
  return (
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
      <Container>
      <Link to="/" className="CustomRouterLink"><Navbar.Brand >Home</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link><Link to="/boilerplate" className="CustomRouterLink">Boilerplate</Link></Nav.Link>
          </Nav>
          <Nav>
          <Badge badgeContent={4} color="primary">
              <MailIcon color="action" />
          </Badge>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarHeader;