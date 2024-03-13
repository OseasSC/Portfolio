import { FaLinkedinIn, FaGithub} from "react-icons/fa";

import "../styles/components/social.sass";

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/vitor-os%C3%A9as-stoterau-22084a263/"},
    { name: "github", icon: <FaGithub />, href: "https://github.com/OseasSC" },
  ];

const Social = () => {
    return (
      <section id="social-networks">
        {socialNetworks.map((network) => (
          <a href={network.href} target="_blank" className="social-btn" id={network.name} key={network.name}>
            {network.icon}
          </a>
        ))}
      </section>
    );
};

export default Social;