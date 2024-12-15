import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import "./Header.css";
function Header() {
  return (
    <Navbar expand="lg" className="bg-black m-0" sticky="top" id="home">
      <Container fluid>
        <Navbar.Brand href="#hero">
          <img src={logo} alt="Brand Name" width={70} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#hero" className="link text-white-50">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="link text-white-50">
              About
            </Nav.Link>

            <Nav.Link href="#projects" className="link text-white-50">
              Projects
            </Nav.Link>
            <Nav.Link href="#skills" className="link text-white-50">
              Skills
            </Nav.Link>
            <Nav.Link href="#footer" className="link text-white-50">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
