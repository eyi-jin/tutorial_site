import logo_big from "../img/rust_logo_colored.png";
import { Button } from "react-bootstrap";
import { Figure } from "react-bootstrap";
import Navigation from "../components/Navigation";

function Home() {
  return (
    <div className="App">
      <Navigation />
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

export default Home;
