import React from 'react';
import Project from './Project';
import IMnotDB from '../images/IMnotDb.png';
import AccessGESSS from '../images/AccessGESSS.png';
import ReactPortfolio from '../images/ReactPortfolio.png';
import Countdown from '../images/Countdown.png';

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
                    // Had to pass it in like this because I was running into errors
                        // imgSrc={require('../images/IMnotDb.png')}
                        imgSrc={IMnotDB}
                        title="IMnotDb"
                        tech="Bootstrap, CSS, HTML, Javascript"
                    />
                    <Project 
                        // imgSrc={require('../images/AccessGESSS.png')}
                        imgSrc={AccessGESSS}
                        title="Access GESSS"
                        tech="DigitalOcean, Google Maps API, MySQL, Wordpress"
                    />
                    <Project 
                        // imgSrc={require('../images/ReactPortfolio.png')}
                        imgSrc={ReactPortfolio}
                        title="React Portfolio"
                        tech="CSS, Heroku, HTML, Javascript (ReactJS)"
                    />
                    <Project 
                        // imgSrc={require('../images/Countdown.png')}
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