import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../img/rust_logo.png";

function Navigation() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#Home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="Rust-logo"
            />{" "}
            Rust-Tutorial
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Tutorial">Tutorial</Nav.Link>
              <Nav.Link href="#Reference">Reference</Nav.Link>
              <Nav.Link href="#Practice">Practice</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br></br>
    </div>
  );
}

export default Navigation;
