import {
    DiJsBadge,
    DiNodejsSmall,
    DiPostgresql,
    DiReact,
    DiPython,
    DiHtml5,
    DiCss3,
    DiSass
  } from "react-icons/di";
import { BiLogoTypescript, BiLogoDjango } from "react-icons/bi";
import "../styles/components/techs.sass";

const technologies = [
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "python", name: "Python", icon: <DiPython /> },
    { id: "typescript", name: "Typescript", icon: <BiLogoTypescript /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "postgre", name: "Postgresql", icon: <DiPostgresql /> },
    { id: "sass", name: "Sass", icon: <DiSass /> },
    { id: "django", name: "Django", icon: <BiLogoDjango /> }
  ];

const Techs = () => {
    return(
        <section className="technologies-container">
            <h2>Technologies</h2>
            <div className="technologies-grid">
            {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
            </div>
        </section>
    )
}

export default Techs;