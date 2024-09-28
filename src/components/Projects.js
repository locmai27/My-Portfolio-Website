const project_items = [
'https://github.com/sadasiannerd/CISC204-COMMERCE-WINNER-PREDICTOR',
'https://github.com/sadasiannerd/Daily-Weather-Data-Collector',
'https://github.com/sadasiannerd/cpp',
'https://github.com/sadasiannerd/NFTmarketplace'
]

const handleRedirect = (project_num) => {
    window.open(project_items[project_num], '_blank', 'noopener,noreferrer');
  };


const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <p>Make sure your browser allows pop-ups when you click on the project items</p>
      <div className="project-list" onClick={() => handleRedirect(0)}>
        <div className="project-item">
          <h3>COMMERCE WINNER PREDICTOR</h3>
          <p>A logic-based model to predict a potential winner product based on set criteria.</p>
        </div>
        <div className="project-item" onClick={() => handleRedirect(1)}>
          <h3>DAILY WEATHER DATA Collector</h3>
          <p>This Bash script retrieves weather forecast data for a specified location and can be scheduled as a cron job for automatic execution. It efficiently writes the data to a report file, ensuring timely updates and easy tracking of weather trends.</p>
        </div>
        <div className="project-item" onClick={() => handleRedirect(2)}>
          <h3>COMPETITIVE PROGRAMMING SOLUTION REPOSITORY</h3>
          <p>My solution and implementation for competitive programming problems across different online website and judges.</p>
        </div>
        <div className="project-item" onClick={() => handleRedirect(3)}>
          <h3>NFT MARKETPLACE</h3>
          <p>The logic ensures that ownership updates occur in real-time, providing users with an immediate and transparent experience. It's designed in the Motoko programming language and ensures to be conflict-free.</p>
        </div>
      </div>
      <p> and more to come ... 😁</p>
    </section>
  );
};

export default Projects;
