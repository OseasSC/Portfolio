const Projects = () => {
    return (
      <section className="projects-container">
        <h2>Projects</h2>
          <p id="credits-1">
            Projects created at&nbsp;
            <a href="https://kenzie.com.br" id="credits-2" target="_blank">
              Kenzie Academy Brasil
            </a>
          </p>
        <section className="projects-grid">
          <div className="projects-card">
          <h3>
              <p>
              With the aim of companies registering their job vacancies and individuals searching for job opportunities, 
              the group project allows company registration and saves the data in an API. 
              The registered company can then post job vacancies that can be viewed by the user, 
              who can then submit their email and details for the selected vacancy.
              </p>
              <p>
                  Technologies used: React, Typescript, CSS, Express, API REST
              </p>
              <div className="projects-btn">
              <a href="https://kenzie-jobs-lemon.vercel.app" target="_blank" className="btn-project">Open Project</a>
              <a href="https://github.com/OseasSC/kenzie-jobs" target="_blank" className="btn-project">Open Source</a>
              </div>
          </h3>
          </div>


          <div className="projects-card">
          <h3>
              <p>
              A repository listing hub. Allows searching by GitHub username and displays their repositories with descriptions and links.
              </p>
              <p>
                Technologies used: Javascript, CSS; API REST
              </p>
              <div className="projects-btn">
              <a href="https://react-entrega-kenzie-hub-oseas-kfikx7ze6-oseassc.vercel.app/" target="_blank" className="btn-project">Open Project</a>
              <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub_OseasSC" target="_blank" className="btn-project">Open Source</a>
              </div>
          </h3>
          </div>
          

          <div className="projects-card">
          <h3>
              <p>
                In this ongoing project, users will have the ability to register and log in. 
                Once logged in, they will access a dashboard where they can register contacts, 
                with all data stored within the API developed for the project.
              </p>
              <p>
                Technologies used: React, TypeScript, Styled-components, Node.
              </p>
              <div className="projects-btn">
              <a href="https://fullstack-backend-express-pgsb-murex.vercel.app" target="_blank" className="btn-project">Open Project</a>
              <a href="https://github.com/Kenzie-Academy-Brasil-Developers/fullstack-backend-express" target="_blank" className="btn-project">Open Source</a>
              </div>
          </h3>
          </div>
        </section>
        <a href="https://github.com/OseasSC?tab=repositories" target="_blank" className="btn">
          Open Public Projects
        </a>
      </section>
    );
  };
  
  export default Projects;
  