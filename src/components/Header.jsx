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
        <a href="https://drive.google.com/file/d/1i8JFmBwAYiXN0R_PI34SjJV4a947oPzm/view?usp=sharing" target="_blank" className="btn">
        Open Resume
        </a>

    </header>
}

export default Header;