import { Container, Row, Col } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { skillsData } from "../data/SkillsData";
import { skillsImage } from "../utils/SkillsImage";
import "../pages/style.css";

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext mb-3">
              About <span>Me</span>
            </h3>
            <p className="aboutdetails justify-normal">
              As a recent full-stack developer bootcamp graduate, I have shifted
              my career from industrial to information technology
              with a strong emphasis on JavaScript and the MERN stack. This
              comprehensive program honed my skills in MongoDB, Express.js,
              React.js, and Node.js, equipping me with the tools necessary to
              construct and maintain full-scale web applications.
              <br/> <br/>My approach to
              development is rooted in my analytical acumen derived from my
              engineering background and strengthened by the versatility of
              JavaScript.
              <br/><br/> I am now actively seeking opportunities to apply these
              skills in practical settings, and my portfolio is a testament to
              my dedication and to the technical capabilities I have garnered to
              date. I am keen on joining an organization where I can contribute
              meaningfully while continuing to enhance my proficiencies in
              full-stack development.
            </p>
            <div className="skillsContainer">
              <div className="skill--scroll">
                <Marquee
                  gradient={false}
                  speed={100}
                  pauseOnClick={true}
                  delay={0}
                  play={true}
                  direction="right"
                >
                  {skillsData.map((skill, id) => (
                    <div className="skill--box" key={id}>
                      <img
                        className="skill-image"
                        src={skillsImage(skill)}
                        alt={skill}
                      />
                      <p>{skill}</p>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <div className="webimage"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;
