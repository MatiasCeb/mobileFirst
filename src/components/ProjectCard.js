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
            <div className="card-link">
                <a href={project.code} rel="noopener noreferrer" target="_blank" className="linkbutton">Code</a>
                <a href={project.website} rel="noopener noreferrer" target="_blank" className="linkbutton">Website</a>
            </div>
        </div>
    </div>
    )
}

export default ProjectCard;