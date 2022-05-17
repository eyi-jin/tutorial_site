import "./Home.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../img/rust_logo.png";
import logo_big from "../img/rust_logo_colored.png";
import { Button } from "react-bootstrap";
import { Figure } from "react-bootstrap";

function App() {
  return (
    <div className="App">
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

      <Figure>
        <Figure.Image width="400" height="400" alt="rust logo" src={logo_big} />
        <h1>Rust 학습 페이지에 오신 걸 환영합니다!</h1>
      </Figure>
      <div className="d-grid gap-2 col-4 mx-auto">
        <Button variant="secondary" href="#Tutorial" size="lg">
          Tutorial
        </Button>
        {""}
        <Button variant="dark" href="#Reference" size="lg">
          Reference
        </Button>
        {""}
        <Button variant="secondary" href="#Practice" size="lg">
          Practice
        </Button>
        {""}
      </div>
      <br></br>
    </div>
  );
}

export default App;
