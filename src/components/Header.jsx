import Avatar from "../assets/profile_1.png";
import Social from "./Social"
import Info from "./Info"
import "../styles/components/header.sass";

const Header = () => {
    return <header id="header">
        <img src={Avatar} alt="Vitor Oséas Stoterau" />
        <p className="title">Fullstack Developer</p>
        <Social />
        <Info />
        <a href="https://docs.google.com/document/d/10Dzz0oT5kXCW0YHw5BwvD8AQ4ptAzqPKZplWJJ_Cnn0/edit?usp=sharing" target="_blank" className="btn">
        Open Resume
        </a>

    </header>
}

export default Header;