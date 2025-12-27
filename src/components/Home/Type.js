import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Aspiring Problem Solver",
          "Java Full-Stack Developer",
          "Spring Boot & React.js Developer",
          "Cloud & Microservices Enthusiast",
          "AI-Driven Application Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
