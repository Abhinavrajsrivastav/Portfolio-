import { Container } from "react-bootstrap";
import ExperienceData from "../../Data/ExperienceData";
import "./Experience.css";

function Experience() {
  const { experiences } = ExperienceData();

  return (
    <section className="experience-section" id="experience">
      <Container>
        <div className="experience-title">
          <h2>
            Professional <span>Experience</span>
          </h2>
          <p>Industry experience and impactful contributions</p>
        </div>

        <div className="timeline">
          {experiences.map((exp) => (
            <div className="timeline-card" key={exp.id}>
              <span className="timeline-dot" />

              <div className="card-box">
                <div className="card-header">
                  <div className="card-left">
                    {/* Company Logo */}
                    <div className="company-logo">
                      <img src={exp.logo} alt={`${exp.company} logo`} />
                    </div>

                    {/* Role & Company */}
                    <div>
                      <div className="role">{exp.position}</div>
                      <div className="company">{exp.company}</div>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="duration">{exp.period}</div>
                </div>

                <div className="meta">
                  {exp.location} · {exp.type}
                </div>

                <ul className="points">
                  {exp.description.slice(0, 4).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Experience;
