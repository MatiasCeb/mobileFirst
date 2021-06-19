import React from "react";
import "./styles/PlanSlider.css";

const PlanSlider = () => {
    return (
        <section>
            <article className="plans-container--card">
                <p className="recommended">Recomendado</p>
                <div className="plan-info-container">
                    <h3 className="plan-card--title">Pago Anual</h3>
                    <p className="plan-card--price"><span>$</span>99</p>
                    <p className="plan-card--saving">Ahorrás $129 comparado al plan mensual.</p>
                    <button className="plan-card--ca">Escoger este <span></span></button>
                </div>
            </article>
    </section>
    )
}

export default PlanSlider;