import React from 'react';
import Project from './Project';
const Projects = (props) => (
    <div className="projects">
        <div className="projects-main">
            <div className="content-container">
                <div  id={props.id} className="section-heading">
                    <h1>Projects</h1>
                </div>
                <div className="projects-content">
                    <Project 
                        imgSrc="IMnotDb.png" 
                        title="IMnotDb"
                        tech="Bootstrap, CSS, HTML, Javascript"
                    />
                    <Project 
                        imgSrc="AccessGESSS.png" 
                        title="Access GESSS"
                        tech="DigitalOcean, Google Maps API, MySQL, Wordpress"
                    />
                    <Project 
                        imgSrc="ReactPortfolio.png" 
                        title="React Portfolio"
                        tech="CSS, Heroku, HTML, Javascript (ReactJS)"
                    />
                    <Project 
                        imgSrc="Countdown.png" 
                        title="Countdown"
                        tech="Bootstrap, CSS, HTML, PHP"
                    />
                </div>
            </div>
        </div>
    </div>
);

export default Projects;