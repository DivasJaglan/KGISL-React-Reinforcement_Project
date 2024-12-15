import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

function ProjectCard({ img, title, description, link, className }) {
  return (
    <>
      <img src={img} alt="" />
      <Carousel.Caption>
        <h3 className={className}>{title}</h3>
        <p className={className}>{description}</p>
        <Button href={link} variant="outline-info" target="_blank">
          Check Project
        </Button>
      </Carousel.Caption>
    </>
  );
}

export default ProjectCard;
