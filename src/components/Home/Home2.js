import { Col, Container, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Full-Stack Software Engineer passionate about building 
              scalable, production-grade systems. I specialize in cloud-native 
              applications, real-time data processing, and AI-powered platforms.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  Java, Python, JavaScript, Spring Boot, and React.js{" "}
                </b>
              </i>
              — with expertise in both backend microservices and modern frontend frameworks.
              <br />
              <br />
              My key areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  Multi-Tenant Architecture Design, Real-Time Data Processing,{" "}
                </b>
              </i>
              Cloud Technologies, and building AI-driven solutions.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Spring Boot </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b>,{" "}
                <b className="purple">Kafka</b>, and <b className="purple">Redis</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
