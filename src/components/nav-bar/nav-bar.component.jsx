import React from "react";
import {Link} from "react-router-dom"
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
import './nav-bar.styles.scss'
const NavBar = () => (
    
<Navbar bg="light" expand="lg" fixed="top" className='nav-bar'>
  <Container>
    <Navbar.Brand className='nav-bar-title'>Houser</Navbar.Brand>
    <Navbar.Collapse >
      <Nav className="ms-auto">
        <NavDropdown>
          <NavDropdown.Item ><Link to="/">Home </Link></NavDropdown.Item>
          <NavDropdown.Item ><Link to="/search">Search </Link></NavDropdown.Item>
          <NavDropdown.Item ><Link to="/search?purpose=for-sale">For sale </Link></NavDropdown.Item>
          <NavDropdown.Item ><Link to="/search?purpose=for-rent">For Rent </Link></NavDropdown.Item>          
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)

export default NavBar