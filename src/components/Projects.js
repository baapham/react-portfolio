import React from 'react';
import Project from './Project';
import IMnotDB from '../images/IMnotDb.png';
import AccessGESSS from '../images/AccessGESSS.png';
import ReactPortfolio from '../images/ReactPortfolio.png';
import Countdown from '../images/countdown.png';

// represents the whole entire projects section
const Projects = (props) => (
    <div className="projects">
        <div className="projects-main">
            <div className="content-container">
                <div  id={props.id} className="section-heading">
                    <h1>Projects</h1>
                </div>
                <div className="projects-content">
                    <Project 
                        imgSrc={IMnotDB}
                        title="IMnotDb"
                        tech="Bootstrap, CSS, HTML, Javascript"
                    />
                    <Project 
                        imgSrc={AccessGESSS}
                        title="Access GESSS"
                        tech="DigitalOcean, Google Maps API, MySQL, Wordpress"
                    />
                    <Project 
                        imgSrc={ReactPortfolio}
                        title="React Portfolio"
                        tech="CSS, Heroku, HTML, Javascript (ReactJS)"
                    />
                    <Project 
                        imgSrc={Countdown}
                        title="Countdown"
                        tech="Bootstrap, CSS, HTML, PHP"
                    />
                </div>
            </div>
        </div>
    </div>
);

export default Projects;