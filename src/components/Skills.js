import "./Skills.css";
const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML", icon: "html-icon" },
      { name: "CSS", icon: "css-icon" },
      { name: "JavaScript", icon: "js-icon" },
      { name: "React", icon: "react-icon" },
      { name: "Bootstrap", icon: "bootstrap-icon" },
    ],
  },

  {
    category: "Tools",
    items: [
      { name: "Git", icon: "git-icon" },
      { name: "VS Code", icon: "vscode-icon" },
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-heading">Skills & Expertise</h2>
      <div className="skills-container">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category">
            <h3>{skillCategory.category}</h3>
            <div className="skills-grid">
              {skillCategory.items.map((skill, idx) => (
                <div
                  key={idx}
                  className={`skill-item ${
                    skill.placeholder ? "placeholder" : ""
                  }`}
                >
                  <img
                    src={`${skill.icon}.svg`}
                    alt={`${skill.name} icon`}
                    className="skill-icon"
                  />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="currently-learning">
        <h3>Currently Learning</h3>
        <p>Exploring Node.js and MongoDB to enhance backend skills.</p>
      </div>
    </section>
  );
}

export default Skills;
