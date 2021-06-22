import React from "react";
import Table from "./Table";
import "./styles/MainExchange.css";
import styled from "styled-components";

const StyledTables = styled.section`
    display: flex;
    gap: 20px;
    height: auto;
    overflow-x: scroll;
    scroll-snap-type: x proximity;
        @media (min-width: 930px) {
        justify-content: center;
    }
`;


const MainExchange = () => {
    return (
        <section className="main-exchange-container">
            <div className="backgroundImg"></div>
            <div className="main-exchange-container--title">
                <h2 className="main-exchange-container--h2">Visibilizamos todas las tasas de cambio.</h2>
                <p className="main-exchange-container--p">Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.</p>
            </div>
            <StyledTables>
                <Table/>
                <Table/>
            </StyledTables>
        </section>
    )
};

export default MainExchange;