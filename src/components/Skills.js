const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-content">
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <ul>
            <li>Python</li>
            <li>C++</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Web Development</h3>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>REST APIs</li>
            <li>Docker</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Tools & Frameworks</h3>
          <ul>
            <li>Git</li>
            <li>GitHub Actions</li>
            <li>YAML Configuration</li>
            <li>Visual Studio Code</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
