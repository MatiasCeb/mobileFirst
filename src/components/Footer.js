import React from "react";
import "./styles/Footer.css"

const Footer = () => {
    return(
        <div className="footer-container">
            <section className="section">
                <ul>
                    <li><a href="https://www.instagram.com/matiasceb/" rel="noopener noreferrer" target="_blank">Instagram</a></li>
                    <li><a href="https://www.linkedin.com/in/matías-ceballos-424001182/" rel="noopener noreferrer" target="_blank">Linkedin</a></li>
                    <li><a href="https://github.com/MatiasCeb" rel="noopener noreferrer" target="_blank">Github</a></li>
                </ul>
            </section>
            <section className="section">
                <img src="./assets/imgs/logo-footer.svg" alt="Logo de Batatabit 2020"/>
            </section>
        </div>
    )
};

export default Footer;