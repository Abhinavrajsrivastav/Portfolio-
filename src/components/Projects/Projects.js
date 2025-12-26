import { Col, Container, Row } from "react-bootstrap";
import AyodhyaDham from "../../Assets/Projects/AyodhyaDham.jpg";
import Educome from "../../Assets/Projects/Educome.jpg";
import Interview from "../../Assets/Projects/Interview.jpg";
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
              title="Educome - AI Hackathon Matching Platform"
              description="Intelligent platform for identifying and matching right candidates for hackathons using Google's Gemini AI. Features project matching, skill-based recommendations, and developer rating systems. Built with React.js, Google Gemini API, Firebase, and MySQL."
              ghLink="https://github.com/Abhinavrajsrivastav/Educome"
              demoLink="https://ai.google.dev/competition/projects/educome"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AyodhyaDham}
              isBlog={false}
              title="Ayodhya Dham - Cultural Tourism Platform"
              description="Trip planning and cultural discovery platform for exploring historical sites, temples, events, and attractions in Ayodhya. Provides comprehensive guides, itineraries, and insights for cultural tourism. Built with React.js, Google Cloud, and interactive mapping."
              ghLink="https://github.com/Abhinavrajsrivastav/AyodhyaDham"
              demoLink="https://ayodhya-dham.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Interview}
              isBlog={false}
              title="Interview Management Dashboard"
              description="Full-stack interview management system with real-time video conferencing, interview scheduling, and candidate tracking. Features real-time video calls, secure authentication via Firebase, and MySQL database for data management."
              ghLink="https://github.com/Abhinavrajsrivastav/InterviewDashboard"
              demoLink="https://interview-dashboard.onrender.com/"
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
              imgPath={Interview}
              isBlog={false}
              title="Music Player Application"
              description="Web-based music player with playlist management, shuffle/repeat functionality, and responsive UI. Demonstrates JavaScript fundamentals and DOM manipulation."
              ghLink="https://github.com/Abhinavrajsrivastav/MusicPlayer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Interview}
              isBlog={false}
              title="Gemini AI Clone"
              description="AI-powered chatbot leveraging Google's Gemini API for intelligent conversational responses. Demonstrates API integration and modern React patterns."
              ghLink="https://github.com/Abhinavrajsrivastav/GeminiClone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Interview}
              isBlog={false}
              title="YouTube Search Optimizer"
              description="Search optimization tool for YouTube with advanced filtering and sorting capabilities. Demonstrates API integration with third-party services."
              ghLink="https://github.com/Abhinavrajsrivastav/YouTubeOptimizer"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
