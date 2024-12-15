import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./Hero.css";
import owner from "../assets/developer.png";

function Hero() {
  return (
    <Container fluid className="d-flex hero text-white m-0" id="hero">
      <div className="intro">
        <p>
          Hi, I'm
          <h1>Divas Jaglan</h1>a Frontend Developer
        </p>
        <p className="fs-5">
          Building functional, beautiful, and scalable web applications.
        </p>
        <div className="call-to-action d-flex gap-3 flex-column flex-md-row justify-content-center align-content-center">
          <Button
            href="#projects"
            variant="outline-info"
            className="align-self-center"
          >
            View My Work
          </Button>
          <Button
            href="#"
            variant="outline-warning"
            className="align-self-center"
          >
            Contact Me
          </Button>
        </div>
      </div>
      <div className="image-container">
        <img src={owner} alt="" width={200} className="profile-img" />
      </div>
    </Container>
  );
}

export default Hero;
