import React from "react";

const SkillCard = (props) => {
    const {skill} = props;

    return (
        <div className="card-item">
            <img className="card-item__img" src={skill.image} alt={skill.title} />
            <p className="card-item__details--title">{skill.title}</p>
        </div>
    )
}

export default SkillCard;