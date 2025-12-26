import { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaCertificate, FaCode, FaMedal, FaStar, FaTrophy } from "react-icons/fa";
import AchievementData from "../../Data/AchievementData";
import "./Achivements.css";

function Achivements() {
  const [isVisible, setIsVisible] = useState(false);
  const achievementsRef = useRef(null);
  const { AchievementsData, certificationsData, Hackathons } = AchievementData();

  // Set up intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (achievementsRef.current) {
      observer.observe(achievementsRef.current);
    }

    return () => {
      if (achievementsRef.current) {
        observer.unobserve(achievementsRef.current);
      }
    };
  }, []);

  const achievementStats = [
    { icon: <FaCode />, number: "1564+", label: "LeetCode Rating", color: "#FFA116" },
    { icon: <FaTrophy />, number: "900+", label: "Problems Solved", color: "#12c5ca" },
    { icon: <FaStar />, number: "15+", label: "GitHub Stars", color: "#2a62fc" },
    { icon: <FaMedal />, number: "10+", label: "Certifications", color: "#ff6b6b" }
  ];

  return (
    <section className="achievements-section" id="achievements" ref={achievementsRef}>
      <Container>
        <Row className="mb-5">
          <Col md={12} className="text-center">
            <h1 className="heading">
              My <strong className="purple">Achievements</strong>
            </h1>
            <p className="achievements-subtitle">
              Milestones and recognitions in my journey
            </p>
          </Col>
        </Row>

        {/* Achievement Stats */}
        <Row className="achievement-stats mb-5">
          {achievementStats.map((stat, index) => (
            <Col xs={6} md={3} key={index} className="mb-4">
              <div 
                className={`stat-card ${isVisible ? 'animate-stat-card' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stat-icon" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <div className="stat-content">
                  <div className="stat-number" style={{ color: stat.color }}>
                    {stat.number}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Competitive Programming Achievements */}
        <Row className="achievement-category mb-5">
          <Col md={12}>
            <h3 className="category-title mb-4">
              <FaTrophy className="category-icon" /> Competitive Programming
            </h3>
          </Col>
          {AchievementsData.map((data, index) => (
            <Col xs={12} md={6} lg={4} key={index} className="mb-4">
              <div 
                className={`achievement-card ${isVisible ? 'animate-achievement-card' : ''}`}
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <div className="achievement-image">
                  <img src={data.src} alt={data.name} />
                  <div className="achievement-overlay">
                    <FaTrophy className="overlay-icon" />
                  </div>
                </div>
                <div className="achievement-content">
                  <h4 className="achievement-name">{data.name}</h4>
                  <p className="achievement-description">{data.about}</p>
                  <div className="achievement-techs mb-3">
                    {data.techs.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a 
                    href={data.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="achievement-link btn btn-sm btn-outline-primary"
                  >
                    View Achievement
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Certifications */}
        <Row className="achievement-category mb-5">
          <Col md={12}>
            <h3 className="category-title mb-4">
              <FaCertificate className="category-icon" /> Professional Certifications
            </h3>
          </Col>
          {certificationsData.map((data, index) => (
            <Col xs={12} md={6} lg={4} key={index} className="mb-4">
              <div 
                className={`certification-card ${isVisible ? 'animate-certification-card' : ''}`}
                style={{ animationDelay: `${(index + AchievementsData.length + 4) * 0.1}s` }}
              >
                <div className="certification-badge mb-3">
                  <img src={data.src} alt={data.name} />
                </div>
                <div className="certification-info">
                  <h4 className="certification-name">{data.name}</h4>
                  <p className="certification-org text-muted">{data.org}</p>
                  <p className="certification-description">{data.about}</p>
                  <div className="certification-skills mb-3">
                    {data.techs.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="skill-chip">{tech}</span>
                    ))}
                  </div>
                  <a 
                    href={data.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="certification-verify btn btn-sm btn-outline-success"
                  >
                    Verify
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Hackathons */}
        <Row className="achievement-category">
          <Col md={12}>
            <h3 className="category-title mb-4">
              <FaCode className="category-icon" /> Hackathon Participations
            </h3>
          </Col>
          {Hackathons.map((data, index) => (
            <Col xs={12} md={6} lg={4} key={index} className="mb-4">
              <div 
                className={`hackathon-card ${isVisible ? 'animate-hackathon-card' : ''}`}
                style={{ animationDelay: `${(index + AchievementsData.length + certificationsData.length + 4) * 0.1}s` }}
              >
                <div className="hackathon-banner">
                  <img src={data.src} alt={data.name} />
                  <div className="hackathon-status">
                    <span className="status-badge">Participated</span>
                  </div>
                </div>
                <div className="hackathon-details">
                  <h4 className="hackathon-name">{data.name}</h4>
                  <p className="hackathon-org text-muted">{data.org}</p>
                  <p className="hackathon-description">{data.about}</p>
                  <div className="hackathon-technologies mb-3">
                    {data.techs.length > 0 ? (
                      data.techs.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-badge">{tech}</span>
                      ))
                    ) : (
                      <span className="text-muted">No tech specified</span>
                    )}
                  </div>
                  <a 
                    href={data.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="certification-verify btn btn-sm btn-outline-info"
                  >
                    Verify
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Achivements;
