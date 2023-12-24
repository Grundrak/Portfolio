/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import "../pages/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

function ProjectCard(props) {
  return (
<Card className="project-card-view">
  <Card.Img variant="top" src={props.imgPath} alt="card-img" />
  <a href={props.ghLink} target="_blank" rel="noopener noreferrer" className="viewbtn">

  <FontAwesomeIcon className="viewbtn h-32 w-32 cursor-pointer " icon={faGithub} />
  </a>
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text className="text-justify mb-3" >
      {props.description}
    </Card.Text>
    {props.demoLink && (
  <a href={props.demoLink} target="_blank" rel="noopener noreferrer" className="demo-icon">
    <FontAwesomeIcon className="h-22 w-22 cursor-pointer" icon={faGlobe} />
  </a>
)}
  </Card.Body>
</Card>
  );
}
export default ProjectCard;