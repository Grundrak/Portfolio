import ProjectCard from "../components/Projectcard";
import { Container, Row, Col } from "react-bootstrap";
import oldportfolio from "../Assets/images/Old portfolio.png";
import day8 from "../Assets/images/Project-day-8.png";
import day7 from "../Assets/images/Project-day-7.png";
import day from "../Assets/images/Project-day-.png";
import todolist from "../Assets/images/todolist.png";
import project from "../Assets/images/E-commerce.png";
import "../pages/style.css";


function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
              <ProjectCard
                imgPath={project}
                title="E-commerce  Digital Product"
                description="This project is an E-commerce platform specifically designed for digital products. Built with a focus on user experience, it features product listings, a shopping cart, user authentication. It demonstrates a deep understanding of e-commerce workflows and the technical challenges involved in building a robust online marketplace."
                ghLink=""
                demoLink="/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={oldportfolio}
                title="My old Porftolio"
                description="This is my First portfolio i made only using HTML and CSS. I made this portfolio when i was learning HTML and CSS."
                ghLink="https://github.com/Grundrak/Portfolio.github.io"
                demoLink="https://vercel.com/grundraks-projects/portfolio-github-io"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                title="Todo List"
                description="A dynamic and user-friendly Todo List application built with React and styled using Tailwind CSS. The application allows users to add, complete, and delete tasks, providing an efficient way to manage daily activities.
                "
                ghLink="https://github.com/Grundrak/Todolist"
                demoLink="https://todolist-five-liart-27.vercel.app/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={day7}
                title="Grid Clone"
                description="Its simple Greed maded by using HTML and CSS reasen for master css grid."
                ghLink="https://github.com/Grundrak/Day7"
                demoLink="/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={day8}
                title="Delivery Clone"
                description="Maded this clone using HTML and CSS for more understanding of CSS flexbox."
                ghLink="https://github.com/Grundrak/Day8"
                demoLink="/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={day}
                title="Website Clone"
                description="This project is a meticulous clone of a website, demonstrating a keen eye for detail and a strong understanding of modern web development techniques. It replicates the original site's functionality and design, providing a seamless user experience."
                ghLink="https://github.com/Grundrak/Day5"
                demoLink="/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;