import React from "react";
import Table from "./Table";
import "./styles/MainExchange.css";
import styled from "styled-components";

const StyledTables = styled.section`
    justify-content: center;
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
            <div className="main-exchange-container--title">
                <h2 className="main-exchange-container--h2">Who am I?</h2>
                <p className="main-exchange-container--p">An experienced project manager with knowledge on react and javascript with a mix of soft skill.</p>
            </div>
            <div className="backgroundImg"></div>
            <StyledTables>
                <Table/>
            </StyledTables>
        </section>
    )
};

export default MainExchange;