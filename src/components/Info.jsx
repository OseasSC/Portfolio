import "../styles/components/info.sass";

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const Info = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Phone</h3>
          <p>+55 (47)99626-6525</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>oseas.stoterau1@hotmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Location</h3>
          <p>Campo Alegre-SC / Brazil</p>
        </div>
      </div>
    </section>
  );
};

export default Info;
