import React from "react";
import "./styles/Header.css";


const Header = () => {
    return(
        <div className="header">
            <div className="header--img" alt="" />
            <div className="header--title-container">
                <h1 className="header--title-h1">Welcome! I´m Matías Ceballos</h1>
                <p className="header--title-p">Frontend Developer</p>
                <a href="#plans" className="header--button">
                    JS React Git StyledComponents <span className="header--button-span"></span>
                </a>
            </div>
        </div>
    )
};

export default Header;