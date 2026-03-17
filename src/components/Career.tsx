import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Team Leader (Finalist Team)</h4>
                <h5>Smart India Hackathon (SIH)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Led a development team during the Smart India Hackathon project development phase.
              Coordinated team collaboration, feature implementation, and prototype development.
              Managed project workflow and presented the solution to evaluators.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications & Achievements</h4>
                <h5>Kotlin Training & 4+ MERN Apps</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed Kotlin Training Certification. Developed 4+ Full Stack Applications using the MERN stack. Strong foundation in Data Structures & Algorithms using C++.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Education</h4>
                <h5>B.Tech in Computer Science Engineering</h5>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              Currently pursuing my 3rd year in B.Tech CSE. Relevant coursework includes Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, and Web Development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
