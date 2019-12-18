import React from 'react';
import Project from './Project';
const Projects = (props) => (
    <div id={props.id}>
        <h2>This is the Projects Section</h2>
        <Project />
    </div>
);

export default Projects;