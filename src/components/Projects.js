import ProjectCard from "./ProjectCard";
import "./Projects.css";
import Carousel from "react-bootstrap/Carousel";

const projects = [
  {
    img: "project-1.png",
    title: "Login Dashboard",
    description: "Functional login functionality with added local storage.",
    link: "https://dj-react-task-6.netlify.app",
    className: "text-black",
  },
  {
    img: "project-2.png",
    title: "Guess the number",
    description: "Guess the random number generated.",
    link: "https://dj-react-task-7.netlify.app",
    className: "text-white",
  },
  {
    img: "project-3.png",
    title: "Landing Page",
    description: "A product landing page.",
    link: "https://divas-reinforcement-project-bootstrap.netlify.app",
    className: "text-white ",
  },
  {
    img: "project-4.png",
    title: "Subscription Page",
    description: "A responsive newsletter subscription page",
    link: "https://newsletter-subscribe-dj.netlify.app",
    className: "text-black ",
  },
  {
    img: "project-5.png",
    title: "Recipe Page",
    description: "A simple responsive recipe page.",
    link: "https://dj-recipe-page.netlify.app",
    className: "text-black ",
  },
];
function Projects() {
  return (
    <div className="projects shadow-lg" id="projects">
      <Carousel fade>
        {projects.map((project, index) => (
          <Carousel.Item key="index">
            <ProjectCard
              img={project.img}
              title={project.title}
              description={project.description}
              link={project.link}
              className={project.className}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Projects;
