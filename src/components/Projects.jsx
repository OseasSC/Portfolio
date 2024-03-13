const Projects = () => {
    return (
      <section className="projects-container">
        <h2>Projetos</h2>
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
                Com o objetivo de empresas cadastrarem suas vagas de emprego e pessoas procurarem vagas de emprego. 
                O Projeto feito em grupo permite o registro da empresa e salva os dados em uma API, 
                a empresa registrada pode então cadastrar vagas de emprego que podem ser visualizadas pelo usuário, 
                este podendo enviar seu email e dados para a vaga que selecionar.
              </p>
              <p>
                  React, Typescript, CSS
              </p>
              <a href="https://kenzie-jobs-t17-tsunode-rcoelhomf.vercel.app" target="_blank" className="btn-project">Ver Projeto</a>
          </h3>
          </div>


          <div className="projects-card">
          <h3>
              <p>
              Um Hub de listagem de repositórios. 
              Permite a pesquisa pelo nome de usuário do GitHub e mostra seus repositórios com descrição e link.
              </p>
              <p>
                  Javascript, CSS
              </p>
              <a href="https://react-entrega-kenzie-hub-oseas-kfikx7ze6-oseassc.vercel.app/" target="_blank" className="btn-project">Ver Projeto</a>
          </h3>
          </div>
          

          <div className="projects-card">
          <h3>
              <p>
              Um template para portfólio que tem a lista de tecnologias e projetos do usuário.
              </p>
              <p>
                  Javascript, React, CSS.
              </p>
              <a href="https://m3-s1-entrega-portfolio-template-oseas-sc.vercel.app/" target="_blank" className="btn-project">Ver Projeto</a>
          </h3>
          </div>
        </section>
        <a href="https://github.com/OseasSC?tab=repositories" target="_blank" className="btn">
          Ver Projetos Públicos
        </a>
      </section>
    );
  };
  
  export default Projects;
  