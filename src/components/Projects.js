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
                        imgSrc={require('../images/IMnotDb.png')}
                        title="IMnotDb"
                        tech="Bootstrap, CSS, HTML, Javascript"
                    />
                    <Project 
                        imgSrc={require('../images/AccessGESSS.png')}
                        title="Access GESSS"
                        tech="DigitalOcean, Google Maps API, MySQL, Wordpress"
                    />
                    <Project 
                        imgSrc={require('../images/ReactPortfolio.png')}
                        title="React Portfolio"
                        tech="CSS, Heroku, HTML, Javascript (ReactJS)"
                    />
                    <Project 
                        imgSrc={require('../images/Countdown.png')}
                        title="Countdown"
                        tech="Bootstrap, CSS, HTML, PHP"
                    />
                </div>
            </div>
        </div>
    </div>
);

export default Projects;