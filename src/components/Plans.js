import React from 'react';
import PlanSlider from './PlanSlider';
import "./styles/Plans.css";

const Plans = () => {
    return (
        <section id="plans" className="main-plans-container">
            <div className="plans--title">
                <h2>Escoge el plan que mejor se ajuste a ti.</h2>
                <p>Cualquier plan te da acceso a nuestra plataforma.</p>
            </div>
            <div className="plans-container--slider">
                <PlanSlider/>
                <PlanSlider/>
                <PlanSlider/>
            </div>
        </section>
    )
}

export default Plans;