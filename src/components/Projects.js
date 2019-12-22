import React from 'react';
import Project from './Project';
const Projects = (props) => (
    <div id={props.id}>
        <div className="content-container">
            <h2>Projects
                
            </h2>
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
        </div>
    </div>
);

export default Projects;