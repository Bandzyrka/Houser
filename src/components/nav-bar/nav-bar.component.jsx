import React from "react";
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
import './nav-bar.styles.scss'
const NavBar = () => (
    
<Navbar bg="light" expand="lg" fixed="top" className='nav-bar'>
  <Container>
    <Navbar.Brand className='nav-bar-title'>Houser</Navbar.Brand>
    <Navbar.Collapse >
      <Nav className="ms-auto">
        <NavDropdown>
          <NavDropdown.Item >Home</NavDropdown.Item>
          <NavDropdown.Item >Search</NavDropdown.Item>
          <NavDropdown.Item >Buy property</NavDropdown.Item>
          <NavDropdown.Item >Rent property</NavDropdown.Item>          
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)

export default NavBar