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
                        shortDescription={<p>A clone of IMDb, search for movies, get their ratings and more</p>}
                        longDescription='<h3 class="modal-subtitle">Description</h3>
                        <p>Hello</p>
                        <h3 class="modal-subtitle">Links</h3>
                        <p>Demo</p>
                        <p>Github</p>
                        <h3 class="modal-subtitle">Technology</h3>
                        <p>Technology used</p>
                        '
                    />
                    <Project 
                        imgSrc={AccessGESSS}
                        title="Access GESSS"
                        shortDescription={<p>A medium to connect conference attendees and organisers together</p>}
                        longDescription='<h3 class="modal-subtitle">Description</h3>
                        <p>Hello</p>
                        <h3 class="modal-subtitle">Links</h3>
                        <p>Demo</p>
                        <p>Github</p>
                        <h3 class="modal-subtitle">Technology</h3>
                        <p>Technology used</p>
                        '
                    />
                    <Project 
                        imgSrc={ReactPortfolio}
                        title="React Portfolio"
                        shortDescription={<p>This website! A portfolio to show my projects</p>}
                        longDescription='<h3 class="modal-subtitle">Description</h3>
                        <p>Hello</p>
                        <h3 class="modal-subtitle">Links</h3>
                        <p>Demo</p>
                        <p>Github</p>
                        <h3 class="modal-subtitle">Technology</h3>
                        <p>Technology used</p>
                        '
                    />
                    <Project 
                        imgSrc={Countdown}
                        title="Countdown"
                        shortDescription={<p>A simulation of the TV show of the same name</p>}
                        longDescription='<h3 class="modal-subtitle">Description</h3>
                        <p>Hello</p>
                        <h3 class="modal-subtitle">Links</h3>
                        <p>Demo</p>
                        <p>Github</p>
                        <h3 class="modal-subtitle">Technology</h3>
                        <p>Technology used</p>
                        '
                    />
                </div>
            </div>
        </div>
    </div>
);

export default Projects;