const ExperienceData = () => {
  const experiences = [
    {
      id: 5,
      company: "JPMorgan Chase & Co.",
      position: "Software Engineer (via MThree)",
      logo: "https://pbs.twimg.com/profile_images/1605200105799401474/9cb5qdVk_400x400.png", // Replace with actual JPMC logo URL if needed
      duration: "April 2026 - Present",
      period: "Current",
      location: "Bengaluru, Karnataka, India",
      type: "On-site",
      status: "Current",
      description: [
        "Onboarded onto the enterprise engineering team, gaining foundational knowledge of internal banking applications and financial systems.",
        "Participated in initial knowledge transfer (KT) sessions, system architecture walkthroughs, and code repos orientation.",
        "Collaborating with cross-functional agile teams to understand business requirements and the secure SDLC lifecycle.",
        "Setting up the local development environment, configuring enterprise-grade toolchains, and assisting in basic debugging and minor feature sprints."
      ],
      skills: ["Java", "Spring Boot", "Enterprise Architecture", "Git", "Agile", "SDLC"],
      achievements: ["Corporate Onboarding", "System Familiarization"]
    },
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
      id: 0, // Assigned 0 to keep it at the top as the most recent/relevant training
      company: "MThree (Wiley Edge)",
      position: "Software Development Graduate Trainee (Java)",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQGwCsz_B7PeWw/company-logo_200_200/company-logo_200_200/0/1719256553345/mthree_logo?e=2147483647&v=beta&t=8FF7gknogA-s98EP7Mij4k29FoSgfGGi1aW_F5-xovE", 
      duration: "Aug 2025 - Oct 2025",
      period: "3 months",
      location: "Remote/Noida",
      type: "Training",
      status: "Completed",
      description: [
        "Underwent rigorous full-stack training focused on Core Java, Advanced Java (J2EE), and Spring Boot ecosystem.",
        "Developed end-to-end applications integrating React.js frontends with high-performance Spring Boot backends and MySQL databases.",
        "Mastered modern DevOps tools including Docker for containerization and Git/GitHub for version control and collaborative development.",
        "Explored distributed systems using Apache Kafka for event-driven architecture.",
        "Refined professional ethics, business communication, and agile methodologies to align with global corporate standards."
      ],
      skills: ["Core Java", "Spring Boot", "React.js", "MySQL", "Docker", "Apache Kafka", "Git", "Agile"],
      achievements: ["Full-stack Proficiency", "Corporate Readiness", "Advanced System Design"]
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
    // {
    //   id: 3,
    //   company: "Google",
    //   position: "Gemini API Developer Competition",
    //   logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
    //   duration: "June 2024 - August 2024",
    //   period: "3 months",
    //   location: "Remote",
    //   type: "Competition",
    //   status: "Completed",
    //   description: [
    //     "Designed and developed Educome, an interactive platform aimed at enhancing educational experiences using generative AI (Google's Gemini).",
    //     "Utilized Google's Gemini API to integrate intelligent features such as Projects Search, Book Search, developer match, developments rating & ranking, and Learn with Generative AI.",
    //     "Frontend: Created responsive UI with React.js and HTML/CSS.",
    //     "Database: Used MySQL database for user's data management and Google's Firebase for user signup/login/logout."
    //   ],
    //   skills: ["React.js", "Gemini API", "Firebase", "MySQL", "HTML", "CSS", "AI Integration", "Generative AI"],
    //   achievements: ["AI platform development", "API integration", "Educational technology"]
    // }
  ];

  const stats = [
    { label: "Companies", value: "5", color: "#3fb983" }, // Updated to 5 to account for JPMC
    { label: "Months", value: "13+", color: "#7dd3fc" },   // Adjusted timeline total
    { label: "Technologies", value: "20+", color: "#f87171" },
    { label: "Projects", value: "7+", color: "#fbbf24" }
  ];

  return { experiences, stats };
};

export default ExperienceData;
