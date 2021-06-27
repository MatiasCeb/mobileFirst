import React from "react";



const ProjectCard = (props) => {
    const {project} = props;

    return (
        <div className="card-item">
        <img className="card-item__img" src={project.image} alt={project.title} />
        <div className="card-item__details">
            <p className="card-item__details--title">{project.title}</p>
            <p className="card-item__details--subtitle">
                {project.text}
            </p>
            <p className="linkbutton">Code</p><p className="linkbutton">Website</p>
        </div>
    </div>
    )
}

export default ProjectCard;