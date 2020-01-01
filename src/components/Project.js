import React from 'react';

// Represents each project in the project section
const Project = (props) => (
    <div className="project">
        <div className="project-image">
            <img src={props.imgSrc} alt={props.title}></img>
        </div>
        <div className="project-content">
            <div className="project-title">
                {props.title}
            </div>
            <div className="project-description">
                {props.description}
            </div>
            <div className="project-more">
                <button className="button-more">
                    <i className="arrow"></i> Find out more 
                </button>
            </div>
            
            
        </div>
    </div>
);

export default Project;