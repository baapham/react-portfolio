import React from 'react';

// Represents each project in the project section
const Project = (props) => (
    <div className="project">
        <div className="project-image">
            <img src={props.imgSrc} alt={props.imgSrc}></img>
        </div>
        <div className="project-content">
            <div className="project-title">
                {props.title}
            </div>
            <div className="project-tech">
                {props.tech}
            </div>
            <button className="project-more">
                <i className="arrow"></i> Find out more 
            </button>
            
        </div>
    </div>
);

export default Project;