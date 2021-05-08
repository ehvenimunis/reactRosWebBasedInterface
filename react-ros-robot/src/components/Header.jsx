import React, { Component } from "react";
import {Container, Navbar, Nav, TabContainer} from "react-bootstrap";

class Header extends Component {
  render() {
    return ( 
    <Container>
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
    <Navbar.Brand href="#home">React Ros Robot</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Map">Map</Nav.Link>
        <Nav.Link href="/About">About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </Container>
  
   );
  }
}

export default Header;
