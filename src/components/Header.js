import React from "react";
import { skills } from "./shared/skills";
import SkillCard from "./SkillCard";
import StyledSkills from "./styles/StyledSkills";
import "./styles/Header.css";


const Header = () => {
    return(
        <div className="header">
            <div className="header--img" alt="" />
            <div className="header--title-container">
                <h1 className="header--title-h1">Welcome! I´m Matías Ceballos</h1>
                <p className="header--title-p">Frontend Developer</p>
                <StyledSkills>
                    {skills.map((skill) =>              
                        <SkillCard key={skill.id} skill={skill}/>)}
                </StyledSkills>
            </div>
        </div>
    )
};

export default Header;