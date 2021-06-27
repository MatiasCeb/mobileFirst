import React from "react";
import "./styles/NavBar.css"
import logo from "../components/assets/icons/devicon.png";

class Navbar extends React.Component {
    render() {
        return (
        <div className="Navbar">
            <div className="container-fluid">
                <div>
                    <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
                    <span className="Header-name">Matías</span>
                    <span className="Header-lastname">Ceb</span>
                </div>
            </div>
        </div>
        )
    }
}

export default Navbar;