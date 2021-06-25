import React from "react";
import projects from "./shared/projects";
import ProjectCard from "./ProjectCard";
import "./styles/MainExchange.css";
import StyledProject from "./styles/StyledProject";



const MainExchange = () => {
    return (
        <section className="main-exchange-container">
            <div className="main-exchange-container--title">
                <h2 className="main-exchange-container--h2">Who am I?</h2>
                <p className="main-exchange-container--p">An experienced project manager with knowledge on react and javascript with a mix of soft skill.</p>
            </div>
            <div className="backgroundImg"></div>
            <div className="product-detail--title">
                <h2>My projects</h2>
                <p>Some of my babys.</p>
            </div>
            <StyledProject>
                {projects.map((project) =>              
                    <ProjectCard key={project.id} project={project}/>)}
            </StyledProject>
        </section>
    )
};

export default MainExchange;