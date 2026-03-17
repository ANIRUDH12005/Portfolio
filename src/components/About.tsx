import { memo } from "react";
import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a 3rd-year B.Tech Computer Science Engineering student passionate about full-stack web development.
          Skilled in C++, Python, JavaScript, and the MERN Stack. My coursework includes Data Structures & Algorithms,
          Object-Oriented Programming, DBMS, and Operating Systems. I love building robust web applications and solving
          complex problems.
        </p>
      </div>
    </div>
  );
};

export default memo(About);
