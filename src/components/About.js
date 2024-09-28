const About = () => {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-content">
      <div className="about-text">
          <p>
          I am Vu Thanh Loc Mai, a highly motivated and passionate Computer Science student at Queen’s University with a strong academic track record, maintaining a cumulative GPA of 4.29/4.30 and earning a spot on the Dean’s Honour List with Distinction. My expertise lies in system-level programming, algorithms, software architectures, and web development.
          </p>

            <p>
            With experience as a research assistant, I have developed automation tools to optimize cache usage in CI/CD workflows and contributed to state-of-the-art research on code differencing algorithms. I’ve also built a logic-based predictive model to assess market-winning products, demonstrating my ability to apply formal logic to real-world problems.
            </p>

            <p>
In addition to my technical projects, I actively participate in leadership roles, leading a web development team at Queen’s University and contributing to Google Developer Student Club initiatives. I am proficient in Python, C++, JavaScript, and various web technologies such as React and Node.js.
            </p>

            <p>
Outside of academics and work, I enjoy competitive programming, solving algorithmic challenges, and continuously honing my skills in data structures and optimization.
          </p>
      </div>
      <img
        src="/images/selfie-pic.jpg"  /* Assuming the image is in the public/images folder */
        alt="Selfie"
        className="selfie"
      />
      </div>
    </section>
  );
};

export default About;
