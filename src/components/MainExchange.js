import React from "react";
import Table from "./Table";
import "./styles/MainExchange.css";

const MainExchange = () => {
    return (
        <section className="main-exchange-container">
            <div className="backgroundImg"></div>
            <div className="main-exchange-container--title">
                <h2 className="main-exchange-container--h2">Visibilizamos todas las tasas de cambio.</h2>
                <p className="main-exchange-container--p">Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.</p>
            </div>
            <Table/>
        </section>
    )
};

export default MainExchange;