const ExperienceData = () => {
  const experiences = [
    {
      id: 1,
      company: "Sopra Steria",
      position: "Software Engineering Trainee",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxG5LI2mOMTnJWTzdqytcej7YJBFPW4r2opWvr0d1GmXezuNoYJ7ExLD19MgmX65gtQbOvepx",
      duration: "Nov 2025 - Present",
      period: "2 Months",
      location: "Noida, Uttar Pradesh, India",
      type: "On-site",
      status: "Current",
      description: [
        "Working as a Java developer on an enterprise application, delivered via Sopra Steria. ",
        "Developing and enhancing backend modules using Java, Spring Boot, and Struts following layered architecture.",
        "Implementing RESTful APIs and integrating business logic with database layers.",
        "Fixing bugs, optimizing existing code, and improving application performance and stability."
      ],
      skills: ["Java", "Spring Boot", "Apache Kafka", "Struts", "SDLC", "Agile"],
      achievements: ["Real-time data processing", "Performance optimization", "Security implementation"]
    },
    {
      id: 1,
      company: "Ninjacart",
      position: "Software Development Engineer Intern",
      logo: "https://play-lh.googleusercontent.com/Fy1-I-hQwjMFYEfaJqqvasvqcIvQhffFmQ2JeyX0dvMQDsLV7WObuH_7rkvlmqBGA1g",
      duration: "April 2025 - June 2025",
      period: "3 months",
      location: "Bengaluru, Karnataka, India",
      type: "On-site",
      status: "Current",
      description: [
        "Architected a high-performance, Multi-tenant event-driven system with Apache Kafka for real-time data streaming and processing.",
        "Implementing innovative deduplication strategies using Cuckoo Filters for efficient data handling.",
        "Built a secure multi-tenant system with realm-based data isolation and AES-256 encryption for sensitive financial data.",
        "Integrating with Spring AI's Model Context Protocol (55+ MCP Tools) and Server-Sent Events (SSE) for AI model communication.",
        "Optimized performance through Redis caching, Java 21 Virtual Threads, adaptive batch processing, and database pooling."
      ],
      skills: ["Java", "Spring Boot", "Apache Kafka", "Redis", "AES-256", "Microservices", "Multi-tenant Architecture"],
      achievements: ["Real-time data processing", "Performance optimization", "Security implementation"]
    },
    {
      id: 2,
      company: "Sopra Steria",
      position: "Software Development Externship",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxG5LI2mOMTnJWTzdqytcej7YJBFPW4r2opWvr0d1GmXezuNoYJ7ExLD19MgmX65gtQbOvepx",
      duration: "October 2024 - November 2024",
      period: "2 months",
      location: "Noida, Uttar Pradesh, India",
      type: "Hybrid",
      status: "Completed",
      description: [
        "Built & deployed an interview dashboard with real-time video conferencing and interview management features.",
        "Backend: Developed backend APIs for creating, ending, and joining a meeting using Java and Spring Boot.",
        "Frontend: Designed a responsive interface using React.js and HTML/CSS.",
        "Database: Store meeting users data using MySQL and user signup/login with Google Firebase."
      ],
      skills: ["React.js", "Java", "Spring Boot", "MySQL", "Firebase", "HTML", "CSS", "Video Conferencing"],
      achievements: ["Full-stack development", "Real-time features", "Database design"]
    },
    {
      id: 3,
      company: "Google",
      position: "Gemini API Developer Competition",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
      duration: "June 2024 - August 2024",
      period: "3 months",
      location: "Remote",
      type: "Competition",
      status: "Completed",
      description: [
        "Designed and developed Educome, an interactive platform aimed at enhancing educational experiences using generative AI (Google's Gemini).",
        "Utilized Google's Gemini API to integrate intelligent features such as Projects Search, Book Search, developer match, developments rating & ranking, and Learn with Generative AI.",
        "Frontend: Created responsive UI with React.js and HTML/CSS.",
        "Database: Used MySQL database for user's data management and Google's Firebase for user signup/login/logout."
      ],
      skills: ["React.js", "Gemini API", "Firebase", "MySQL", "HTML", "CSS", "AI Integration", "Generative AI"],
      achievements: ["AI platform development", "API integration", "Educational technology"]
    }
  ];

  const stats = [
    { label: "Companies", value: "3", color: "#3fb983" },
    { label: "Months", value: "8+", color: "#7dd3fc" },
    { label: "Technologies", value: "15+", color: "#f87171" },
    { label: "Projects", value: "5+", color: "#fbbf24" }
  ];

  return { experiences, stats };
};

export default ExperienceData;
