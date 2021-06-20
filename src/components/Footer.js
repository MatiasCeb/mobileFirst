import React from "react";
import "./styles/Footer.css"

const Footer = () => {
    return(
        <div className="footer-container">
            <section className="section">
                <ul>
                    <li><a href="#">Linkedin</a></li>
                    <li><a href="#">Crunchbase</a></li>
                    <li><a href="#">Hackernews</a></li>
                </ul>
            </section>
            <section className="section">
                <img src="./assets/imgs/logo-footer.svg" alt="Logo de Batatabit 2020"/>
            </section>
        </div>
    )
};

export default Footer;