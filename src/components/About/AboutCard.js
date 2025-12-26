import Card from "react-bootstrap/Card";
import "./AboutCard.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I'm <span className="purple">Abhinav Raj Srivastava</span>{" "}
            from <span className="purple">Ayodhya, Uttar Pradesh</span>.
            <br />
            I'm a <span className="purple">Software Engineer at Sopra Steria</span>{" "}
            specializing in <span className="purple">Java, Spring Boot, Struts, MYSQL, Oracle DB, Kafka, scalable, cloud-native systems</span>.
            <br />I graduated with a B.Tech in July 2025 from <span className="purple">Computer Science (AIML)</span> from{" "}
            <span className="purple">ABES Engineering College, Ghaziabad</span>.
            <br />
            <br />
            I specialize in:
          </p>

          <ul>
            <li className="about-activity">
            Java Full-Stack Development 
            </li>
            <li className="about-activity">
            Microservices Architecture & RESTful APIs With Spring and Spring Boot
            </li>
            <li className="about-activity">
              AI-Powered Platform Development (Spring Ai, LLM Models, MCP Servers, MCP Clients) 🤖
            </li>
            <li className="about-activity">
               Cloud Computing & DevOps With CICD, Kafka, Redis and Docker ☁️
            </li>
            <li className="about-activity">
            Open Source Contribution 🌟
            </li>
            <li>
            Tech Blogging & Community Engagement ✍️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building scalable, innovative solutions that make a real impact!"{" "}
          </p>
          <footer className="blockquote-footer">Abhinav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
