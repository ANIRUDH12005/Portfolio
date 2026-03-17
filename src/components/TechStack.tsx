import { memo } from "react";
import "./styles/WhatIDo.css";

const TechStack = () => {
  const techStackItems = [
    "React.js",
    "Angular",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Material UI",
    "HTML5",
    "CSS3",
    "Node.js",
    "NestJS",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "REST APIs",
    "Microservices",
    "Python",
  ];

  return (
    <div className="techstack" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h2>My Techstack</h2>

      <div className="what-content-flex" style={{ justifyContent: "center", maxWidth: "800px", gap: "15px", marginTop: "120px", zIndex: 10 }}>
        {techStackItems.map((item, index) => (
          <div key={index} className="what-tags" style={{ fontSize: "16px", padding: "8px 16px" }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(TechStack);
