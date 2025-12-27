import { Col, Container, Row } from "react-bootstrap";
import AyodhyaDham from "../../Assets/Projects/AyodhyaDham.png";
import Hindlish from "../../Assets/Projects/Cold-pay.png";
import Interview from "../../Assets/Projects/columbae.png";
import Educome from "../../Assets/Projects/educome.png";
import YTS from "../../Assets/Projects/yts.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently. Each represents a significant learning milestone and real-world application of my skills.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Educome}
              isBlog={false}
              title="Educome - AI Developer Centric Platform"
              description="Intelligent platform for identifying and matching right candidates for hackathons using Google's Gemini AI. Features project matching, skill-based recommendations, and developer rating systems. Built with React.js, Google Gemini API, Firebase, and MySQL."
              ghLink="https://github.com/Abhinavrajsrivastav/pacifics-path"
              demoLink="https://abhinavrajsrivastav.github.io/pacifics-path/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AyodhyaDham}
              isBlog={false}
              title="Ayodhya Dham - Cultural Tourism Platform"
              description="Trip planning and cultural discovery platform for exploring historical sites, temples, events, and attractions in Ayodhya. Provides comprehensive guides, itineraries, and insights for cultural tourism. Built with React.js, Google Cloud, and interactive mapping."
              ghLink="https://github.com/Abhinavrajsrivastav/ADHM"
              demoLink="https://ayodhyadham.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Interview}
              isBlog={false}
              title="Interview Management Dashboard"
              description="Full-stack interview management system with real-time video conferencing, interview scheduling, and candidate tracking. Features real-time video calls, secure authentication via Firebase, and MySQL database for data management."
              ghLink="https://github.com/Abhinavrajsrivastav/cloud-octo-eureka"
              demoLink="https://educloud-dcra.onrender.com/"
            />
          </Col>
        </Row>

        <h1 className="project-heading" style={{ marginTop: "50px" }}>
          Practice <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white", marginBottom: "30px" }}>
          Building foundational skills and exploring new technologies.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hindlish}
              isBlog={false}
              title="Music Player Application"
              description="Web-based music player with playlist management, shuffle/repeat functionality, and responsive UI. Demonstrates JavaScript fundamentals and DOM manipulation."
              ghLink="https://github.com/Abhinavrajsrivastav/React-Projects/tree/master/Musics/hinlish"
              demoLink="https://healsync.onrender.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Interview}
              isBlog={false}
              title="Gemini AI Clone"
              description="AI-powered chatbot leveraging Google's Gemini API for intelligent conversational responses. Demonstrates API integration and modern React patterns."
              ghLink="https://github.com/Abhinavrajsrivastav/GeminiClone"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={YTS}
              isBlog={false}
              title="YouTube Search Optimizer"
              description="Search optimization tool for YouTube with advanced filtering and sorting capabilities. Demonstrates API integration with third-party services."
              ghLink="https://github.com/Abhinavrajsrivastav/SpringBootProjects/tree/main/moviefinder"
              demoLink="https://www.linkedin.com/posts/abhinav-raj-srivastav-599aaa1b2_springboot-javascripts-java-activity-7155206688197758977-9tIt?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
