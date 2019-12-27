import React from 'react';
import Project from './Project';
const Projects = (props) => (
    <div id={props.id} className="projects">
        <div className="projects-main">
            <div className="content-container">
                <div className="section-heading">
                    <h1>Projects</h1>
                </div>
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    </div>
);

export default Projects;