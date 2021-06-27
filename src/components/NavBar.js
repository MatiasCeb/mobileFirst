import React from "react";
import "./styles/NavBar.css"
import logo from "../components/assets/icons/devicon.png";
import linkedin from "../components/assets/icons/icons8-linkedin-white-30px.png";
import instagram from "../components/assets/icons/icons8-instagram-white-24px.png";
import github from "../components/assets/icons/icons8-github-white-30px.png";

class Navbar extends React.Component {
    render() {
        return (
        <div className="Navbar">
                <div classNAme="section">
                    <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
                    <span className="Header-name">Matías</span>
                    <span className="Header-lastname">Ceb</span>
                </div>
                <div className="section">
                    <div><a href="https://www.instagram.com/matiasceb/" rel="noopener noreferrer" target="_blank"><img className="navbar--img" src={instagram} alt="Logo" /></a></div>
                    <div><a href="https://www.linkedin.com/in/matías-ceballos-424001182/" rel="noopener noreferrer" target="_blank"><img className="navbar--img" src={linkedin} alt="Logo" /></a></div>
                    <div><a href="https://github.com/MatiasCeb" rel="noopener noreferrer" target="_blank"><img className="navbar--img" src={github} alt="Logo" /></a></div>
            </div>
        </div>
        )
    }
}

export default Navbar;