import React from 'react';
import Changing from './BackgroundChanging.js';
import NameAnimation from './NameAnimation';
import { Link } from 'react-scroll';
// represents the initial background component
class Background extends React.Component {
    constructor() {
        super();
        this.state = {
            headerHeight: 74
        }
    }
  // This is to set it so that the header doesn't ccover part of the about section
    workClick = () => {
        const aboutHeight = document.getElementById('about').offsetTop;
        const headerHeight = document.getElementById('header').offsetHeight;
        window.scrollTo(0, aboutHeight - headerHeight);
    };

    componentDidMount = () => {
        this.setState({headerHeight: document.getElementById('header').offsetHeight})
        Changing();
    }
    render() {
        return (
            <div className="main-container">
                <canvas id="main-canvas"></canvas>
                <div className="main-info">
                    <div className="main-header">
                        <NameAnimation />
                    </div>
                </div>
                <button 
                className="main-button" 
                >
                    <Link
                    activeClass="active"
                    to="about"
                    offset={-this.state.headerHeight}
                    spy={true}
                    smooth={true}
                    duration= {500}
                    >View My Work</Link>
                </button>
                
            </div>
        );
    } 
}

export default Background;
