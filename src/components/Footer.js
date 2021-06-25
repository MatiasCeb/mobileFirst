import React from "react";
import "./styles/Footer.css"

const Footer = () => {
    return(
        <div className="footer-container">
            <section className="section">
                <ul>
                    <li><a href="https://www.instagram.com/matiasceb/" target="_blank">Instagram</a></li>
                    <li><a href="https://www.linkedin.com/in/matías-ceballos-424001182/" target="_blank">Linkedin</a></li>
                    <li><a href="https://github.com/MatiasCeb" target="_blank">Github</a></li>
                </ul>
            </section>
            <section className="section">
                <img src="./assets/imgs/logo-footer.svg" alt="Logo de Batatabit 2020"/>
            </section>
        </div>
    )
};

export default Footer;