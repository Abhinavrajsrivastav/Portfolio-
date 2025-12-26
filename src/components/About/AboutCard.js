import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I'm <span className="purple">Abhinav Raj Srivastava</span>{" "}
            from <span className="purple">Ghaziabad, Uttar Pradesh</span>.
            <br />
            I'm a <span className="purple">Full-Stack Software Engineer</span>{" "}
            specializing in <span className="purple">scalable, cloud-native systems</span>.
            <br />I graduated with a B.Tech in <span className="purple">Computer Science (AIML)</span> from{" "}
            <span className="purple">ABES Engineering College, Ghaziabad</span>.
            <br />
            <br />
            I specialize in:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Multi-Tenant Architecture Design 🏗️
            </li>
            <li className="about-activity">
              <ImPointRight /> Real-Time Data Processing Systems ⚡
            </li>
            <li className="about-activity">
              <ImPointRight /> AI-Powered Platform Development 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Cloud Technologies & Microservices ☁️
            </li>
            <li className="about-activity">
              <ImPointRight /> Open Source Contribution 🌟
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
