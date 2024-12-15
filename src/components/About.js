import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./About.css";

function About() {
  return (
    <section
      id="about"
      className="about-section py-5 bg-light m-0 text-white bg-black"
    >
      <Container fluid>
        <h2 className="text-center mb-4">About Me</h2>
        <Row className=" justify-content-center">
          <div className="col-md-8 text-center">
            <p className="lead align-self-start">
              Hi! I'm <span className="highlight">Divas Jaglan</span>, a
              passionate
              <span className="highlight"> Frontend Developer</span> based in
              Delhi, India. With expertise in
              <strong> HTML, CSS, JavaScript, and React</strong>, I specialize
              in creating responsive and dynamic user interfaces that deliver
              seamless user experiences.
            </p>
            <p className="">
              After completing my <strong>B.Sc. in Computer Science</strong>{" "}
              from Bhaskaracharya College of Applied Sciences, I gained hands-on
              experience during my internship at
              <strong> Mainflow Services</strong>, where I optimized React
              components and collaborated in an Agile environment.
            </p>
            <p>
              My recent work includes a <strong>React To-Do App</strong>,
              showcasing my ability to develop efficient and scalable solutions
              using modern libraries. I thrive in startup environments and enjoy
              tackling challenges that push the boundaries of web development.
            </p>
            <p>
              Beyond coding, I’m passionate about volunteering and leading
              initiatives, always eager to learn, connect, and create something
              impactful. Let’s build something incredible together!
            </p>
            <div className="buttons d-flex gap-3 justify-content-center">
              <Button href="#contact" variant="outline-primary">
                Get in Touch
              </Button>

              <Button
                href="resume.pdf"
                download="Divas_Resume.pdf"
                variant="outline-info"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default About;
