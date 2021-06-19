import React from "react";
import "./styles/Header.css";


const Header = () => {
    return(
        <div className="header">
            <div className="header--img" alt="" />
            <div className="header--title-container">
                <h1 className="header--title-h1">La próxima revolución en el intercambio de criptomonedas.</h1>
                <p className="header--title-p">Batatabit ayuda a navegar entre los diferentes precios y tendencias.</p>
            </div>
        </div>
    )
};

export default Header;