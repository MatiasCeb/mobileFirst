import React from 'react';
import PlanSlider from './PlanSlider';
import "./styles/Plans.css";
import styled from "styled-components";

const StyledSlider = styled.section`
    display: flex;
    gap: 20px;
    height: 316px;
    overflow-x: scroll;
    overscroll-behavior-x: contain;
    scroll-snap-type: x proximity;
        @media (min-width: 930px) {
        justify-content: center;
    }
`;

const Plans = () => {
    return (
        <section id="plans" className="main-plans-container">
            <div className="plans--title">
                <h2>Escoge el plan que mejor se ajuste a ti.</h2>
                <p>Cualquier plan te da acceso a nuestra plataforma.</p>
            </div>
            <StyledSlider>
                <PlanSlider/>
                <PlanSlider/>
                <PlanSlider/>
            </StyledSlider>
        </section>
    )
}

export default Plans;