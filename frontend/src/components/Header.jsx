import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="navbar-expand-lg bg-dark" expand="lg" variant="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/">Gabriel OnlyFans</Navbar.Brand> {/* Returns back to Homescreen */}
        <Navbar.Toggle aria-controls="navbarColor02" />
        <Navbar.Collapse id="navbarColor02">
          <Nav className="me-auto">
            <Nav.Link href="/cart">
                Cart
              <span className="visually-hidden">(current)</span>
            </Nav.Link>
            <Nav.Link href="/user">
                User
            </Nav.Link>
            <NavDropdown title="Options" id="basic-nav-dropdown" className="nav-item dropdown">
              <NavDropdown.Item href="#" className="dropdown-item">
                Bathwater
              </NavDropdown.Item>
              <NavDropdown.Divider className="dropdown-divider" />
              <NavDropdown.Item href="#" className="dropdown-item">
                Leaked pics
              </NavDropdown.Item>
              <NavDropdown.Divider className="dropdown-divider" />
              <NavDropdown.Item href="#" className="dropdown-item">
                Chat with gab
              </NavDropdown.Item>
              <NavDropdown.Divider className="dropdown-divider" />
              <NavDropdown.Item href="#" className="dropdown-item">
                Donate to gab
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>  
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
