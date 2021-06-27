import React from "react";
import linkedin from "../components/assets/icons/icons8-linkedin-white-30px.png";
import instagram from "../components/assets/icons/icons8-instagram-white-24px.png";
import github from "../components/assets/icons/icons8-github-white-30px.png";
import "./styles/Footer.css"

const Footer = () => {
    return(
        <div className="footer-container">
            <section className="section">
                <ul>
                    <li><a href="https://www.instagram.com/matiasceb/" rel="noopener noreferrer" target="_blank"><img className="footer--img" src={instagram} alt="Logo" />Instagram</a></li>
                    <li><a href="https://www.linkedin.com/in/matías-ceballos-424001182/" rel="noopener noreferrer" target="_blank"><img className="footer--img" src={linkedin} alt="Logo" />Linkedin</a></li>
                    <li><a href="https://github.com/MatiasCeb" rel="noopener noreferrer" target="_blank"><img className="footer--img" src={github} alt="Logo" />Github</a></li>
                </ul>
            </section>
            <section className="section">
                <img src="./assets/imgs/logo-footer.svg" alt="Logo de Batatabit 2020"/>
            </section>
        </div>
    )
};

export default Footer;