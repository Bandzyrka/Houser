import React from "react";
import {Link} from "react-router-dom"
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
import './nav-bar.styles.scss'
const NavBar = () => (
    
<Navbar bg="light" expand="lg" fixed="top" className='nav-bar'>
  <Container>
    <Link className='nav-bar-title' to="/">Houser</Link>
    <Navbar.Collapse >
      <Nav className="ms-auto">
        <NavDropdown>
          <NavDropdown.Item as="li"><Link to="/">Home </Link></NavDropdown.Item>
          <NavDropdown.Item as="li"><Link to="/search">Search </Link></NavDropdown.Item>
          <NavDropdown.Item as="li"><Link to="/search?purpose=for-sale">For Sale </Link></NavDropdown.Item>
          <NavDropdown.Item as="li"><Link to="/search?purpose=for-rent">For Rent </Link></NavDropdown.Item>          
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)

export default NavBar