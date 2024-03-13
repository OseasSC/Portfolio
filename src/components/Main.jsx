import Technologies from "./Techs";
import About from "./About";
import Projects from "./Projects";

import "../styles/components/main.sass";

const Main = () => {
  return (
    <main id="main-content">
      <About />
      <Technologies />
      <Projects />
    </main>
  );
};

export default Main;
